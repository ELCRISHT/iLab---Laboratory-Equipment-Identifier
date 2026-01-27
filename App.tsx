
import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import ResultCard from './components/ResultCard';
import CameraOverlay from './components/CameraOverlay';
import SafetyProtocols from './components/SafetyProtocols';
import Library from './components/Library';
import Documentation from './components/Documentation';
import Privacy from './components/Privacy';
import { LabEquipmentInfo, IdentificationHistory } from './types';
import { identifyEquipment } from './services/geminiService';

export type AppView = 'home' | 'safety' | 'library' | 'docs' | 'privacy';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [loading, setLoading] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('ilab_theme');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const [currentResult, setCurrentResult] = useState<{ info: LabEquipmentInfo; imageUrl: string } | null>(null);
  const [history, setHistory] = useState<IdentificationHistory[]>([]);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedHistory = localStorage.getItem('ilab_history');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error("Failed to load history", e);
      }
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('ilab_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('ilab_theme', 'light');
    }
  }, [isDarkMode]);

  const saveToHistory = (info: LabEquipmentInfo, imageUrl: string) => {
    const newItem: IdentificationHistory = {
      id: Date.now().toString(),
      timestamp: Date.now(),
      imageUrl,
      info
    };
    const updatedHistory = [newItem, ...history].slice(0, 10);
    setHistory(updatedHistory);
    localStorage.setItem('ilab_history', JSON.stringify(updatedHistory));
  };

  const processIdentification = async (base64String: string, imageUrl: string) => {
    setLoading(true);
    setError(null);
    setCurrentResult(null);
    setCurrentView('home');
    
    try {
      const result = await identifyEquipment(base64String);
      if (result && result.name) {
        setCurrentResult({ info: result, imageUrl });
        saveToHistory(result, imageUrl);
      } else {
        setError("Identification failed. Please ensure the image shows lab equipment clearly.");
      }
    } catch (apiError) {
      console.error(apiError);
      setError("The system encountered an issue. Please try a different image.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = (reader.result as string).split(',')[1];
      const imageUrl = reader.result as string;
      await processIdentification(base64String, imageUrl);
    };
    reader.readAsDataURL(file);
  };

  const handleCameraCapture = async (base64String: string) => {
    setIsCameraOpen(false);
    const imageUrl = `data:image/jpeg;base64,${base64String}`;
    await processIdentification(base64String, imageUrl);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'safety':
        return <SafetyProtocols />;
      case 'library':
        return <Library />;
      case 'docs':
        return <Documentation />;
      case 'privacy':
        return <Privacy />;
      default:
        return (
          <>
            <section className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
                Analyze. Identify. <span className="text-blue-600 dark:text-blue-400">Experiment.</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-8">
                Capture or upload an image of any laboratory equipment to get instant scientific specifications.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => setIsCameraOpen(true)}
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-4 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 disabled:bg-blue-300 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Open Camera
                </button>

                <button 
                  onClick={() => fileInputRef.current?.click()}
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-400 text-slate-700 dark:text-slate-200 font-bold rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-3 group"
                >
                  <svg className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  Upload Image
                </button>

                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileUpload} 
                  accept="image/*" 
                  className="hidden" 
                />
              </div>
              
              {loading && (
                <div className="mt-8 flex flex-col items-center gap-3">
                  <div className="w-12 h-12 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin"></div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 animate-pulse">Consulting Knowledge Base...</p>
                </div>
              )}

              {error && (
                <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg inline-flex items-center gap-2 animate-bounce">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {error}
                </div>
              )}
            </section>

            {currentResult && (
              <section className="mb-16">
                <ResultCard info={currentResult.info} imageUrl={currentResult.imageUrl} />
              </section>
            )}

            {history.length > 0 && (
              <section>
                <div className="flex items-center justify-between mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Recent Identifications</h3>
                  <button 
                    onClick={() => {
                      setHistory([]);
                      localStorage.removeItem('ilab_history');
                    }}
                    className="text-sm text-slate-400 hover:text-red-500 transition-colors"
                  >
                    Clear History
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {history.map((item) => (
                    <div 
                      key={item.id} 
                      onClick={() => setCurrentResult({ info: item.info, imageUrl: item.imageUrl })}
                      className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-500 transition-all cursor-pointer flex gap-4 items-center group"
                    >
                      <img 
                        src={item.imageUrl} 
                        alt={item.info.name} 
                        className="w-16 h-16 rounded-lg object-cover bg-slate-100 dark:bg-slate-900 flex-shrink-0"
                      />
                      <div className="overflow-hidden">
                        <h4 className="font-bold text-slate-900 dark:text-slate-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {item.info.name}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{item.info.category}</p>
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 uppercase tracking-tighter">
                          {new Date(item.timestamp).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Header currentView={currentView} setView={setCurrentView} isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
      
      {isCameraOpen && (
        <CameraOverlay 
          onCapture={handleCameraCapture} 
          onClose={() => setIsCameraOpen(false)} 
        />
      )}

      <main className="flex-grow max-w-7xl mx-auto px-4 py-8 w-full">
        {renderContent()}
      </main>

      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 mt-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-slate-800 dark:bg-slate-700 rounded flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">iL</span>
            </div>
            <span className="text-slate-900 dark:text-slate-100 font-bold">iLab Intelligence</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 max-w-lg mx-auto">
            iLab is a diagnostic support tool designed for educational and professional laboratory environments. 
            Always consult official safety documentation before handling hazardous equipment.
          </p>
          <div className="flex justify-center gap-6">
            <button onClick={() => setCurrentView('docs')} className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors text-sm">Documentation</button>
            <button onClick={() => setCurrentView('privacy')} className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors text-sm">Privacy</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

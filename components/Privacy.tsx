
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="bg-slate-900 dark:bg-slate-800 p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Privacy & Data Ethics</h2>
          <p className="text-slate-400 leading-relaxed">
            At iLab, we prioritize your scientific integrity and digital privacy. 
            Understanding how your data is handled is key to a secure research environment.
          </p>
        </div>
        
        <div className="p-8 md:p-12 space-y-10">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
              Image Processing
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Images captured or uploaded to iLab are sent to Google Gemini APIs for transient analysis. 
              These images are not permanently stored on our servers. Once the identification result is returned, 
              the data is cleared from the active processing stream.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
              Local Storage
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Your identification history is stored exclusively in your browser's <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded text-blue-600 dark:text-blue-400">localStorage</code>. 
              This means your history remains on your device and is never uploaded to any cloud service. 
              You can clear this data at any time using the "Clear History" button on the Home screen.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
              Usage Analytics
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We do not track individual users or maintain identifiable logs of your experiments. 
              The application is designed as a standalone tool to support lab safety and education.
            </p>
          </div>

          <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
            <p className="text-xs text-slate-400 dark:text-slate-500">
              Last updated: October 2023. By using iLab, you agree to the processing of images for identification purposes. 
              Gemini AI processing is subject to Google's generative AI terms of service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;


import React from 'react';
import { LabEquipmentInfo } from '../types';

interface ResultCardProps {
  info: LabEquipmentInfo;
  imageUrl: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ info, imageUrl }) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="md:flex">
        <div className="md:w-1/3 bg-slate-100 dark:bg-slate-800 relative min-h-[300px]">
          <img 
            src={imageUrl} 
            alt={info.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-blue-600 dark:bg-blue-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-lg">
              {info.category}
            </span>
          </div>
        </div>
        
        <div className="md:w-2/3 p-6 md:p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{info.name}</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic border-l-4 border-blue-500 dark:border-blue-400 pl-4">
              {info.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-200 uppercase tracking-widest mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Primary Function
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">{info.primaryUse}</p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-200 uppercase tracking-widest mb-3 flex items-center gap-2 text-red-600 dark:text-red-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Safety Protocol
              </h3>
              <ul className="space-y-2">
                {info.safetyPrecautions.map((item, i) => (
                  <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-200 uppercase tracking-widest mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Maintenance
              </h3>
              <ul className="space-y-2">
                {info.maintenanceTips.map((item, i) => (
                  <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-200 uppercase tracking-widest mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Interesting Fact
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {info.historicalContext || "A fundamental tool in modern laboratories worldwide."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;

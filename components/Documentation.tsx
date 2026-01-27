
import React from 'react';

const Documentation: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 prose prose-slate dark:prose-invert">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Documentation</h2>
        <p className="text-slate-600 dark:text-slate-400">Everything you need to know about the iLab Identifier.</p>
      </div>

      <section className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
          Getting Started
        </h3>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          iLab uses advanced computer vision to identify laboratory tools. To get the best results:
        </p>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li><strong>Lighting:</strong> Ensure the equipment is well-lit without excessive glare.</li>
          <li><strong>Angle:</strong> Capture the item from a side profile or top-down view for clear geometry.</li>
          <li><strong>Focus:</strong> Hold your camera steady to avoid motion blur.</li>
          <li><strong>Isolation:</strong> Try to keep only one piece of equipment in the frame at a time.</li>
        </ul>
      </section>

      <section className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
          Feature Guide
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">Live Camera</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Use the integrated camera module to identify equipment in real-time within the lab environment.</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">Local History</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Your recent identifications are saved locally in your browser for quick reference across sessions.</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">Detailed Specs</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Every identification provides safety protocols, maintenance tips, and historical context.</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">Offline Access</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">The library and documentation are available offline once the app is loaded.</p>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
          FAQ
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">Can iLab identify chemical spills?</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm">No, iLab is strictly for equipment identification. Do not use this tool for chemical analysis or hazardous spill detection.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">How accurate is the identification?</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm">iLab achieves {'>'}95% accuracy for standard laboratory glassware and electronic instruments. However, it should not be the sole source of safety information.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;


import React from 'react';

const SafetyProtocols: React.FC = () => {
  const protocols = [
    {
      title: "Personal Protective Equipment (PPE)",
      items: [
        "Always wear a lab coat and safety goggles.",
        "Use nitrile or latex gloves when handling chemicals.",
        "Wear closed-toe shoes; no sandals allowed in the lab.",
        "Tie back long hair and avoid loose clothing."
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Chemical Handling",
      items: [
        "Never pipet by mouth; always use mechanical devices.",
        "Label all containers immediately.",
        "Work in a fume hood when using volatile substances.",
        "Dispose of hazardous waste in designated containers."
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Emergency Response",
      items: [
        "Locate the nearest eyewash station and safety shower.",
        "Know the position of the fire extinguisher and first aid kit.",
        "Report all accidents, regardless of size, to the instructor.",
        "Understand the evacuation route for your specific room."
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Safety Protocols</h2>
        <p className="text-slate-600 dark:text-slate-400">Standard operating procedures for maintaining a safe laboratory environment.</p>
      </div>

      <div className="grid gap-8">
        {protocols.map((section, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center">
                {section.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{section.title}</h3>
            </div>
            <ul className="space-y-4">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 flex gap-4">
        <div className="text-amber-600 dark:text-amber-500 flex-shrink-0">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-1">Important Reminder</h4>
          <p className="text-amber-800 dark:text-amber-200 text-sm leading-relaxed">
            Safety Data Sheets (SDS) are available for all chemicals used in this facility. 
            Review the SDS for any new substance before beginning your experiment. 
            If you're unsure, ask your lab supervisor immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SafetyProtocols;

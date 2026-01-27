
import React, { useState } from 'react';

const Library: React.FC = () => {
  const [search, setSearch] = useState('');

  const equipment = [
    { name: "Beaker", category: "Glassware", description: "Cylindrical container used for mixing, stirring, and heating liquids." },
    { name: "Bunsen Burner", category: "Heating", description: "Gas burner used for heating, sterilization, and combustion." },
    { name: "Centrifuge", category: "Electronic", description: "Device that uses centrifugal force to separate substances of different densities." },
    { name: "Erlenmeyer Flask", category: "Glassware", description: "Conical flask used for titration, boiling, and storage." },
    { name: "Microscope", category: "Optical", description: "Instrument used to see objects that are too small for the naked eye." },
    { name: "Pipette", category: "Measuring", description: "Tool for measuring and transferring small volumes of liquid." },
    { name: "Spectrophotometer", category: "Electronic", description: "Instrument that measures the intensity of light as a function of its color." },
    { name: "Volumetric Flask", category: "Glassware", description: "Calibrated to contain a precise volume at a specific temperature." },
    { name: "Autoclave", category: "Sterilization", description: "Machine that uses steam under pressure to kill bacteria and viruses." },
    { name: "PH Meter", category: "Electronic", description: "Instrument used to measure the acidity or alkalinity of a liquid." },
    { name: "Test Tube", category: "Glassware", description: "Finger-like length of glass or clear plastic tubing, open at the top." },
    { name: "Graduated Cylinder", category: "Measuring", description: "Used to measure the volume of a liquid precisely." },
    { name: "Petri Dish", category: "Biology", description: "Shallow cylindrical glass or plastic lidded dish that biologists use to culture cells." },
    { name: "Hot Plate", category: "Heating", description: "Portable self-contained tabletop small appliance that features one or more electric heating elements." },
    { name: "Magnetic Stirrer", category: "Mixing", description: "Uses a rotating magnetic field to cause a stir bar immersed in a liquid to spin." },
    { name: "Analytical Balance", category: "Measuring", description: "Highly sensitive lab instrument designed to accurately measure mass in the sub-milligram range." },
    { name: "Desiccator", category: "Storage", description: "Enclosure containing desiccants used for preserving moisture-sensitive items." },
    { name: "Separatory Funnel", category: "Glassware", description: "Used in liquid-liquid extractions to separate the components of a mixture." },
    { name: "Burette", category: "Measuring", description: "Graduated glass tube with a tap at one end, for delivering known volumes of a liquid." },
    { name: "Condenser", category: "Glassware", description: "Used to cool hot vapors or liquids during distillation or reflux." },
    { name: "Watch Glass", category: "Glassware", description: "Circular concave piece of glass used as a surface to evaporate a liquid or to hold solids." },
    { name: "Crucible", category: "Heating", description: "Ceramic or metal container in which metals or other substances may be melted or subjected to high heat." },
    { name: "Mortar and Pestle", category: "Mixing", description: "Used since ancient times to prepare ingredients or substances by crushing and grinding." },
    { name: "Wash Bottle", category: "Cleaning", description: "Squeeze bottle with a nozzle, used to rinse various pieces of laboratory glassware." },
    { name: "Thermometer", category: "Measuring", description: "Instrument for measuring and indicating temperature." },
    { name: "Fume Hood", category: "Safety", description: "Ventilation system that primarily functions to provide personnel protection against toxic fumes." },
    { name: "Incubator", category: "Biology", description: "Device used to grow and maintain microbiological cultures or cell cultures." },
    { name: "Gel Electrophoresis Tank", category: "Biology", description: "Used to separate DNA, RNA, or protein molecules based on their size and electrical charge." },
    { name: "PCR Machine", category: "Biology", description: "Thermal cycler used to amplify segments of DNA via the polymerase chain reaction." },
    { name: "Vortex Mixer", category: "Mixing", description: "Simple device used commonly in laboratories to mix small vials of liquid." },
    { name: "Buchner Funnel", category: "Glassware", description: "Used in filtration for vacuum-assisted separation of solids from liquids." },
    { name: "Calorimeter", category: "Measuring", description: "Apparatus for measuring the amount of heat involved in a chemical reaction or other process." },
    { name: "Spectroscope", category: "Optical", description: "Used to produce and record spectra for examination." },
    { name: "Hydrometer", category: "Measuring", description: "Instrument used to measure the specific gravity (or relative density) of liquids." },
    { name: "Manometer", category: "Measuring", description: "Instrument for measuring the pressure of a fluid." },
    { name: "Rotary Evaporator", category: "Glassware", description: "Used for the efficient and gentle removal of solvents from samples by evaporation." },
    { name: "Sonicator", category: "Electronic", description: "Applies sound energy to agitate particles in a sample." },
    { name: "Colony Counter", category: "Biology", description: "Used to count colonies of bacteria or other microorganisms on a culture plate." },
    { name: "Refractometer", category: "Measuring", description: "Measures the extent to which light is bent (refracted) when it moves from air into a sample." },
    { name: "Glove Box", category: "Safety", description: "Sealed container designed to allow one to manipulate objects where a separate atmosphere is desired." },
    { name: "Vacuum Pump", category: "Electronic", description: "Device that draws gas molecules from a sealed volume in order to leave behind a partial vacuum." },
    { name: "Chromatography Column", category: "Glassware", description: "Used in column chromatography for the separation of chemical compounds." },
    { name: "Flow Cytometer", category: "Biology", description: "Laser-based technology used to analyze the physical and chemical characteristics of cells." },
    { name: "Lyophilizer", category: "Sterilization", description: "Freeze-dryer used for the removal of water or other solvents from a product." },
    { name: "Staining Rack", category: "Biology", description: "Used to hold multiple slides during the staining process in histology or microbiology." },
    { name: "Gas Chromatograph", category: "Electronic", description: "Instrument for separating and analyzing compounds that can be vaporized without decomposition." }
  ];

  const filtered = equipment.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase()) || 
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Equipment Library</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8">A comprehensive catalog of {equipment.length} laboratory apparatus and scientific instruments.</p>
        
        <div className="relative max-w-2xl">
          <input 
            type="text" 
            placeholder="Search equipment or categories (e.g. Glassware, Biology)..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-3 pl-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none shadow-sm transition-all dark:text-white"
          />
          <svg className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((item, idx) => (
          <div 
            key={idx} 
            className="group relative h-48 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500 shadow-sm transition-all overflow-hidden"
          >
            {/* Standard View */}
            <div className="flex flex-col h-full transition-opacity duration-300 group-hover:opacity-10">
              <div className="mb-3">
                <span className="text-[9px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                  {item.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 leading-tight">{item.name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-auto flex items-center gap-1">
                Hover to see details
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </p>
            </div>

            {/* Hover Reveal View */}
            <div className="absolute inset-0 p-6 bg-blue-600 dark:bg-blue-700 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
              <span className="text-[10px] font-bold text-blue-100 uppercase tracking-widest mb-2 opacity-80">
                {item.category}
              </span>
              <h3 className="text-lg font-bold text-white mb-2 leading-tight">{item.name}</h3>
              <p className="text-sm text-blue-50 leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-32 bg-slate-100 dark:bg-slate-900 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800">
          <div className="bg-slate-200 dark:bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
             <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
             </svg>
          </div>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">No equipment found matching "{search}"</p>
          <button 
            onClick={() => setSearch('')}
            className="mt-4 text-blue-600 dark:text-blue-400 font-bold hover:underline"
          >
            View all equipment
          </button>
        </div>
      )}
    </div>
  );
};

export default Library;

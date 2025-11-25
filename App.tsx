import React, { useState } from 'react';
import { Calendar, Compass, Wallet, Map } from 'lucide-react';
import { itineraryData } from './data';
import WeatherWidget from './components/WeatherWidget';
import ItineraryCard from './components/ItineraryCard';
import InfoSection from './components/InfoSection';
import BudgetSection from './components/BudgetSection';

enum Tab {
  Itinerary = '行程',
  Info = '資訊',
  Budget = '預算',
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Itinerary);
  const [expandedDay, setExpandedDay] = useState<string | null>(itineraryData[0].date);

  const toggleDay = (date: string) => {
    setExpandedDay(expandedDay === date ? null : date);
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] flex flex-col max-w-md mx-auto relative shadow-2xl">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-[#fdfbf7]/90 backdrop-blur-md px-6 py-4 border-b border-stone-100 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-stone-800 tracking-wide">神奈川九日遊</h1>
          <p className="text-xs text-stone-500 tracking-widest mt-0.5">KANAGAWA TRIP</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-stone-200 overflow-hidden border border-stone-300">
           {/* Placeholder for user avatar or app icon */}
           <div className="w-full h-full bg-stone-300 flex items-center justify-center text-xs text-stone-500">我</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto no-scrollbar">
        {activeTab === Tab.Itinerary && (
          <div className="px-4 py-6 space-y-4 pb-24">
            {itineraryData.map((day) => {
              const isExpanded = expandedDay === day.date;
              return (
                <div key={day.date} className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden transition-all duration-300">
                  {/* Day Header */}
                  <div 
                    onClick={() => toggleDay(day.date)}
                    className={`p-5 flex items-center justify-between cursor-pointer ${isExpanded ? 'bg-stone-50/50' : 'bg-white'}`}
                  >
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-stone-800 font-mono">{day.date}</span>
                        <span className="text-xs font-bold text-stone-400 bg-stone-100 px-1.5 py-0.5 rounded">{day.dayOfWeek}</span>
                      </div>
                      <h2 className="text-sm font-medium text-stone-600 mt-1">{day.title}</h2>
                    </div>
                    <WeatherWidget temp={day.weather.temp} condition={day.weather.condition} />
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="px-5 pt-2 pb-6 bg-stone-50/30">
                      <div className="mt-4">
                        {day.items.map((item) => (
                          <ItineraryCard key={item.id} item={item} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {activeTab === Tab.Info && <InfoSection />}
        
        {activeTab === Tab.Budget && <BudgetSection />}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[380px] bg-stone-800/90 backdrop-blur-md text-stone-200 rounded-full shadow-2xl px-6 py-3 flex justify-between items-center z-30">
        <button 
          onClick={() => setActiveTab(Tab.Itinerary)}
          className={`flex flex-col items-center gap-1 transition-colors ${activeTab === Tab.Itinerary ? 'text-white' : 'text-stone-400'}`}
        >
          <Compass className="w-5 h-5" />
          <span className="text-[10px] font-medium">行程</span>
        </button>
        
        <div className="w-px h-6 bg-stone-600/50" />

        <button 
          onClick={() => setActiveTab(Tab.Info)}
          className={`flex flex-col items-center gap-1 transition-colors ${activeTab === Tab.Info ? 'text-white' : 'text-stone-400'}`}
        >
          <Calendar className="w-5 h-5" />
          <span className="text-[10px] font-medium">資訊</span>
        </button>

        <div className="w-px h-6 bg-stone-600/50" />

        <button 
          onClick={() => setActiveTab(Tab.Budget)}
          className={`flex flex-col items-center gap-1 transition-colors ${activeTab === Tab.Budget ? 'text-white' : 'text-stone-400'}`}
        >
          <Wallet className="w-5 h-5" />
          <span className="text-[10px] font-medium">預算</span>
        </button>
      </nav>
    </div>
  );
};

export default App;
import React from 'react';
import { MapPin, Info, Tag, Utensils, Bed, Plane, Train, Camera } from 'lucide-react';
import { ItineraryItem, LocationType } from '../types';

interface Props {
  item: ItineraryItem;
}

const ItineraryCard: React.FC<Props> = ({ item }) => {
  const getIcon = () => {
    switch (item.type) {
      case LocationType.Flight: return <Plane className="w-5 h-5 text-sky-500" />;
      case LocationType.Hotel: return <Bed className="w-5 h-5 text-indigo-500" />;
      case LocationType.Food: return <Utensils className="w-5 h-5 text-orange-500" />;
      case LocationType.Transport: return <Train className="w-5 h-5 text-emerald-600" />;
      default: return <Camera className="w-5 h-5 text-rose-500" />;
    }
  };

  const openMap = () => {
    const query = encodeURIComponent(item.locationStr);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <div className="relative pl-8 pb-8 border-l-2 border-stone-200 last:border-0 last:pb-0">
      {/* Timeline Dot */}
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-stone-50 border-2 border-stone-300 flex items-center justify-center">
        <div className={`w-2 h-2 rounded-full ${
          item.type === LocationType.Transport ? 'bg-emerald-400' :
          item.type === LocationType.Food ? 'bg-orange-400' :
          item.type === LocationType.Spot ? 'bg-rose-400' : 'bg-indigo-400'
        }`} />
      </div>

      <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100 active:scale-[0.99] transition-transform duration-200">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            {getIcon()}
            <span className="text-xs font-bold uppercase tracking-wider text-stone-400">{item.time || item.type}</span>
          </div>
          <button 
            onClick={openMap}
            className="flex items-center gap-1 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-lg hover:bg-blue-100"
          >
            <MapPin size={12} />
            導航
          </button>
        </div>

        <h3 className="text-lg font-bold text-stone-800 mb-1">{item.title}</h3>
        <p className="text-sm text-stone-600 mb-3 leading-relaxed">{item.description}</p>

        {/* AI Tips Section */}
        {item.tips && (
          <div className="bg-amber-50/50 rounded-lg p-3 mb-3 border border-amber-100/50">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <p className="text-xs text-stone-700 font-medium">{item.tips}</p>
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {item.tags.map(tag => (
            <span key={tag} className={`text-[10px] px-2 py-0.5 rounded-full border flex items-center gap-1
              ${tag.includes('必') ? 'bg-rose-50 border-rose-100 text-rose-600' : 'bg-stone-50 border-stone-100 text-stone-500'}
            `}>
              <Tag size={10} />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItineraryCard;
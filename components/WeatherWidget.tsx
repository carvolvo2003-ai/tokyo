import React from 'react';
import { Cloud, Sun, CloudRain } from 'lucide-react';

interface WeatherProps {
  temp: string;
  condition: 'Sunny' | 'Cloudy' | 'Rain';
}

const WeatherWidget: React.FC<WeatherProps> = ({ temp, condition }) => {
  const renderIcon = () => {
    switch (condition) {
      case 'Sunny': return <Sun className="w-5 h-5 text-orange-500" />;
      case 'Rain': return <CloudRain className="w-5 h-5 text-blue-500" />;
      default: return <Cloud className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-stone-100">
      {renderIcon()}
      <span className="text-sm font-medium text-stone-600">{temp}</span>
    </div>
  );
};

export default WeatherWidget;
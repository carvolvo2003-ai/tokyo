import React from 'react';
import { Plane, Bed, Phone, CreditCard } from 'lucide-react';
import { flights, hotels } from '../data';

const InfoSection: React.FC = () => {
  return (
    <div className="px-4 py-6 space-y-8 pb-24">
      
      {/* Flights */}
      <section>
        <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
          <Plane className="text-sky-500" /> 航班資訊
        </h2>
        <div className="space-y-3">
          {flights.map((flight, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-lg text-sky-900">{flight.airline}</span>
                <span className="text-xs font-mono bg-stone-100 px-2 py-1 rounded">{flight.flightNo}</span>
              </div>
              <div className="text-sm text-stone-600 font-medium mb-1">{flight.time}</div>
              <div className="text-sm text-stone-500 mb-2">{flight.route}</div>
              <div className="text-xs text-stone-400 border-t border-stone-50 pt-2 mt-2">
                {flight.baggage}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hotels */}
      <section>
        <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
          <Bed className="text-indigo-500" /> 住宿安排
        </h2>
        <div className="space-y-3">
          {hotels.map((hotel, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm">
              <h3 className="font-bold text-stone-800 mb-1">{hotel.name}</h3>
              <p className="text-sm text-indigo-600 font-medium mb-1">{hotel.dates}</p>
              <p className="text-xs text-stone-500 mb-2">{hotel.address}</p>
              <p className="text-xs text-stone-400 bg-stone-50 p-2 rounded">
                {hotel.notes}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency */}
      <section>
        <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
          <Phone className="text-rose-500" /> 緊急聯絡
        </h2>
        <div className="bg-rose-50 p-4 rounded-xl border border-rose-100">
          <div className="space-y-2 text-sm text-rose-900">
            <p className="flex justify-between"><span>警察局</span> <span className="font-mono font-bold">110</span></p>
            <p className="flex justify-between"><span>火警/救護車</span> <span className="font-mono font-bold">119</span></p>
            <p className="flex justify-between"><span>旅外國人急難救助</span> <span className="font-mono font-bold">+81-3-3280-7917</span></p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default InfoSection;
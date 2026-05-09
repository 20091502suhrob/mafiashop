import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('keyslar');

  // Keyslar ro'yxati (Mafiya tematikasida)
  const cases = [
    { id: 1, name: "Omerta Case", price: 500, opens: 0, image: "💼" },
    { id: 2, name: "Vendetta Case", price: 2500, opens: 0, image: "🔫" },
    { id: 3, name: "Capo Case", price: 10000, opens: 0, image: "🎩" },
    { id: 4, name: "Don's Secret", price: 50000, opens: 0, image: "🩸" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pb-24 select-none">
      
      {/* Yuqori Qism (Header) */}
      <header className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-red-900/50 py-4 text-center">
        <h1 className="text-2xl font-black tracking-widest text-white uppercase">
          Mafia<span className="text-red-600">shop</span>
        </h1>
        <p className="text-gray-400 text-xs mt-1">Haqiqiy mafiyalar tanlovi</p>
      </header>

      {/* Asosiy Qism - Keyslar Sahifasi */}
      <main className="p-4">
        {activeTab === 'keyslar' && (
          <>
            <h2 className="text-xl font-bold mb-4 text-center">Keyslar</h2>
            
            <div className="grid grid-cols-2 gap-3">
              {cases.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-[#111] border border-red-900/30 rounded-2xl overflow-hidden relative shadow-[0_4px_15px_rgba(220,38,38,0.05)] transition-all active:scale-95"
                >
                  {/* Necha marta ochilgani - siz aytgandek 0 */}
                  <div className="absolute top-2 left-2 bg-black/80 text-gray-300 text-[10px] px-2 py-1 rounded flex items-center gap-1 border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
                    {item.opens} opens
                  </div>

                  {/* Rasm qismi (Hozircha Emoji) */}
                  <div className="h-32 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center text-5xl">
                    {item.image}
                  </div>

                  {/* Keys nomi va Narxi */}
                  <div className="p-3 text-center border-t border-red-900/20">
                    <h3 className="font-bold text-sm text-gray-100 mb-2 truncate">{item.name}</h3>
                    <button className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold py-1.5 rounded-lg flex justify-center items-center gap-1 text-sm transition-colors">
                      💎 {item.price.toLocaleString()}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>

      {/* Pastki Menyu (Bottom Navigation) */}
      <nav className="fixed bottom-0 left-0 w-full bg-[#0a0a0a] border-t border-red-900/50 pb-safe pt-2 px-2 z-50 rounded-t-2xl">
        <div className="flex justify-between items-center max-w-md mx-auto">
          
          <button onClick={() => setActiveTab('keyslar')} className={`flex flex-col items-center p-2 w-1/4 transition-colors ${activeTab === 'keyslar' ? 'text-red-500' : 'text-gray-500 hover:text-gray-300'}`}>
            <span className="text-2xl mb-1">🎲</span>
            <span className="text-[10px] font-medium">Keyslar</span>
          </button>
          
          <button onClick={() => setActiveTab('market')} className={`flex flex-col items-center p-2 w-1/4 transition-colors ${activeTab === 'market' ? 'text-red-500' : 'text-gray-500 hover:text-gray-300'}`}>
            <span className="text-2xl mb-1">🏪</span>
            <span className="text-[10px] font-medium">Market</span>
          </button>
          
          <button onClick={() => setActiveTab('dostlar')} className={`flex flex-col items-center p-2 w-1/4 transition-colors ${activeTab === 'dostlar' ? 'text-red-500' : 'text-gray-500 hover:text-gray-300'}`}>
            <span className="text-2xl mb-1">👥</span>
            <span className="text-[10px] font-medium">Do'stlar</span>
          </button>
          
          <button onClick={() => setActiveTab('profil')} className={`relative flex flex-col items-center p-2 w-1/4 transition-colors ${activeTab === 'profil' ? 'text-red-500' : 'text-gray-500 hover:text-gray-300'}`}>
            {/* Profil ikonkasidagi "YANGI" yozuvi */}
            <span className="absolute top-0 right-2 bg-red-600 text-white text-[8px] font-bold px-1 rounded-sm">YANGI</span>
            <span className="text-2xl mb-1">👤</span>
            <span className="text-[10px] font-medium">Profil</span>
          </button>

        </div>
      </nav>

    </div>
  );
}
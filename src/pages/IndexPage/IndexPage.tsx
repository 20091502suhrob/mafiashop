import React, { useState } from 'react';

export function IndexPage() {
  const [activeTab, setActiveTab] = useState('main');

  // Keyslar ro'yxati
  const cases = [
    { id: 1, name: "Omerta Case", price: 500, opens: 0, image: "💼" },
    { id: 2, name: "Vendetta Case", price: 2500, opens: 0, image: "🔫" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pb-24 select-none">
      
      {/* 1. ASOSIY SAHIFA (RFL PRO uslubidagi Daily Bonus qismi) */}
      {activeTab === 'main' && (
        <main className="p-4 flex flex-col items-center">
          <div className="w-full bg-[#111] border border-red-900/30 rounded-[32px] p-6 mt-4 text-center shadow-lg">
            <div className="relative inline-block mb-4">
              <img 
                src="https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0jswnUfJxP67Zvo98rvv5fU3An9as6huV-mDte_v8cnSRE56MpsY6-v6fVZn1vGfJzgd7N2xk9LaxqasMOmIk2oD7Z0i3L-U99SgjVHm_0VvYmnyI9SccVNoNV6G_FPrxO_ph5K57szLzXFiuXIn-z-dyLAs736E" 
                alt="M9 Bayonet" 
                className="w-48 mx-auto drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]"
              />
            </div>
            <h2 className="text-3xl font-black mb-1 italic">13 kunlik seriya</h2>
            <div className="bg-red-600/20 text-red-500 text-[10px] font-bold px-3 py-1 rounded-full inline-block mb-4 uppercase tracking-tighter border border-red-600/30">
              tanlov
            </div>
            
            <p className="text-gray-400 text-xs mb-6">M9 Bayonet «Case Hardened» gacha qolgan 14 / 28 kunlar</p>
            
            {/* Kunlik topshiriqlar ro'yxati */}
            <div className="space-y-3 text-left">
              {[14, 15].map((kun) => (
                <div key={kun} className="bg-black/40 border border-white/5 rounded-2xl p-4 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-xl shadow-[0_0_10px_rgba(37,99,235,0.4)]">💎</div>
                    <div>
                      <div className="font-bold text-sm">Kun {kun}</div>
                      <div className="text-blue-400 text-[10px]">+200 💎 • 6.5K 👤</div>
                    </div>
                  </div>
                  <button className="bg-[#222] text-gray-500 text-xs font-bold px-4 py-2 rounded-full cursor-not-allowed">Olish</button>
                </div>
              ))}
              <div className="bg-black/20 border border-white/5 rounded-2xl p-4 flex justify-between items-center opacity-60">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pink-500/20 rounded-xl flex items-center justify-center text-xl">🎁</div>
                    <div className="font-bold text-sm">Keyingi kunlar</div>
                 </div>
                 <span className="text-gray-600">▼</span>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* 2. KEYSLAR BO'LIMI */}
      {activeTab === 'keyslar' && (
        <main className="p-4">
          <h2 className="text-xl font-bold mb-4 text-center uppercase tracking-widest text-red-600">Keyslar</h2>
          <div className="grid grid-cols-2 gap-3">
            {cases.map((item) => (
              <div key={item.id} className="bg-[#111] border border-red-900/30 rounded-2xl overflow-hidden relative active:scale-95 transition-transform">
                <div className="absolute top-2 left-2 bg-black/80 text-[10px] px-2 py-1 rounded border border-red-600/20 text-gray-300">
                  {item.opens} opens
                </div>
                <div className="h-32 flex items-center justify-center text-5xl">{item.image}</div>
                <div className="p-3 text-center border-t border-red-900/10">
                  <div className="text-xs font-bold mb-2">{item.name}</div>
                  <button className="w-full bg-red-600 py-2 rounded-lg font-bold text-xs italic">💎 {item.price}</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* PASTKI MENYU (Bottom Nav) */}
      <nav className="fixed bottom-0 left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/5 pb-safe pt-3 px-4 z-50">
        <div className="flex justify-between items-center max-w-md mx-auto">
          {/* Asosiy/Bonus tugmasi (Skrinshotdagi 1/4 belgisi) */}
          <button onClick={() => setActiveTab('main')} className={`flex flex-col items-center gap-1 ${activeTab === 'main' ? 'text-white' : 'text-gray-500'}`}>
            <div className={`w-10 h-6 rounded-full flex items-center justify-center border ${activeTab === 'main' ? 'border-white bg-white/10' : 'border-gray-700'}`}>
               <span className="text-[10px] font-bold">1/4</span>
            </div>
          </button>

          <button onClick={() => setActiveTab('keyslar')} className={`flex flex-col items-center gap-1 ${activeTab === 'keyslar' ? 'text-white' : 'text-gray-500'}`}>
            <span className="text-xl">🎲</span>
            <span className="text-[10px] font-bold">Keyslar</span>
          </button>

          <button onClick={() => setActiveTab('market')} className="flex flex-col items-center gap-1 text-gray-500">
            <span className="text-xl">🏪</span>
            <span className="text-[10px] font-bold">Market</span>
          </button>

          <button onClick={() => setActiveTab('dostlar')} className="flex flex-col items-center gap-1 text-gray-500 text-center">
            <span className="text-xl">👥</span>
            <span className="text-[10px] font-bold leading-none">Do'stlar</span>
          </button>

          <button onClick={() => setActiveTab('profil')} className="relative flex flex-col items-center gap-1 text-gray-500">
            <span className="absolute -top-1 -right-1 bg-red-600 text-[7px] px-1 rounded-sm text-white font-black italic">YANGI</span>
            <span className="text-xl">👤</span>
            <span className="text-[10px] font-bold">Profil</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
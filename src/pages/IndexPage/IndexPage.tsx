import { type FC } from 'react';

export const IndexPage: FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans p-4 pb-32">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <span className="text-black font-black text-xs italic">R</span>
        </div>
        <h1 className="text-sm font-bold tracking-tight uppercase">RFL PRO</h1>
      </div>

      {/* Main Banner Card (Knife section) */}
      <div className="bg-[#111111] rounded-[40px] overflow-hidden mb-6 border border-white/5 relative shadow-2xl">
        {/* Knife Image Area */}
        <div className="h-56 w-full relative flex items-center justify-center p-4">
           {/* Bu yerga pichoq rasmini qo'yamiz */}
           <img 
            src="https://community.cloudflare.static.checkout.com/api/assets/storage/v2/items/large/m9-bayonet-case-hardened.png" 
            alt="M9 Bayonet" 
            className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
           />
        </div>

        {/* Banner Text */}
        <div className="p-6 pt-0">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-3xl font-black italic">13 kunlik seriya</h2>
            <span className="bg-[#1e1e1e] text-[#4d61ff] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter border border-white/5">
              tanlov
            </span>
          </div>
          
          <div className="flex items-center gap-1 mb-4 text-gray-500">
             <span>★</span>
             <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="w-[46%] h-full bg-white/20 rounded-full"></div>
             </div>
          </div>

          <p className="text-[11px] text-gray-400 font-bold leading-relaxed max-w-[200px]">
            M9 Bayonet «Case Hardened» gacha qolgan <span className="text-white">13 / 28 kunlar</span>
          </p>
        </div>
      </div>

      {/* Daily Tasks Section */}
      <div className="space-y-3">
        {/* Day 13 (Completed) */}
        <div className="bg-[#111111] p-4 rounded-[28px] border border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#0088cc] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 text-2xl">
              💎
            </div>
            <div>
              <p className="font-black text-base">Kun 13</p>
              <p className="text-[10px] text-gray-500 font-bold">+200 💎 • 7.1K 🔥</p>
            </div>
          </div>
          <div className="w-8 h-8 bg-green-500/20 border border-green-500/20 rounded-full flex items-center justify-center text-green-500">
            ✓
          </div>
        </div>

        {/* Day 14 (Current) */}
        <div className="bg-[#111111] p-4 rounded-[28px] border border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#0088cc] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 text-2xl">
              💎
            </div>
            <div>
              <p className="font-black text-base">Kun 14</p>
              <p className="text-[10px] text-gray-500 font-bold">+200 💎 • 6.8K 🔥</p>
            </div>
          </div>
          <button className="bg-[#1e1e1e] text-gray-500 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-tight border border-white/5">
            Olish
          </button>
        </div>

        {/* Next Days (Collapsible) */}
        <div className="bg-[#111111] p-4 rounded-[28px] border border-white/5 flex items-center justify-between group active:bg-white/5">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center text-xl shadow-lg shadow-pink-500/10">
              🎁
            </div>
            <p className="font-black text-sm">Keyingi kunlar</p>
          </div>
          <span className="text-gray-600">▼</span>
        </div>
      </div>

      {/* Bottom Floating Navigation */}
      <nav className="fixed bottom-6 left-4 right-4 bg-[#111111]/90 backdrop-blur-2xl border border-white/10 rounded-[32px] p-2 flex justify-around items-center shadow-2xl">
        <div className="flex flex-col items-center p-3">
          <span className="text-xl">💎</span>
          <span className="text-[10px] font-black mt-1">1747</span>
        </div>
        <div className="flex flex-col items-center opacity-40 p-3">
          <span className="text-xl">💼</span>
          <span className="text-[9px] font-black uppercase mt-1 tracking-tighter">Keyslar</span>
        </div>
        <div className="flex flex-col items-center opacity-40 p-3">
          <span className="text-xl">🏛️</span>
          <span className="text-[9px] font-black uppercase mt-1 tracking-tighter">Market</span>
        </div>
        <div className="flex flex-col items-center opacity-40 p-3">
          <span className="text-xl">👥</span>
          <span className="text-[9px] font-black uppercase mt-1 tracking-tighter">Do'stlar</span>
        </div>
        <div className="relative flex flex-col items-center p-3">
          <span className="text-xl">👤</span>
          <span className="text-[9px] font-black uppercase mt-1 tracking-tighter">Profil</span>
          <span className="absolute top-2 right-1 bg-orange-500 text-[8px] font-black px-1.5 py-0.5 rounded-md italic shadow-lg shadow-orange-500/30">YANGI</span>
        </div>
      </nav>
    </div>
  );
};  
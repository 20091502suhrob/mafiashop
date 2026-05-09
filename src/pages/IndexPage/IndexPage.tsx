import { type FC } from 'react';

export const IndexPage: FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans p-4 pb-32">
      {/* Header - MAFIASHOP */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 bg-[#ff4b4b] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(255,75,75,0.3)]">
          <span className="text-white font-black text-xs italic">M</span>
        </div>
        <h1 className="text-sm font-bold tracking-widest uppercase text-gray-200">MAFIASHOP</h1>
      </div>

      {/* Main Banner */}
      <div className="bg-[#111111] rounded-[40px] overflow-hidden mb-6 border border-white/5 relative shadow-2xl">
        <div className="h-56 w-full relative flex items-center justify-center p-4">
           <img 
            src="https://community.cloudflare.static.checkout.com/api/assets/storage/v2/items/large/m9-bayonet-case-hardened.png" 
            alt="M9 Bayonet" 
            className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
           />
        </div>

        <div className="p-6 pt-0">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-3xl font-black italic text-white">13 kunlik seriya</h2>
            <span className="bg-[#ff4b4b]/10 text-[#ff4b4b] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter border border-[#ff4b4b]/20">
              bozor
            </span>
          </div>
          
          <div className="flex items-center gap-1 mb-4 text-gray-500">
             <span>★</span>
             <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="w-[46%] h-full bg-[#ff4b4b] rounded-full shadow-[0_0_10px_#ff4b4b]"></div>
             </div>
          </div>

          <p className="text-[11px] text-gray-400 font-bold leading-relaxed">
            M9 Bayonet «Case Hardened» gacha qolgan <span className="text-white">13 / 28 kunlar</span>
          </p>
        </div>
      </div>

      {/* Vazifalar */}
      <div className="space-y-3">
        <div className="bg-[#111111] p-4 rounded-[28px] border border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#ff4b4b]/20 rounded-2xl flex items-center justify-center text-2xl">
              💎
            </div>
            <div>
              <p className="font-black text-base">Kun 13</p>
              <p className="text-[10px] text-gray-500 font-bold">+200 💎 • 7.1K 🔥</p>
            </div>
          </div>
          <div className="w-8 h-8 bg-green-500/20 border border-green-500/20 rounded-full flex items-center justify-center text-green-500 font-bold">
            ✓
          </div>
        </div>
      </div>

      {/* Navigatsiya */}
      <nav className="fixed bottom-6 left-4 right-4 bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-[32px] p-2 flex justify-around items-center">
        <div className="flex flex-col items-center p-3 text-[#ff4b4b]">
          <span className="text-xl">🛒</span>
          <span className="text-[10px] font-black mt-1">Market</span>
        </div>
        <div className="flex flex-col items-center opacity-40 p-3">
          <span className="text-xl">💼</span>
          <span className="text-[10px] font-black mt-1">Inventar</span>
        </div>
      </nav>
    </div>
  );
};
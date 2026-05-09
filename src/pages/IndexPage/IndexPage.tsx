import { type FC } from 'react';

export const IndexPage: FC = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4 pb-36 select-none">
      {/* Top Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <span className="text-black font-black text-sm italic">M</span>
        </div>
        <h1 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Mafiashop</h1>
      </div>

      {/* Main Banner - Knife Section */}
      <div className="bg-[#121212] rounded-[48px] p-2 mb-8 border border-white/5 shadow-2xl">
        <div className="h-64 w-full relative flex items-center justify-center overflow-hidden rounded-[40px] bg-gradient-to-b from-[#1a1a1a] to-transparent">
          <img 
            src="https://community.cloudflare.static.checkout.com/api/assets/storage/v2/items/large/m9-bayonet-case-hardened.png" 
            alt="M9 Bayonet" 
            className="w-4/5 h-auto object-contain drop-shadow-[0_10px_40px_rgba(255,255,255,0.15)]"
          />
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-black italic tracking-tight">13 kunlik seriya</h2>
            <span className="bg-[#1e1e1e] text-[#4d61ff] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-white/5">
              tanlov
            </span>
          </div>
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-gray-600 text-xs">★</span>
            <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div className="w-[46%] h-full bg-white/20 progress-bar-glow rounded-full"></div>
            </div>
          </div>

          <p className="text-[11px] text-gray-500 font-bold leading-relaxed">
             M9 Bayonet «Case Hardened» gacha qolgan <span className="text-white font-black">13 / 28 kunlar</span>
          </p>
        </div>
      </div>

      {/* Task List */}
      <div className="space-y-3">
        <div className="glass-card p-5 flex items-center justify-between border-l-4 border-l-blue-500">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-blue-600 rounded-[20px] flex items-center justify-center shadow-lg shadow-blue-600/20 text-2xl">
              💎
            </div>
            <div>
              <p className="font-black text-lg">Kun 14</p>
              <p className="text-[11px] text-gray-500 font-bold uppercase tracking-tighter">+200 💎 • 6.5K 👤</p>
            </div>
          </div>
          <button className="bg-white text-black px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest active:scale-95 transition-transform">
            Olish
          </button>
        </div>

        <div className="glass-card p-5 flex items-center justify-between opacity-40">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-blue-800/30 rounded-[20px] flex items-center justify-center text-2xl">
              💎
            </div>
            <div>
              <p className="font-black text-lg text-gray-400">Kun 15</p>
              <p className="text-[11px] text-gray-600 font-bold uppercase tracking-tighter">+200 💎 • 6.3K 👤</p>
            </div>
          </div>
          <button className="bg-gray-800 text-gray-600 px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest cursor-not-allowed">
            Olish
          </button>
        </div>
      </div>

      {/* Bottom Liquid Navigation */}
      <nav className="fixed bottom-8 left-4 right-4 liquid-nav rounded-[40px] p-2 flex justify-around items-center">
        {[
          { icon: '💎', label: '1/4/' },
          { icon: '💼', label: 'Keyslar' },
          { icon: '🏛️', label: 'Market' },
          { icon: '👥', label: "Do'stlar" },
          { icon: '👤', label: 'Profil', new: true }
        ].map((item, idx) => (
          <div key={idx} className={`flex flex-col items-center p-3 relative ${idx !== 4 ? 'opacity-40' : ''}`}>
            <span className="text-xl mb-1">{item.icon}</span>
            <span className="text-[9px] font-black uppercase tracking-tighter">{item.label}</span>
            {item.new && (
              <span className="absolute top-1 -right-1 bg-[#ff6b00] text-[7px] font-black px-1.5 py-0.5 rounded-md italic">YANGI</span>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};
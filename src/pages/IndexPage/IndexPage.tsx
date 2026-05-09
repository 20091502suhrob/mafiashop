import { type FC, useState } from 'react';

export const IndexPage: FC = () => {

  const [page, setPage] = useState('home');

  const navButtonClass = (nav: string) =>
    page === nav
      ? 'bg-red-500 text-white shadow-lg shadow-red-500/20'
      : 'text-gray-400 opacity-70 hover:opacity-100';

  const renderBottomNav = () => (
    <nav className="fixed bottom-6 left-4 right-4 bg-white/10 border border-white/10 backdrop-blur-2xl rounded-full p-3 flex justify-between items-center shadow-2xl">
      <button
        onClick={() => setPage('home')}
        className={`flex flex-col items-center justify-center gap-1 min-w-[72px] py-3 rounded-full transition ${navButtonClass('home')}`}
      >
        <span className="text-xl">💎</span>
        <span className="text-[9px] font-black uppercase tracking-tighter">1/4/</span>
      </button>

      <button
        onClick={() => setPage('keys')}
        className={`flex flex-col items-center justify-center gap-1 min-w-[72px] py-3 rounded-full transition ${navButtonClass('keys')}`}
      >
        <span className="text-xl">💼</span>
        <span className="text-[9px] font-black uppercase tracking-tighter">Keyslar</span>
      </button>

      <button
        onClick={() => setPage('market')}
        className={`flex flex-col items-center justify-center gap-1 min-w-[72px] py-3 rounded-full transition ${navButtonClass('market')}`}
      >
        <span className="text-xl">🏛️</span>
        <span className="text-[9px] font-black uppercase tracking-tighter">Market</span>
      </button>

      <button
        onClick={() => setPage('friends')}
        className={`flex flex-col items-center justify-center gap-1 min-w-[72px] py-3 rounded-full transition ${navButtonClass('friends')}`}
      >
        <span className="text-xl">👥</span>
        <span className="text-[9px] font-black uppercase tracking-tighter">Do'stlar</span>
      </button>

      <button
        onClick={() => setPage('profile')}
        className={`relative flex flex-col items-center justify-center gap-1 min-w-[72px] py-3 rounded-full transition ${navButtonClass('profile')}`}
      >
        <span className="text-xl">👤</span>
        <span className="text-[9px] font-black uppercase tracking-tighter">Profil</span>
        <span className="absolute top-1 -right-1 bg-red-500 text-[7px] font-black px-1.5 py-0.5 rounded-md italic">YANGI</span>
      </button>
    </nav>
  );

  // PROFILE PAGE
  if (page === 'profile') {
    return (
      <div className="min-h-screen bg-black text-white p-4 pb-36 select-none">

        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-black text-sm italic">M</span>
          </div>
          <h1 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
            Mafiashop
          </h1>
        </div>

        <div className="bg-[#121212] rounded-[40px] p-6 border border-white/5">

          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-sky-600 rounded-full flex items-center justify-center shadow-lg shadow-sky-600/20">
              <span className="text-white text-3xl font-black">0</span>
            </div>

            <div>
              <h2 className="text-2xl font-black">Do'stlar</h2>
              <p className="text-gray-500 text-sm">0 ta do'stlar</p>
            </div>
          </div>

          <div className="space-y-3">

            <button className="w-full bg-[#1a1a1a] p-4 rounded-2xl text-left">
              👤 Profil
            </button>

            <button className="w-full bg-[#1a1a1a] p-4 rounded-2xl text-left">
              💰 Steam to`ldirish`
            </button>

            <button className="w-full bg-[#1a1a1a] p-4 rounded-2xl text-left">
              ⚙️ Sozlamalar
            </button>

            <button className="w-full bg-[#1a1a1a] p-4 rounded-2xl text-left">
              💎 Balans
            </button>

          </div>
        </div>

        {/* Bottom Navigation */}
        {renderBottomNav()}
      </div>
    );
  }

  // FRIENDS PAGE
  if (page === 'friends') {
    return (
      <div className="min-h-screen bg-black text-white p-4 pb-36 select-none">

        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-black text-sm italic">M</span>
          </div>
          <h1 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
            Mafiashop
          </h1>
        </div>

        <div className="bg-[#111111] rounded-[40px] p-6 border border-white/10 shadow-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-sky-600 rounded-full flex items-center justify-center shadow-lg shadow-sky-600/20">
              <span className="text-white text-3xl font-black">0</span>
            </div>

            <div>
              <h2 className="text-3xl font-black">Do'stlar</h2>
              <p className="text-gray-400 text-sm">Sizda hozircha hech kim yo'q.</p>
            </div>
          </div>

          <div className="rounded-[32px] bg-[#121212] p-5 border border-white/10 shadow-2xl">
            <p className="text-gray-400 text-sm leading-relaxed">
              Do'stlaringizni taklif qiling va ularning skini haqida ma'lumot oling.
            </p>
            <button className="mt-6 w-full bg-red-500 text-white py-4 rounded-2xl font-black uppercase shadow-lg shadow-red-500/20 active:scale-[0.98] transition-transform">
              Do'stingizni taklif qiling
            </button>
          </div>
        </div>

        {renderBottomNav()}
      </div>
    );
  }

  // MARKET PAGE
  if (page === 'market') {
    return (
      <div className="min-h-screen bg-black text-white p-4 pb-36 select-none">

        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-black text-sm italic">M</span>
          </div>
          <h1 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
            Mafiashop
          </h1>
        </div>

        <div className="space-y-4">

          <div className="bg-[#111111] rounded-[40px] p-5 border border-white/10 shadow-2xl">

            <img
              src="/awp.png"
              alt="AWP Dragon Lore"
              className="w-full h-72 object-contain"
            />

            <h2 className="text-3xl font-black mt-4">
              Egamiyor
            </h2>

            <p className="text-gray-400 text-sm mt-2">
              Case Zo`rlangan
            </p>

            <button className="mt-5 w-full bg-red-500 text-white py-4 rounded-2xl font-black uppercase shadow-lg shadow-red-500/20 active:scale-[0.98] transition-transform">
              Sotib olish
            </button>

          </div>

        </div>

        {/* Bottom Navigation */}
        {renderBottomNav()}
      </div>
    );
  }

  // HOME PAGE
  return (
    <div className="min-h-screen bg-black text-white p-4 pb-36 select-none">

      {/* Top Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <span className="text-black font-black text-sm italic">M</span>
        </div>
        <h1 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
          Mafiashop
        </h1>
      </div>

      {/* Main Banner */}
      <div className="bg-[#111111] rounded-[48px] p-2 mb-8 border border-white/10 shadow-2xl">

        <div className="h-72 w-full relative flex items-center justify-center overflow-hidden rounded-[40px] bg-gradient-to-b from-[#1a1a1a] to-transparent">

          <img
            src="/awp.png"
            alt="AWP Dragon Lore"
            className="w-full max-w-[480px] h-auto object-contain drop-shadow-[0_10px_40px_rgba(255,255,255,0.15)]"
          />

        </div>

        <div className="p-6">

          <div className="flex items-center justify-between mb-4">

            <h2 className="text-3xl font-black italic tracking-tight">
              Mafiashop tanlovi 
            </h2>

            <span className="bg-[#1e1e1e] text-red-500 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-white/5">
              tanlov
            </span>

          </div>

          <div className="flex items-center gap-2 mb-4">

            <span className="text-gray-600 text-xs">★</span>

            <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div className="w-[46%] h-full bg-white/20 rounded-full"></div>
            </div>

          </div>

          <p className="text-[11px] text-gray-500 font-bold leading-relaxed">
            Egamiyor «Case Zo`rlangan» gacha qolgan
            <span className="text-white font-black"> 1 / 28 kunlar</span>
          </p>

        </div>
      </div>

      {/* Task List */}
      <div className="space-y-3">

        <div className="bg-[#111111] p-5 flex items-center justify-between border-l-4 border-l-red-500 rounded-[32px] border border-white/10 shadow-2xl">

          <div className="flex items-center gap-5">

            <div className="w-14 h-14 bg-red-600 rounded-[20px] flex items-center justify-center shadow-lg shadow-red-600/20 text-2xl">
              💎
            </div>

            <div>
              <p className="font-black text-lg">Kun 1</p>
              <p className="text-[11px] text-gray-500 font-bold uppercase tracking-tighter">
                +100 💎 • 1K 👤
              </p>
            </div>

          </div>

          <button className="bg-white text-black px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest active:scale-95 transition-transform">
            Olish
          </button>

        </div>

      </div>

      {/* Bottom Navigation */}
      {renderBottomNav()}
    </div>
  );
};
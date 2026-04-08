import React, { useState, useMemo } from 'react';
import { Search, LayoutGrid, Copy, Check, BriefcaseBusiness, Settings } from 'lucide-react';
import { PROMPTS_LIBRARY, CATEGORY_MAP } from './promptsData';
import { exportToWord, exportToPDF, exportToGoogleDocs } from './exportUtils';
import { ProfileSettings } from './ProfileSettings';

const App = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState(null);
  const [view, setView] = useState("library"); // "library" or "profile"

  const STRIPE_LINK = "https://buy.stripe.com/your_live_checkout_link"; // REPLACE THIS

  const filteredPrompts = useMemo(() => {
    return PROMPTS_LIBRARY.filter(p => {
      const matchCat = activeCategory === "All" || p.category === activeCategory;
      const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.body.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans">
      {/* 📂 SIDEBAR */}
      <aside className="w-64 border-r border-slate-800 bg-slate-900/50 p-6 flex flex-col gap-8 overflow-y-auto">
        <div className="flex items-center gap-2 text-blue-400 font-bold text-xl"><BriefcaseBusiness size={28} /><span>Business Hub</span></div>
        <nav className="flex flex-col gap-1">
          <button onClick={() => {setView("library"); setActiveCategory("All");}} className={`flex items-center gap-3 px-3 py-2 rounded-lg ${activeCategory === "All" && view === "library" ? 'bg-blue-600' : 'hover:bg-slate-800'}`}><LayoutGrid size={18} /><span>All Prompts</span></button>
          {CATEGORY_MAP.map(cat => (
            <button key={cat.name} onClick={() => {setView("library"); setActiveCategory(cat.name);}} className={`flex items-center justify-between px-3 py-2 rounded-lg ${activeCategory === cat.name && view === "library" ? 'bg-blue-600' : 'hover:bg-slate-800'}`}>
              <span className="truncate">{cat.name}</span><span className="text-xs opacity-50">{cat.count}</span>
            </button>
          ))}
          <div className="mt-8 border-t border-slate-800 pt-4">
            <button onClick={() => setView("profile")} className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full ${view === "profile" ? 'bg-blue-600' : 'hover:bg-slate-800'}`}><Settings size={18} /><span>Profile Setup</span></button>
          </div>
        </nav>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 border-b border-slate-800 flex items-center justify-between px-8 bg-slate-950/50 backdrop-blur-md">
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input type="text" placeholder="Search curated prompts..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded-xl py-2 pl-11 outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button onClick={() => window.location.href = STRIPE_LINK} className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-full font-bold transition">Start Free Trial</button>
        </header>

        <div className="flex-1 overflow-y-auto p-8">
          {view === "profile" ? <ProfileSettings /> : (
            <>
              <section className="mb-12"><h1 className="text-4xl font-black mb-2">Productivity & Efficiency</h1><p className="text-slate-400 text-lg">Stop wasting credits. Get results built right the first time.</p></section>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredPrompts.map(p => (
                  <div key={p.id} className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 hover:border-blue-500/50 transition-all flex flex-col">
                    <div className="flex justify-between mb-4"><span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-400/10 px-2 py-1 rounded">{p.category.split(' ')[0]}</span>
                    <button onClick={() => handleCopy(p.id, p.body)} className="p-2 bg-slate-800 rounded-lg">{copiedId === p.id ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}</button></div>
                    <h3 className="font-bold text-lg mb-2">{p.title}</h3><p className="text-slate-400 text-sm italic flex-1">{p.preview}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
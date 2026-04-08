📄 src/App.jsx
Replace your current App.jsx content with this. It includes the Copy to Clipboard feature and the SaaS marketing message we discussed.

import React, { useState, useMemo } from 'react';
import { 
  Search, Palette, Briefcase, Code2, Shield, Database, 
  GraduationCap, UtensilsCrossed, LayoutGrid, HeartPulse, 
  Languages, Scale, ScrollText, Users, Plane, PenTool, 
  Copy, Check, FileText, Download, BriefcaseBusiness
} from 'lucide-react';
import { PROMPTS_LIBRARY, CATEGORY_MAP } from './promptsData';

const App = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState(null);

  // 🔍 Filter Logic for Search Bar and Sidebar
  const filteredPrompts = useMemo(() => {
    return PROMPTS_LIBRARY.filter(prompt => {
      const matchesCategory = activeCategory === "All" || prompt.category === activeCategory;
      const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            prompt.body.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans">
      {/* 📂 SIDEBAR: 15 Categories Mapped */}
      <aside className="w-64 border-r border-slate-800 bg-slate-900/50 p-6 flex flex-col gap-8">
        <div className="flex items-center gap-2 text-blue-400 font-bold text-xl tracking-tight">
          <BriefcaseBusiness size={28} />
          <span>Business Hub</span>
        </div>
        
        <nav className="flex flex-col gap-1 overflow-y-auto">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-2">Library</p>
          <button 
            onClick={() => setActiveCategory("All")}
            className={`flex items-center justify-between px-3 py-2 rounded-lg transition ${activeCategory === "All" ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-slate-400'}`}
          >
            <div className="flex items-center gap-3"><LayoutGrid size={18} /><span>All Prompts</span></div>
            <span className="text-xs opacity-60">{PROMPTS_LIBRARY.length}</span>
          </button>
          
          {CATEGORY_MAP.map((cat) => (
            <button 
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex items-center justify-between px-3 py-2 rounded-lg transition ${activeCategory === cat.name ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-slate-400'}`}
            >
              <div className="flex items-center gap-3"><span>{cat.name}</span></div>
              <span className="text-xs opacity-60">{cat.count}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* 🚀 MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* TOP NAV: Search & Action Buttons */}
        <header className="h-20 border-b border-slate-800 flex items-center justify-between px-8 bg-slate-950/50 backdrop-blur-md sticky top-0 z-10">
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="text" 
              placeholder="Search 600+ expert prompts..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl py-2.5 pl-11 pr-4 focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition">Templates</button>
            <button className="bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-lg text-sm font-bold transition">Start Free Trial</button>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {/* Your Marketing Message */}
          <section className="mb-12 border-b border-slate-800 pb-12">
            <h1 className="text-4xl font-extrabold mb-4">Productivity & Efficiency</h1>
            <p className="text-slate-400 max-w-3xl text-lg leading-relaxed">
              Stop wasting credits and time on failed AI back-and-forth. Get it built right the first time with curated, professional prompts for every industry.
            </p>
          </section>

          {/* 4-COLUMN OFFICE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPrompts.map((prompt) => (
              <div key={prompt.id} className="group bg-slate-900/40 border border-slate-800 rounded-2xl p-5 hover:border-blue-500/50 transition-all duration-300 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
                    {prompt.category.split(' ')[0]}
                  </span>
                  <button 
                    onClick={() => handleCopy(prompt.id, prompt.body)}
                    className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 transition"
                  >
                    {copiedId === prompt.id ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                  </button>
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-blue-400 transition">{prompt.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1 italic">"{prompt.preview}"</p>
                <button className="mt-4 w-full py-2 bg-slate-800/50 group-hover:bg-blue-600 rounded-lg text-xs font-bold transition-all">Copy Full Prompt</button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
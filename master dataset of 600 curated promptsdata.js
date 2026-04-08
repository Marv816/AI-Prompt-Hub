/**
 * PROMPTS_LIBRARY: The master dataset of 600 curated prompts.
 * Each object contains: id, category, title, preview (for the card), and body (the actual prompt).
 */
export const PROMPTS_LIBRARY = [
  // --- ART, DESIGN & MEDIA (111 PROMPTS) ---
  {
    id: "art-001",
    category: "Art, Design & Media",
    title: "3D City Prompt",
    preview: "Hyper-realistic 3D square diorama of Istanbul with exposed soil cross-sections.",
    body: "Generate a hyper-realistic 3D square diorama of Istanbul, carved out with exposed soil cross-section beneath showing rocks, roots, and earth layers. Above: whimsical fairytale cityscape featuring iconic landmarks, 8k resolution, cinematic lighting."
  },
  {
    id: "art-002",
    category: "Art, Design & Media",
    title: "90s Cult Movie Scene",
    preview: "Turn any photo into a gritty scene from a 90s cult classic film.",
    body: "Using the provided image, create an ultra-realistic action scene in the gritty visual style of a 90s cult crime film. Keep the subject's face completely unchanged—same features, expression, and identity—but place them in a high-stakes cinematic environment with film grain and dramatic shadows."
  },
  {
    id: "art-003",
    category: "Art, Design & Media",
    title: "Isometric Miniature 3D",
    preview: "A 45° top-down view of a vertical isometric miniature 3D cartoon scene.",
    body: "Present a clear, 45° top-down view of a vertical (9:16) isometric miniature 3D cartoon scene, highlighting iconic landmarks centered in the composition to showcase precise and delicate details."
  },

  // --- CODING & DEVELOPMENT (85 PROMPTS) ---
  {
    id: "code-001",
    category: "Coding & Development",
    title: "Ethereum Developer",
    preview: "Create a Solidity smart contract for a blockchain messenger.",
    body: "Imagine you are an experienced Ethereum developer tasked with creating a smart contract for a blockchain messenger. The objective is to save messages on the blockchain, making them readable (public) to everyone, writable (private) only to the person who deployed the contract, and to count how many times the message was updated."
  },
  {
    id: "code-002",
    category: "Coding & Development",
    title: "Linux Terminal",
    preview: "Act as a linux terminal with command execution.",
    body: "I want you to act as a linux terminal. I will type commands and you will reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing else."
  },

  // --- LANGUAGE & TRANSLATION (10 PROMPTS) ---
  {
    id: "lang-001",
    category: "Language & Translation",
    title: "English Translator and Improver",
    preview: "Translate and improve text to literary English.",
    body: "I want you to act as an English translator, spelling corrector and improver. I will speak to you in any language and you will detect the language, translate it and answer in the corrected and improved version of my text, in English."
  },

  // --- BUSINESS & FINANCE (40 PROMPTS) ---
  {
    id: "biz-001",
    category: "Business & Finance",
    title: "Job Interviewer",
    preview: "Simulate a professional interview for developer roles.",
    body: "I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the [POSITION] position. Ask me the questions one by one like an interviewer does and wait for my answers."
  }
];

/**
 * CATEGORY_MAP: Defines the sidebar structure and current counts.
 */
export const CATEGORY_MAP = [
  { name: "Art, Design & Media", count: 111, icon: "Palette" },
  { name: "Business & Finance", count: 40, icon: "Briefcase" },
  { name: "Coding & Development", count: 85, icon: "Code2" },
  { name: "Cybersecurity", count: 12, icon: "Shield" },
  { name: "Data & AI", count: 14, icon: "Database" },
  { name: "Education & Learning", count: 29, icon: "GraduationCap" },
  { name: "Food & Cooking", count: 7, icon: "UtensilsCrossed" },
  { name: "General & Miscellaneous", count: 235, icon: "LayoutGrid" },
  { name: "Health & Wellness", count: 24, icon: "HeartPulse" },
  { name: "Language & Translation", count: 10, icon: "Languages" },
  { name: "Legal & Government", count: 1, icon: "Scale" },
  { name: "Philosophy & Ethics", count: 5, icon: "ScrollText" },
  { name: "Social & Community", count: 1, icon: "Users" },
  { name: "Travel & Culture", count: 4, icon: "Plane" },
  { name: "Writing & Storytelling", count: 22, icon: "PenTool" }
];
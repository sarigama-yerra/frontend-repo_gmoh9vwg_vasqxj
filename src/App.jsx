import SEOHead from './components/SEOHead';
import BlogHeader from './components/BlogHeader';
import BlogContent from './components/BlogContent';
import SidebarTOC from './components/SidebarTOC';
import MetaBar from './components/MetaBar';

function App() {
  const meta = {
    title: '𝐯𝐊 𝐥𝐞𝐚𝐫𝐧𝐢𝐧𝐠: Complete AI Learning Guide (Roadmap + FAQs)',
    description:
      'Learn AI step-by-step with the 𝐯𝐊 𝐥𝐞𝐚𝐫𝐧𝐢𝐧𝐠 method. Foundations, ML to LLMs, MLOps, practical roadmap, and FAQs for beginners, professionals, and content creators.',
    keywords: [
      '𝐯𝐊 𝐥𝐞𝐚𝐫𝐧𝐢𝐧𝐠',
      'AI learning',
      'machine learning roadmap',
      'deep learning',
      'NLP',
      'LLMs',
      'MLOps',
      'data science',
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-white">
      <SEOHead title={meta.title} description={meta.description} keywords={meta.keywords} />
      <BlogHeader />
      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
        <div>
          <BlogContent />
        </div>
        <div>
          <SidebarTOC />
        </div>
      </div>
      <MetaBar />
      <footer className="mx-auto max-w-5xl px-6 py-12 text-sm text-slate-600 dark:text-slate-300">
        © {new Date().getFullYear()} VK Learning — All rights reserved.
      </footer>
    </div>
  );
}

export default App;

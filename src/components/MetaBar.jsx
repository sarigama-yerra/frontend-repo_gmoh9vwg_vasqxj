export default function MetaBar() {
  const title = '𝐯𝐊 𝐥𝐞𝐚𝐫𝐧𝐢𝐧𝐠: The Complete Guide to AI Learning (Roadmap, Tips, FAQs)';
  const description = 'A practical, SEO-optimized guide to 𝐯𝐊 𝐥𝐞𝐚𝐫𝐧𝐢𝐧𝐠 for beginners, professionals, and content creators. Learn AI foundations, ML to LLMs, MLOps, and a staged roadmap with FAQs.';
  const keywords = [
    '𝐯𝐊 𝐥𝐞𝐚𝐫𝐧𝐢𝐧𝐠',
    'AI learning',
    'machine learning roadmap',
    'deep learning',
    'LLMs',
    'MLOps',
    'data science',
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-4">
      <div className="rounded-xl border border-slate-200/50 bg-white/70 p-4 backdrop-blur dark:bg-slate-900/60">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          <strong>Meta Title:</strong> {title}
        </p>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
          <strong>Meta Description:</strong> {description}
        </p>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
          <strong>Keywords:</strong> {keywords.join(', ')}
        </p>
      </div>
    </div>
  );
}

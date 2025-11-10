export default function SidebarTOC() {
  const items = [
    { href: '#what-is', label: 'What is 𝐯𝐊 𝐥𝐞𝐚𝐫𝐧𝐢𝐧𝐠' },
    { href: '#foundations', label: 'Core Foundations' },
    { href: '#from-ml-to-ai', label: 'From ML to AI' },
    { href: '#roadmap', label: 'Actionable Roadmap' },
    { href: '#faqs', label: 'FAQs' },
    { href: '#conclusion', label: 'Conclusion' },
  ];

  return (
    <nav aria-label="Table of contents" className="sticky top-6 hidden lg:block">
      <div className="rounded-xl border border-slate-200/30 bg-white/60 backdrop-blur p-4 dark:bg-slate-900/50">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">On this page</p>
        <ul className="space-y-1 text-sm">
          {items.map((i) => (
            <li key={i.href}>
              <a href={i.href} className="text-slate-700 hover:text-indigo-600 dark:text-slate-300">{i.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

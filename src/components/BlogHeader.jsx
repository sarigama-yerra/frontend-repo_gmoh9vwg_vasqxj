import { Rocket } from 'lucide-react';

export default function BlogHeader() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-violet-900 text-white">
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{backgroundImage:'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2), transparent 40%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.15), transparent 40%)'}} />
      <div className="mx-auto max-w-5xl px-6 py-16 relative">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
            <Rocket className="h-5 w-5" />
          </span>
          <p className="text-sm tracking-wide uppercase text-indigo-200">AI Learning Guide</p>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
          𝐯𝐊 𝐥𝐞𝐚𝐫𝐧𝐢𝐧𝐠: A Practical, SEO-Optimized Guide to AI Learning for Beginners and Professionals
        </h1>
        <p className="mt-5 max-w-3xl text-indigo-100 text-lg">
          Master AI learning step-by-step. This comprehensive playbook explains core concepts, proven learning paths, and hands-on tips so you can build real projects with confidence.
        </p>
      </div>
    </header>
  );
}

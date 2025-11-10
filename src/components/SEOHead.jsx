import { useEffect } from 'react';

export default function SEOHead({ title, description, keywords = [] }) {
  useEffect(() => {
    if (title) document.title = title;

    const upsertMeta = (name, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    upsertMeta('description', description);
    if (keywords.length) upsertMeta('keywords', keywords.join(', '));
  }, [title, description, keywords]);

  return null;
}

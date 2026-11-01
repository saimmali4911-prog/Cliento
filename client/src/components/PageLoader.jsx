import React, { useEffect } from 'react';

export default function PageLoader() {
  useEffect(() => {
    const minWait = 450;
    const start = Date.now();

    const hide = () => {
      const el = document.getElementById('page-loader');
      if (!el || el.classList.contains('loaded')) return;
      const elapsed = Date.now() - start;
      const wait = Math.max(0, minWait - elapsed);
      setTimeout(() => {
        el.classList.add('loaded');
      }, wait);
    };

    if (document.readyState === 'complete') {
      hide();
    } else {
      window.addEventListener('load', hide);
    }

    const timer = setTimeout(hide, 2000);
    return () => {
      window.removeEventListener('load', hide);
      clearTimeout(timer);
    };
  }, []);

  return null;
}


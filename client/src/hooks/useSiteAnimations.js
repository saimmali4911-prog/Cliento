import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useSiteAnimations() {
  const location = useLocation();

  useEffect(() => {
    // 1. Add .rv to standard reveal targets if they don't have animation classes
    const targets = document.querySelectorAll('section h2, .sub, .card:not(.sc), .cta, .stat');
    targets.forEach((el) => {
      if (
        !el.classList.contains('rv') &&
        !el.classList.contains('rl') &&
        !el.classList.contains('rr') &&
        !el.classList.contains('zi')
      ) {
        el.classList.add('rv');
      }
    });

    // 2. data-stagger transition delays
    document.querySelectorAll('[data-stagger]').forEach((p) => {
      [...p.children].forEach((c, i) => {
        c.style.transitionDelay = `${i * 110}ms`;
      });
    });

    // 3. Number counter function
    function count(el) {
      const t = +el.dataset.count;
      if (!t) return;
      const suf = el.dataset.suffix || '';
      const d = 1800;
      const t0 = performance.now();
      function f(n) {
        const p = Math.min(1, (n - t0) / d);
        el.textContent = Math.round(t * (1 - Math.pow(1 - p, 3))) + suf;
        if (p < 1) requestAnimationFrame(f);
      }
      f(t0);
    }

    // Set initial 0 for data-count
    document.querySelectorAll('[data-count]').forEach((el) => {
      if (!el.dataset.counted) {
        el.textContent = '0' + (el.dataset.suffix || '');
      }
    });

    // 4. Reveal IntersectionObserver
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
            if (entry.target.dataset.count && !entry.target.dataset.counted) {
              entry.target.dataset.counted = 'true';
              count(entry.target);
            }
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.rv, .rl, .rr, .zi, [data-count]').forEach((el) => {
      io.observe(el);
    });

    // 5. Word-by-word text split for .wr
    document.querySelectorAll('.wr').forEach((el) => {
      if (!el.dataset.wrReady) {
        el.dataset.wrReady = 'true';
        el.innerHTML = el.textContent
          .trim()
          .split(/\s+/)
          .map((w) => `<span>${w}</span>`)
          .join(' ');
      }
    });

    // 6. Scroll updates
    let tick = false;
    const upd = () => {
      tick = false;
      const y = window.scrollY;
      const h = window.innerHeight;

      // Word reveal
      document.querySelectorAll('.wr').forEach((el) => {
        const r = el.getBoundingClientRect();
        const p = Math.max(0, Math.min(1, (h * 0.85 - r.top) / (r.height + h * 0.35)));
        const s = el.children;
        const n = Math.round(p * s.length);
        for (let i = 0; i < s.length; i++) {
          s[i].classList.toggle('on', i < n);
        }
      });

      // Sticky stacked card scale
      const sc = document.querySelectorAll('.sc');
      sc.forEach((c, i) => {
        const n = sc[i + 1];
        let k = 1;
        if (n) {
          const st = parseFloat(getComputedStyle(c).top) || 0;
          const d = Math.max(0, Math.min(1, (n.getBoundingClientRect().top - st) / c.offsetHeight));
          k = 0.92 + 0.08 * d;
        }
        c.style.transform = `scale(${k})`;
      });

      // Parallax blobs
      document.querySelectorAll('[data-px]').forEach((el) => {
        const r = el.getBoundingClientRect();
        el.style.translate = `0 ${(-(r.top + r.height / 2 - h / 2) * parseFloat(el.dataset.px)).toFixed(1)}px`;
      });
    };

    const handleScroll = () => {
      if (!tick) {
        tick = true;
        requestAnimationFrame(upd);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', upd);
    upd();

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', upd);
    };
  }, [location.pathname]);
}


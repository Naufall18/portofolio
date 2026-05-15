import { useEffect, useRef } from 'react';

export default function useSkillBars(containerRef) {
  const animated = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (animated.current) return;
        if (entries[0].isIntersecting) {
          animated.current = true;
          el.querySelectorAll('.sb-fill').forEach((fill, i) => {
            setTimeout(() => {
              fill.style.width = fill.dataset.w + '%';
            }, i * 80);
          });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [containerRef]);
}

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const curRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const cur = curRef.current;
    const ring = ringRef.current;
    let mx = 0, my = 0, rx = 0, ry = 0;
    let animId;

    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cur.style.left = mx + 'px';
      cur.style.top = my + 'px';
    };

    const followRing = () => {
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      animId = requestAnimationFrame(followRing);
    };

    const onEnter = () => {
      cur.style.width = '5px';
      cur.style.height = '5px';
      ring.style.width = '48px';
      ring.style.height = '48px';
    };

    const onLeave = () => {
      cur.style.width = '10px';
      cur.style.height = '10px';
      ring.style.width = '34px';
      ring.style.height = '34px';
    };

    document.addEventListener('mousemove', onMouseMove);
    followRing();

    const attachHover = () => {
      document.querySelectorAll('a,button').forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    // Attach after a short delay so all elements are rendered
    const timer = setTimeout(attachHover, 500);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={curRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}

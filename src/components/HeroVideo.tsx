import { useEffect, useRef } from 'react';
import { profile } from '../data/portfolio';

/**
 * The hero figure: a background-free portrait that sits directly on the page.
 *
 * It is painted onto a canvas, and a "falling into shadow" fade is painted *on him*
 * (source-atop) in the page's background colour, so his legs and shoes melt into
 * the page in both themes. Nothing behind him — like the giant name — ever shows through.
 * A gentle "breathing" idle (CSS, .is-idle) keeps it alive.
 */

const SRC = profile.cutout;
const SCALE = 2; // canvas backing resolution, for a crisper edge

/** Shadow fade per theme: [position 0–1, opacity of background colour]. */
const FADE: Record<'dark' | 'light', [number, number][]> = {
  // Full-length figure: keep the suit and the explaining hand clear, let the legs sink into the page.
  dark: [
    [0.55, 0],
    [0.78, 0.45],
    [0.92, 0.88],
    [1, 1],
  ],
  light: [
    [0.86, 0],
    [1, 1],
  ],
};

function bgRgb() {
  const hex = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim().replace('#', '');
  const n = parseInt(hex.length === 3 ? hex.replace(/./g, (c) => c + c) : hex, 16);
  return Number.isNaN(n) ? [8, 8, 8] : [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export default function HeroVideo({ play: _play }: { play: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    ctx.imageSmoothingQuality = 'high';
    const still = new Image();
    still.src = SRC.src;

    const paint = () => {
      if (!still.complete || !still.naturalWidth) return;
      const { width: w, height: h } = canvas;
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(still, 0, 0, w, h);
      const theme = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
      const [r, g, b] = bgRgb();
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, `rgba(${r},${g},${b},0)`);
      for (const [at, a] of FADE[theme]) grad.addColorStop(at, `rgba(${r},${g},${b},${a})`);
      ctx.globalCompositeOperation = 'source-atop'; // only on his pixels
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'source-over';
    };

    still.onload = paint;
    // Repaint when the lights switch so the fade matches the new background.
    const mo = new MutationObserver(paint);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    paint();
    return () => mo.disconnect();
  }, []);

  return (
    <div className="hero-film is-idle relative mx-auto h-full w-fit">
      <div aria-hidden="true" className="hero-film__pool" />
      <canvas
        ref={canvasRef}
        width={SRC.width * SCALE}
        height={SRC.height * SCALE}
        role="img"
        aria-label={`${profile.name} standing in a navy suit, explaining with an open hand`}
        className="hero-film__media block h-full w-auto max-w-none select-none"
      />
    </div>
  );
}

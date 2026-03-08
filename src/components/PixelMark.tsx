"use client";

/**
 * Alberto Pranovi's signature pixel mark system.
 * Faithfully recreated from his 2024 PDF portfolio.
 *
 * Variants:
 *   "ap"       — main brand mark (asymmetric grayscale cube cluster)
 *   "gallery"  — 01 Gallery mark (small dense cluster)
 *   "gradient" — 02 VNM Glasses mark (horizontal gradient bar)
 *   "checker"  — 03 Rendering mark (dithered checkerboard)
 */

type MarkVariant = "ap" | "gallery" | "gradient" | "checker";

interface PixelMarkProps {
  variant?: MarkVariant;
  /** For inverted contexts (dark bg) pass true to use light colors */
  inverted?: boolean;
  className?: string;
}

export function PixelMark({
  variant = "ap",
  inverted = true,
  className = "",
}: PixelMarkProps) {
  // When inverted (default), use CSS variables that auto-switch with color scheme.
  // Non-inverted keeps hardcoded values for special light-bg contexts.
  const d = inverted
    ? { darkest: "var(--mark-darkest)", dark: "var(--mark-dark)", mid: "var(--mark-mid)", light: "var(--mark-light)" }
    : { darkest: "#1c1c1c", dark: "#555", mid: "#888", light: "#bbb" };

  if (variant === "gradient") {
    // Thin horizontal gradient bar — from light to dark
    return (
      <svg
        width="80"
        height="5"
        viewBox="0 0 80 5"
        fill="none"
        className={className}
        aria-hidden
      >
        <defs>
          <linearGradient id="gbar" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" style={{ stopColor: d.light }} />
            <stop offset="100%" style={{ stopColor: d.darkest }} />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="80" height="5" fill="url(#gbar)" />
      </svg>
    );
  }

  if (variant === "checker") {
    // 5 cols × 2 rows, alternating squares — dithered halftone, dark→light→mid
    const s = 7;   // square size
    const g = 3;   // gap between squares
    const step = s + g;
    const cols = 5;
    const shades = [d.darkest, d.mid, d.light, d.dark, d.mid];
    const shades2 = [d.dark, d.light, d.mid, d.light, d.dark];
    const w = cols * step - g;
    const h = 2 * step - g;
    return (
      <svg
        width={w}
        height={h}
        viewBox={`0 0 ${w} ${h}`}
        fill="none"
        className={className}
        aria-hidden
      >
        {shades.map((c, i) => (
          <rect key={`r1-${i}`} x={i * step} y={0} width={s} height={s} style={{ fill: c }} />
        ))}
        {shades2.map((c, i) => (
          <rect key={`r2-${i}`} x={i * step + (s + g) / 2} y={step} width={s} height={s} style={{ fill: c }} />
        ))}
      </svg>
    );
  }

  if (variant === "gallery") {
    // Compact 2×2 L-shape cluster: big dark square + two smaller lighter ones
    // Matches "01 Gallery" mark from PDF
    return (
      <svg width="18" height="16" viewBox="0 0 18 16" fill="none" className={className} aria-hidden>
        <rect x="0" y="2" width="9" height="9" style={{ fill: d.darkest }} />
        <rect x="11" y="0" width="7" height="7" style={{ fill: d.mid }} />
        <rect x="11" y="9" width="7" height="7" style={{ fill: d.dark }} />
      </svg>
    );
  }

  // Default: "ap" — main brand mark
  // 3-cell asymmetric cluster: the signature AP identity mark
  // Matches the pixel icon visible on the bio page and first user screenshot
  return (
    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" className={className} aria-hidden>
      {/* Row 1: big dark square + small medium square */}
      <rect x="0" y="0" width="11" height="11" style={{ fill: d.darkest }} />
      <rect x="13" y="0" width="7" height="7" style={{ fill: d.mid }} />
      {/* Row 2: two smaller squares offset */}
      <rect x="4" y="13" width="7" height="5" style={{ fill: d.dark }} />
      <rect x="13" y="9" width="7" height="9" style={{ fill: d.light }} />
    </svg>
  );
}

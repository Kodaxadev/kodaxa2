type BrandMarkProps = { className?: string; size?: number };

/** The same eight-spoke mark at every size; never dependent on a font glyph. */
export function BrandMark({ className, size = 24 }: BrandMarkProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true" focusable="false">
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
    </svg>
  );
}

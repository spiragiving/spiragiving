export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M28 8H16a8 8 0 0 0 0 16h8a8 8 0 0 1 0 16"
        transform="translate(0 -4)"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M12 32h12a8 8 0 0 0 0-16h-8a8 8 0 0 1 0-16"
        transform="translate(0 4)"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="28" cy="4" r="3" fill="currentColor" />
      <circle cx="12" cy="36" r="3" fill="currentColor" />
    </svg>
  );
}
export function Logo() {
  return (
    <span className="logo">
      <span className="logo-mark">
        <BrandMark />
      </span>
      <span>
        spiragiving<span className="logo-dot">.</span>
      </span>
    </span>
  );
}

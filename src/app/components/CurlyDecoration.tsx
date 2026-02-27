export function CurlyDecoration() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none opacity-10 dark:opacity-5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="curlyGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#9333EA', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#A855F7', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="curlyGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#7C3AED', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#C084FC', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        d="M 0,50 Q 25,10 50,50 T 100,50"
        stroke="url(#curlyGrad1)"
        strokeWidth="3"
        fill="none"
        transform="scale(4)"
      />
      <path
        d="M 0,80 Q 30,40 60,80 T 120,80"
        stroke="url(#curlyGrad2)"
        strokeWidth="3"
        fill="none"
        transform="scale(3) translate(50, 50)"
      />
      <circle cx="10%" cy="20%" r="50" fill="url(#curlyGrad1)" />
      <circle cx="85%" cy="70%" r="80" fill="url(#curlyGrad2)" />
    </svg>
  );
}
const PremiumLogo = () => {
  return (
    <div className="relative group w-fit">
      {/* Glow Background */}
      <div className="absolute inset-0 rounded-full bg-violet-600/30 blur-2xl opacity-70 group-hover:opacity-100 transition duration-500" />

      <svg
        width="70"
        height="70"
        viewBox="0 0 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative transition-transform duration-500 group-hover:scale-110"
      >
        <defs>
          {/* Background Glow */}
          {/* <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </radialGradient> */}

          {/* Main Gradient */}
          <linearGradient id="mainGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>

          {/* Cyan Glow */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer Glow */}
        <circle cx="110" cy="110" r="90" fill="url(#bgGlow)" />

        {/* Letter P */}
        <path
          d="M70 45H135C170 45 190 65 190 95C190 125 170 145 135 145H105L90 190H60L80 120H135C150 120 160 112 160 98C160 84 150 75 135 75H85L70 45Z"
          fill="url(#mainGradient)"
        />

        {/* Inner Cut */}
        <path
          d="M105 88H135C148 88 154 93 154 102C154 111 148 116 135 116H98L105 88Z"
          fill="#0F172A"
          opacity="0.25"
        />

        {/* Shine */}
        <path
          d="M92 75C120 60 145 55 170 58"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Decorative Dot */}
        <circle cx="150" cy="172" r="10" fill="#22D3EE" filter="url(#glow)" />
      </svg>
    </div>
  );
};

export default PremiumLogo;

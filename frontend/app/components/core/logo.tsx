export const ExoraLogo = () => (
  <svg
    width="120"
    height="40"
    viewBox="0 0 120 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#00D4FF", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#090979", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <text
      x="10"
      y="25"
      fontFamily="Arial, sans-serif"
      fontSize="24"
      fontWeight="bold"
      fill="url(#gradient)"
    >
      Exora
    </text>
    <circle cx="95" cy="20" r="8" fill="#00D4FF" opacity="0.8" />
    <circle cx="105" cy="15" r="5" fill="#090979" opacity="0.6" />
  </svg>
);

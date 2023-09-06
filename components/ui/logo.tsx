import Link from 'next/link'

export default function Logo() {
  return (
    // <Link href="/" className="block" aria-label="Cruip">
    //   <svg className="w-8 h-8" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    //     <defs>
    //       <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="footer-logo">
    //         <stop stopColor="#4FD1C5" offset="0%" />
    //         <stop stopColor="#81E6D9" offset="25.871%" />
    //         <stop stopColor="#338CF5" offset="100%" />
    //       </radialGradient>
    //     </defs>
    //     <rect width="200" height="200" fill="url(/Users/zenil/Documents/Extra/Personal Projects/Hair Graft Tracker/Landing Website/tailwind-landing-page-template/public/images/main-logo.png)" fillRule="nonzero" />
    //   </svg>
    // </Link>
    <Link href="/" className="block" aria-label="Cruip">
      <img 
        src="/images/main-logo.png" 
        alt="Company Logo" 
        className="h-20 w-auto" // `h-12` sets the height to 48px. `w-auto` ensures the width scales automatically to maintain the logo's aspect ratio.
      />
    </Link>
  )
}

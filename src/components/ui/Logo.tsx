'use client'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
}

export function ArtisticLogo({ className = '', size = 'md', showText = true }: LogoProps) {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8', 
    lg: 'h-12 w-12'
  }

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl'
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Artistic GO Logo */}
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background */}
          <rect
            width="100"
            height="100"
            rx="20"
            fill="url(#gradient)"
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>
          
          {/* G Letter */}
          <path
            d="M25 25 C25 15, 35 10, 45 10 C55 10, 65 15, 65 25 C65 35, 55 40, 45 40 L45 30 C50 30, 55 25, 55 20 C55 15, 50 10, 45 10"
            fill="white"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* O Letter */}
          <ellipse
            cx="75"
            cy="25"
            rx="15"
            ry="15"
            fill="none"
            stroke="white"
            strokeWidth="3"
          />
          
          {/* Decorative brush stroke */}
          <path
            d="M15 75 Q25 65, 35 75 Q45 85, 55 75"
            stroke="white"
            strokeWidth="2"
            fill="none"
            opacity="0.7"
          />
        </svg>
      </div>
      
      {/* Gallery name - only show if showText is true */}
      {showText && (
        <span className={`font-bold text-navy-900 dark:text-gold-400 transition-colors ${textSizes[size]}`}>
          Galerija Omerzel
        </span>
      )}
    </div>
  )
}

// Elegant GO logo with luxury styling
export function GOLogo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  }

  return (
    <div className={`${sizeClasses[size]} relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 100 50"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Luxury gradient definitions */}
        <defs>
          <linearGradient id="luxuryGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#B8860B" />
          </linearGradient>
          <linearGradient id="luxuryBurgundy" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#800020" />
            <stop offset="100%" stopColor="#B22222" />
          </linearGradient>
          <radialGradient id="luxuryShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0,0,0,0.1)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
        </defs>

        {/* Subtle shadow/base */}
        <ellipse cx="50" cy="42" rx="35" ry="3" fill="url(#luxuryShadow)" opacity="0.3" />

        {/* Elegant G Letter with serif styling */}
        <g transform="translate(8, 8)">
          {/* G main stroke */}
          <path
            d="M4 6 Q4 2, 8 2 Q12 2, 12 6 Q12 10, 8 10 L8 8 Q10 8, 10 6 Q10 4, 8 4 Q6 4, 6 6"
            fill="none"
            stroke="url(#luxuryGold)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* G serif and tail */}
          <path
            d="M12 6 Q14 6, 14 8 Q14 10, 12 10 L6 10"
            fill="none"
            stroke="url(#luxuryGold)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* G decorative serif */}
          <path
            d="M4 6 L2 6 L2 8"
            fill="none"
            stroke="url(#luxuryBurgundy)"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </g>

        {/* Elegant O Letter with inner highlight */}
        <g transform="translate(32, 8)">
          {/* O outer ring */}
          <circle
            cx="12"
            cy="6"
            r="8"
            fill="none"
            stroke="url(#luxuryGold)"
            strokeWidth="2.5"
          />
          {/* O inner highlight */}
          <circle
            cx="10"
            cy="4"
            r="2"
            fill="url(#luxuryBurgundy)"
            opacity="0.6"
          />
          {/* O decorative accent */}
          <circle
            cx="12"
            cy="6"
            r="6"
            fill="none"
            stroke="url(#luxuryBurgundy)"
            strokeWidth="0.5"
            opacity="0.4"
          />
        </g>

        {/* Luxury accent dot */}
        <circle
          cx="85"
          cy="8"
          r="2"
          fill="url(#luxuryGold)"
        />

        {/* Subtle decorative elements */}
        <path
          d="M60 35 Q65 30, 70 35 Q75 40, 80 35"
          stroke="url(#luxuryBurgundy)"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />
      </svg>
    </div>
  )
}
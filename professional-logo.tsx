"use client"

import { cn } from "@/lib/utils"

interface ProfessionalLogoProps {
  variant?: "default" | "light" | "dark"
  size?: "sm" | "md" | "lg"
  showText?: boolean
  className?: string
}

export function ProfessionalLogo({
  variant = "default",
  size = "md",
  showText = true,
  className,
}: ProfessionalLogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-16 h-16",
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl",
  }

  const logoMarkClasses = cn(
    "rounded-xl flex items-center justify-center relative overflow-hidden",
    sizeClasses[size],
    variant === "light"
      ? "bg-white/10 backdrop-blur-sm"
      : "bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700",
  )

  const textClasses = cn(
    "font-bold tracking-tight",
    textSizeClasses[size],
    variant === "light"
      ? "text-white"
      : variant === "dark"
        ? "text-gray-900"
        : "bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent",
  )

  return (
    <div className={cn("flex items-center space-x-3", className)}>
      {/* Logo Mark */}
      <div className={logoMarkClasses}>
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-white/80 rounded-full"></div>
          <div className="absolute top-1/2 right-1 w-1 h-1 bg-white/60 rounded-full"></div>
        </div>

        {/* Main Icon - Creative Diamond/Gem Shape */}
        <svg
          viewBox="0 0 24 24"
          className={cn("relative z-10", size === "sm" ? "w-4 h-4" : size === "md" ? "w-5 h-5" : "w-8 h-8")}
          fill="none"
        >
          {/* Diamond/Artisan Tool Shape */}
          <path d="M12 2L4 8L12 22L20 8L12 2Z" fill="white" fillOpacity="0.9" />
          <path d="M12 2L8 8H16L12 2Z" fill="white" fillOpacity="0.7" />
          <path d="M4 8L12 14L20 8H4Z" fill="white" fillOpacity="0.5" />
          {/* Inner details */}
          <path d="M12 8V14M8 8L12 14L16 8" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={textClasses}>Digital Products</span>
          <span
            className={cn(
              "font-bold tracking-tight", // Changed from "font-medium tracking-wide"
              textSizeClasses[size], // Use same size classes as main text
              variant === "light"
                ? "text-white"
                : variant === "dark"
                  ? "text-gray-900"
                  : "bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent",
            )}
          >
            ARTISAN
          </span>
        </div>
      )}
    </div>
  )
}

// Alternative Logo Variations
export function LogoVariation1({
  variant = "default",
  size = "md",
  showText = true,
  className,
}: ProfessionalLogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-16 h-16",
  }

  return (
    <div className={cn("flex items-center space-x-3", className)}>
      {/* Hexagonal Logo Mark */}
      <div className={cn("relative flex items-center justify-center", sizeClasses[size])}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
          </defs>
          {/* Hexagon */}
          <path d="M50 5 L85 27.5 L85 72.5 L50 95 L15 72.5 L15 27.5 Z" fill="url(#hexGradient)" />
          {/* Inner Design */}
          <circle cx="50" cy="35" r="3" fill="white" fillOpacity="0.8" />
          <path d="M35 50 L50 35 L65 50 L50 75 Z" fill="white" fillOpacity="0.9" />
          <path d="M42 58 L50 50 L58 58" stroke="rgba(124,58,237,0.6)" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {showText && (
        <div>
          <span
            className={cn(
              "font-bold tracking-tight",
              size === "sm" ? "text-lg" : size === "md" ? "text-xl" : "text-3xl",
              variant === "light"
                ? "text-white"
                : "bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent",
            )}
          >
            Digital Products Artisan
          </span>
        </div>
      )}
    </div>
  )
}

export function LogoVariation2({
  variant = "default",
  size = "md",
  showText = true,
  className,
}: ProfessionalLogoProps) {
  return (
    <div className={cn("flex items-center space-x-3", className)}>
      {/* Circular Badge Style */}
      <div
        className={cn(
          "relative rounded-full bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 flex items-center justify-center shadow-lg",
          size === "sm" ? "w-8 h-8" : size === "md" ? "w-10 h-10" : "w-16 h-16",
        )}
      >
        {/* Craft/Tool Icon */}
        <svg
          viewBox="0 0 24 24"
          className={cn("text-white", size === "sm" ? "w-4 h-4" : size === "md" ? "w-5 h-5" : "w-8 h-8")}
          fill="currentColor"
        >
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9V3H7V1H5V7H3V9H5V11H7V9H9V11H11V13H13V11H15V9H17V11H19V9H21ZM7 15V17H5V19H7V21H9V19H11V21H13V19H15V21H17V19H19V17H17V15H15V17H13V15H11V17H9V15H7Z" />
        </svg>

        {/* Decorative Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-white/20"></div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span
            className={cn(
              "font-bold leading-tight",
              size === "sm" ? "text-base" : size === "md" ? "text-lg" : "text-2xl",
              variant === "light" ? "text-white" : "text-gray-900",
            )}
          >
            Digital Products
          </span>
          <span
            className={cn(
              "font-bold leading-tight", // Changed from "font-semibold tracking-widest uppercase"
              size === "sm" ? "text-base" : size === "md" ? "text-lg" : "text-2xl", // Same size as above
              variant === "light"
                ? "text-white"
                : "bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent",
            )}
          >
            Artisan
          </span>
        </div>
      )}
    </div>
  )
}

// Favicon/Icon Only Version
export function LogoIcon({ size = "md", className }: { size?: "sm" | "md" | "lg"; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-xl bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 flex items-center justify-center relative overflow-hidden",
        size === "sm" ? "w-8 h-8" : size === "md" ? "w-10 h-10" : "w-16 h-16",
        className,
      )}
    >
      <svg
        viewBox="0 0 24 24"
        className={cn("text-white relative z-10", size === "sm" ? "w-4 h-4" : size === "md" ? "w-5 h-5" : "w-8 h-8")}
        fill="none"
      >
        <path d="M12 2L4 8L12 22L20 8L12 2Z" fill="currentColor" fillOpacity="0.9" />
        <path d="M12 2L8 8H16L12 2Z" fill="currentColor" fillOpacity="0.7" />
      </svg>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full"></div>
        <div className="absolute bottom-1 right-1 w-1 h-1 bg-white rounded-full"></div>
      </div>
    </div>
  )
}

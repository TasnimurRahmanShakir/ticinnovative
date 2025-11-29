import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Button = ({
  children,
  href,
  onClick,
  className,
  variant = "primary",
  size = "md",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-[#1e388c] text-white hover:bg-[#152a6d] focus:ring-[#1e388c]",
    secondary:
      "bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500",
    outline:
      "border-2 border-[#1e388c] text-[#1e388c] hover:bg-[#1e388c] hover:text-white focus:ring-[#1e388c]",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-200",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl",
  };

  const combinedClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;

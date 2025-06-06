import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo.svg'; // Ensure this path is correct for your project

interface LogoProps {
  color?: 'black' | 'white' | 'primary'; // This prop won't directly affect the image SVG
  className?: string; // This will now apply to the container div
  textClassName?: string; // New prop for styling the "Goddy Smart Labs" text
}

const Logo: React.FC<LogoProps> = ({ className = 'h-8', textClassName = 'ml-2 text-xl font-semibold' }) => {
  return (
    <div className={`flex items-center ${className}`}> {/* Add flexbox for alignment */}
      <Image
        src={logo}
        alt="Goddy Smart Labs Logo" // Improved alt text
        width={0} // Based on your SVG's viewBox
        height={30} // Based on your SVG's viewBox
      />
      <span className={textClassName}>
        Goddy Smart Labs
      </span>
    </div>
  );
};

export default Logo;
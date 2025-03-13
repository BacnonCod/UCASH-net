
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'small';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', className = '' }) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <div className="relative">
        <div className="flex items-center">
          <div className="relative w-12 h-12 md:w-14 md:h-14">
            <div className="absolute inset-0 rounded-full border-r-4 border-white"></div>
            <div className="absolute left-1/2 top-0 bottom-0 flex space-x-[2px]">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-[2px] bg-white" 
                  style={{ 
                    height: `${70 + Math.random() * 30}%`,
                    marginTop: `${Math.random() * 15}%`
                  }}
                ></div>
              ))}
            </div>
            <div className="absolute right-3 top-3 w-1.5 h-1.5 rounded-full bg-white"></div>
          </div>
          <div className="ml-2">
            <h1 className="text-white font-bold text-xl md:text-2xl tracking-wide">UCASH</h1>
            {variant === 'default' && (
              <p className="text-white/80 text-[10px] tracking-wider">BETTER SAVINGS, BETTER LIFE</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Logo;

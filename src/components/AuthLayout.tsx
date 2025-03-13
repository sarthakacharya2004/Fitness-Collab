
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ 
  children,
}) => {
  return (
    <div className="page-container">
      <div className="mobile-mockup bg-navy">
        
        <div className="relative z-10 h-full  pb-16">
          {children}
        </div>
        
        <div className="bottom-indicator"></div>
      </div>
    </div>
  );
};

export default AuthLayout;

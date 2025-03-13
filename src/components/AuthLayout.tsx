
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
  statusTime?: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ 
  children,
  statusTime = "9:41"
}) => {
  return (
    <div className="page-container">
      <div className="mobile-mockup bg-navy">
        <div className="status-bar">
          <div className="text-sm font-medium">{statusTime}</div>
          <div className="flex space-x-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none" className="text-white">
              <path d="M1 0.5H16C16.2761 0.5 16.5 0.723858 16.5 1V11C16.5 11.2761 16.2761 11.5 16 11.5H1C0.723858 11.5 0.5 11.2761 0.5 11V1C0.5 0.723858 0.723858 0.5 1 0.5Z" stroke="currentColor"/>
              <rect x="2" y="1.5" width="13" height="9" rx="1" fill="currentColor"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="11" viewBox="0 0 15 11" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.5 0.5C11.5 0.5 14.5 2.5 14.5 5.5C14.5 8.5 11.5 10.5 7.5 10.5C3.5 10.5 0.5 8.5 0.5 5.5C0.5 2.5 3.5 0.5 7.5 0.5ZM7.5 1.5C4 1.5 1.5 3.5 1.5 5.5C1.5 7.5 4 9.5 7.5 9.5C11 9.5 13.5 7.5 13.5 5.5C13.5 3.5 11 1.5 7.5 1.5ZM7.5 2.5C10 2.5 12 3.5 12 5.5C12 7.5 10 8.5 7.5 8.5C5 8.5 3 7.5 3 5.5C3 3.5 5 2.5 7.5 2.5ZM7.5 3.5C5.5 3.5 4 4.5 4 5.5C4 6.5 5.5 7.5 7.5 7.5C9.5 7.5 11 6.5 11 5.5C11 4.5 9.5 3.5 7.5 3.5Z" fill="white"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
              <rect x="1" y="1" width="16" height="10" rx="2" stroke="white"/>
              <rect x="2" y="2" width="12" height="8" rx="1" fill="white"/>
            </svg>
          </div>
        </div>
        
        <div className="relative z-10 h-full overflow-y-auto pb-16">
          {children}
        </div>
        
        <div className="bottom-indicator"></div>
      </div>
    </div>
  );
};

export default AuthLayout;

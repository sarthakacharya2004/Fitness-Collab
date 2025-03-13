
import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "@/components/AuthLayout";

const Welcome = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-center min-h-[750px] px-6 py-10 space-y-10 text-white animate-fade-in">
        <div className="flex items-center justify-center mt-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center space-x-2">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 7.8C7 9.57 6.2 11.35 4.6 12.6C3.9 13.13 4.1 14.29 5 14.46C6.6 14.78 8.4 15.75 9.5 17.1C11 19 12.43 19 13.5 17.5C14.57 16 16.25 15 18 14.46C18.9 14.29 19.1 13.13 18.4 12.6C16.8 11.35 16 9.57 16 7.8C16 4.47 13.93 2 11.62 2C8.5 2 7 4.47 7 7.8Z" fill="white" />
              <path d="M10.05 16.87C9.44 16.87 8.87 16.8 8.31 16.66C7 16.29 5.12 15.42 4.11 14.06C3.90 13.77 3.92 13.38 4.16 13.12C4.4 12.86 4.79 12.81 5.08 12.98C6.72 13.99 7.73 15.81 7.73 17.81C7.73 18.17 7.51 18.5 7.17 18.63C7.05 18.68 6.93 18.7 6.8 18.7C6.58 18.7 6.38 18.61 6.24 18.44C5.74 17.81 5.1 17.3 4.35 16.92C4.13 16.8 3.99 16.57 3.99 16.32V16.32C3.99 16.14 4.07 15.96 4.21 15.84C4.35 15.72 4.54 15.67 4.72 15.7C6.37 15.98 7.93 16.73 9.14 17.84C9.45 18.13 9.47 18.61 9.18 18.92C9.03 19.08 8.83 19.17 8.62 19.17C8.43 19.17 8.24 19.1 8.09 18.96C7.9 18.78 7.7 18.62 7.49 18.47C7.25 18.29 7.14 17.99 7.18 17.68C7.22 17.37 7.42 17.12 7.7 17.01C7.97 16.91 8.25 16.87 8.53 16.87H10.05Z" fill="white" />
              <path d="M14 16.87C14.3 16.87 14.58 16.91 14.85 17.01C15.13 17.12 15.33 17.37 15.37 17.68C15.41 17.99 15.3 18.29 15.06 18.47C14.85 18.62 14.65 18.78 14.46 18.96C14.31 19.1 14.12 19.17 13.93 19.17C13.72 19.17 13.52 19.08 13.37 18.92C13.08 18.61 13.1 18.13 13.41 17.84C14.62 16.73 16.18 15.98 17.83 15.7C18.01 15.67 18.19 15.72 18.34 15.84C18.48 15.96 18.56 16.14 18.56 16.32C18.56 16.57 18.42 16.8 18.2 16.92C17.45 17.3 16.81 17.81 16.31 18.44C16.17 18.61 15.97 18.7 15.75 18.7C15.62 18.7 15.5 18.68 15.38 18.63C15.04 18.5 14.82 18.17 14.82 17.81C14.82 15.81 15.83 13.99 17.47 12.98C17.76 12.81 18.15 12.86 18.39 13.12C18.63 13.38 18.65 13.77 18.44 14.06C17.43 15.42 15.55 16.29 14.24 16.66C13.68 16.8 13.11 16.87 12.5 16.87H14Z" fill="white" />
            </svg>
            <h1 className="text-2xl font-bold">FitnessHub</h1>
          </div>
        </div>
        
        <div className="text-center mt-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <h1 className="text-4xl font-bold mb-6">Welcome</h1>
        </div>
        
        <div className="w-full space-y-4 mt-10 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <Link to="/auth/signin" className="block">
            <button className="fitness-button-primary">
              SIGN IN
            </button>
          </Link>
          
          <Link to="/auth/signup" className="block">
            <button className="fitness-button-secondary">
              SIGN UP
            </button>
          </Link>
        </div>
        
        <div className="mt-6 animate-fade-up" style={{ animationDelay: "0.8s" }}>
          <p className="text-sm text-center mb-6">Continue with</p>
          <div className="flex justify-center space-x-6">
            <button className="social-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="#1877F2"/>
              </svg>
            </button>
            <button className="social-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.8055 10.0415H12V14.0415H17.6515C17.2555 15.6415 16.2 16.8415 14.7455 17.6415L18.2685 20.3815C20.3555 18.3815 21.5 15.3815 21.5 12.0415C21.5 11.3415 21.4 10.7415 21.2455 10.0415H21.8055Z" fill="#4285F4"/>
                <path d="M12 22C15.1 22 17.8 20.9 19.7 18.9L16.2 16.2C15.2 16.9 13.7 17.4 12 17.4C9.3 17.4 7 15.5 6.1 13H2.4V15.8C4.3 19.4 8 22 12 22Z" fill="#34A853"/>
                <path d="M6.1 13C5.9 12.4 5.8 11.7 5.8 11C5.8 10.3 5.9 9.6 6.1 9V6.2H2.4C1.5 7.6 1 9.3 1 11C1 12.7 1.5 14.4 2.4 15.8L6.1 13Z" fill="#FBBC05"/>
                <path d="M12 5.6C13.7 5.6 15.3 6.3 16.5 7.4L19.6 4.3C17.6 2.5 15 1.3 12 1.3C8 1.3 4.3 3.9 2.4 7.5L6.1 10.3C7 7.8 9.3 5.6 12 5.6Z" fill="#EA4335"/>
              </svg>
            </button>
            <button className="social-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5645 12.4372C17.5538 10.6998 18.4141 9.5122 20.1572 8.6787C19.2324 7.3524 17.8042 6.62109 15.9257 6.47729C14.1357 6.33789 12.1724 7.54688 11.4634 7.54688C10.7134 7.54688 8.95166 6.52783 7.58398 6.52783C4.87598 6.56104 2 8.70654 2 12.9502C2 13.9727 2.15576 15.0283 2.46729 16.1045C2.87842 17.4966 4.94727 21.4692 7.11377 21.4077C8.2041 21.3867 9.00293 20.5532 10.4526 20.5532C11.8604 20.5532 12.5967 21.4077 13.8433 21.4077C16.0312 21.377 17.9355 17.793 18.3252 16.3999C15.1138 14.8926 14.5645 12.5454 17.5645 12.4372ZM14.9209 5.00195C16.3643 3.29248 16.2324 1.71387 16.1963 1C14.8657 1.0752 13.3291 1.92139 12.4482 2.96729C11.4634 4.0918 10.9077 5.44922 11.0083 6.45166C12.4199 6.55225 13.8862 6.30713 14.9209 5.00195Z" fill="black"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Welcome;

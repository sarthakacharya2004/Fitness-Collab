
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "@/components/AuthLayout";
import { ArrowLeft } from "lucide-react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
  };

  return (
    <AuthLayout>
      <div className="min-h-[750px] px-6 py-10 animate-fade-in">
        <button 
          onClick={() => navigate('/auth/welcome')} 
          className="text-white mb-6 flex items-center hover:text-gray-300 transition-colors"
        >
          <ArrowLeft size={20} className="mr-1" />
          <span>Back</span>
        </button>

        <div className="text-white animate-slide-in-left">
          <h1 className="text-4xl font-bold mb-2">Hello</h1>
          <h2 className="text-3xl font-bold">Sign In</h2>
        </div>

        <div className="mt-10">
          <form onSubmit={handleSubmit} className="fitness-card animate-slide-in-right">
            <div className="space-y-6">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="fitness-input"
                  required
                />
              </div>
              
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="fitness-input"
                  required
                />
              </div>

              <div className="text-right">
                <button type="button" className="text-sm text-navy hover:text-navy-light transition-colors">
                  Forgot password?
                </button>
              </div>

              <button type="submit" className="fitness-button-primary mt-6">
                SIGN IN
              </button>
            </div>
          </form>

          <div className="text-center mt-6 text-white animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <p className="text-sm">
              Don't have an account?{" "}
              <Link to="/auth/signup" className="font-semibold hover:text-gray-200 transition-colors">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignIn;

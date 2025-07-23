"use client";
import { useAuth } from "@/components/auth/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

/**
 * Login page component
 * Redirects authenticated users to dashboard
 */
export default function LoginPage() {
  const { signInWithGoogle, loading, user } = useAuth();
  const router = useRouter();

  // Redirect authenticated users to dashboard
  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  // Don't show login form if already authenticated
  if (user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Redirecting to dashboard...</div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="p-8 bg-white rounded-lg shadow-md flex flex-col items-center max-w-md w-full mx-4">
        {/* App Branding */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Scera</h1>
        <p className="text-gray-600 mb-8 text-center">
          AI-enhanced reading and knowledge management
        </p>
        
        {/* Sign In Button */}
        <button
          onClick={signInWithGoogle}
          disabled={loading}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? "Signing in..." : "Sign in with Google"}
        </button>
        
        {/* Help Text */}
        <p className="text-sm text-gray-500 mt-4 text-center">
          Sign in to access your personal library and AI reading features
        </p>
      </div>
    </div>
  );
} 
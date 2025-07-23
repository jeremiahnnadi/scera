"use client";
import { useAuth } from "@/components/auth/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

/**
 * Home page component - Dashboard for authenticated users
 * Redirects to login if user is not authenticated
 */
export default function HomePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  // Show loading while checking authentication
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  // Don't render anything if not authenticated (will redirect)
  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Welcome Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome to Scera</h1>
        <p className="text-gray-600 mb-8">Hello, {user.displayName || user.email}</p>
        
        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Library Link */}
          <a 
            href="/library" 
            className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <div className="text-3xl mb-4">📚</div>
            <h2 className="text-xl font-semibold mb-2">My Library</h2>
            <p className="text-gray-600">View and manage your books</p>
          </a>
          
          {/* Upload Feature (Coming Soon) */}
          <div className="block p-6 bg-white rounded-lg shadow opacity-50">
            <div className="text-3xl mb-4">⬆️</div>
            <h2 className="text-xl font-semibold mb-2">Upload Book</h2>
            <p className="text-gray-600">Coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

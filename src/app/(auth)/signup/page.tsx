"use client";
import { useAuth } from "@/components/auth/AuthProvider";

export default function SignupPage() {
  const { signInWithGoogle, loading } = useAuth();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="p-8 bg-white rounded shadow-md flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Sign up for Scera</h1>
        <button
          onClick={signInWithGoogle}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Sign up with Google"}
        </button>
      </div>
    </div>
  );
}

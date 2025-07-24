"use client";
import { useAuth } from "@/components/auth/AuthProvider";

export function AuthDebug() {
  const { user, loading } = useAuth();

  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-2 rounded text-xs max-w-xs">
      <div>Loading: {loading ? 'true' : 'false'}</div>
      <div>User: {user ? user.email : 'null'}</div>
      <div>UID: {user ? user.uid.slice(0, 8) + '...' : 'null'}</div>
    </div>
  );
}

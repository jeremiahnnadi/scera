import "./globals.css";
import { AuthProvider } from "@/components/auth/AuthProvider";

export const metadata = {
  title: "Scera",
  description: "AI-enhanced reading and knowledge management platform",
};

/**
 * Root layout component that wraps the entire application
 * Provides Firebase authentication context to all pages
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
} 
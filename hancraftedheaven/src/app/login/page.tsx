"use client";

import LoginForm from "@/app/ui/login-form";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-zinc-50 dark:bg-black">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </main>
  );
}

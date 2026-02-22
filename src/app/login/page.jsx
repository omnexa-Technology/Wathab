'use client';

import { GalleryVerticalEnd } from 'lucide-react';
import { LoginForm } from '../../components/login-form';
import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    await signIn('credentials', {
      username: form.get('username'),
      password: form.get('password'),
      callbackUrl: '/studio',
    });
  }

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Whathab
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          src="/placeholder.svg"
          alt="Login background"
          fill
          className="object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}

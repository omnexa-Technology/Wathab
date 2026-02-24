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
            <Image src="/assets/icons/logo/logoAbout.svg" alt="Logo" width={70} height={70} />
            Whathab
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>


      <div className=" relative hidden lg:block rounded-sen-lg bg-white">
        <Image
          src="/assets/images/Login/login.webp"
          alt="Login background"
          fill
          className="object-cover rounded-4xl"
        />
      </div>

    </div>
  );
}

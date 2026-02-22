import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { createClient } from '@sanity/client';
import bcrypt from 'bcryptjs';

const sanityAuth = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Admin Login',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null;

        // 1. Check hardcoded admin credentials from env
        const adminUsername = process.env.ADMIN_USERNAME;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (
          adminUsername &&
          adminPassword &&
          credentials.username === adminUsername &&
          credentials.password === adminPassword
        ) {
          return { id: 'admin', name: adminUsername };
        }

        // 2. Fall back to Sanity user schema
        try {
          const user = await sanityAuth.fetch(
            `*[_type == "user" && username == $username][0]{ _id, username, password }`,
            { username: credentials.username }
          );

          if (!user) return null;

          // Support bcrypt-hashed and plain-text passwords
          let isValid = false;
          try {
            isValid = await bcrypt.compare(credentials.password, user.password);
          } catch {
            isValid = credentials.password === user.password;
          }

          if (!isValid) return null;

          return { id: user._id, name: user.username };
        } catch {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };

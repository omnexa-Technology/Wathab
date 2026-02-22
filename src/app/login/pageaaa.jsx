'use client'

import { signIn } from "next-auth/react";

export default function LoginPage() {
    async function handleSubmit(e) {
        e.preventDefault();
        const form = new FormData(e.target);
        await signIn("credentials", {
            username: form.get("username"),
            password: form.get("password"),
            callbackUrl: "/studio",
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="username" placeholder="username" />
            <input name="password" type="password" placeholder="password" />
            <button type="submit">
                Login
            </button>
        </form>
    );

}
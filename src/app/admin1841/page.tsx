"use client";

import React, { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const supabase = createClient();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error: loginError } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (loginError) {
            setError(loginError.message);
            setLoading(false);
            return;
        }

        router.push("/admin1841/dashboard");
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-6">
            <div className="max-w-md w-full glass-panel p-8 border border-white/10">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-orbitron font-bold text-white mb-2 uppercase tracking-tighter">
                        Admin Access
                    </h1>
                    <p className="text-slate-400 font-rajdhani">Secure Protocol Level 4</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-slate-400 font-rajdhani text-sm mb-2 uppercase tracking-widest">
                            Ident Code (Email)
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-white font-rajdhani focus:border-white/40 focus:outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-slate-400 font-rajdhani text-sm mb-2 uppercase tracking-widest">
                            Security Override (Password)
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-white font-rajdhani focus:border-white/40 focus:outline-none transition-all"
                        />
                    </div>

                    {error && (
                        <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-rajdhani text-center">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-white text-black font-orbitron font-bold uppercase tracking-widest hover:bg-slate-200 transition-all disabled:opacity-50"
                    >
                        {loading ? "Decrypting..." : "Initialize Session"}
                    </button>
                </form>
            </div>
        </div>
    );
}

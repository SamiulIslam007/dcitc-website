"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const router = useRouter();
    const supabase = createClient();

    useEffect(() => {
        async function checkAdmin() {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                router.push("/admin1841");
                return;
            }

            const { data: profile } = await supabase
                .from("profiles")
                .select("role")
                .eq("id", user.id)
                .single();

            if ((profile as any)?.role !== "admin") {
                router.push("/");
                return;
            }

            setIsAdmin(true);
            setLoading(false);
        }

        checkAdmin();
    }, [router, supabase]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/");
    };

    if (loading) return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <p className="font-orbitron text-white text-xl animate-pulse">VERIFYING CREDENTIALS...</p>
        </div>
    );

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto">
                <header className="flex justify-between items-center mb-12 border-b border-white/10 pb-8">
                    <div>
                        <h1 className="text-4xl font-orbitron font-bold uppercase tracking-tighter">Command Center</h1>
                        <p className="text-slate-400 font-rajdhani text-lg">Central Intelligence & Achievement Management</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="px-6 py-2 border border-white/20 font-orbitron text-sm hover:bg-white/10 transition-all"
                    >
                        TERMINATE SESSION
                    </button>
                </header>

                <div className="grid md:grid-cols-2 gap-12">
                    <section className="glass-panel p-8 border border-white/10 flex flex-col h-full">
                        <div className="mb-6">
                            <h2 className="text-2xl font-orbitron font-bold mb-2">Intel Ops</h2>
                            <p className="text-slate-400 font-rajdhani">Manage field reports and intelligence briefings</p>
                        </div>
                        <div className="flex flex-col gap-4 mt-auto">
                            <a href="/admin1841/intels" className="block w-full py-4 bg-white/5 border border-white/10 text-center font-orbitron hover:bg-white hover:text-black transition-all">
                                MANAGE INTEL
                            </a>
                            <a href="/admin1841/intels/new" className="block w-full py-4 border border-white/20 text-center font-orbitron hover:bg-white/10 transition-all">
                                AUTHOR NEW BRIEFING
                            </a>
                        </div>
                    </section>

                    <section className="glass-panel p-8 border border-white/10 flex flex-col h-full">
                        <div className="mb-6">
                            <h2 className="text-2xl font-orbitron font-bold mb-2">Milestone Logs</h2>
                            <p className="text-slate-400 font-rajdhani">Track and update club achievements and victories</p>
                        </div>
                        <div className="flex flex-col gap-4 mt-auto">
                            <a href="/admin1841/achievements" className="block w-full py-4 bg-white/5 border border-white/10 text-center font-orbitron hover:bg-white hover:text-black transition-all">
                                MANAGE LOGS
                            </a>
                            <a href="/admin1841/achievements/new" className="block w-full py-4 border border-white/20 text-center font-orbitron hover:bg-white/10 transition-all">
                                RECORD NEW MILESTONE
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

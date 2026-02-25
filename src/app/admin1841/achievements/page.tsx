"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function AdminAchievements() {
    const [items, setItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const supabase = createClient();

    useEffect(() => {
        async function fetchAchievements() {
            const { data } = await supabase.from("achievements").select("*").order("year", { ascending: false });
            setItems(data || []);
            setLoading(false);
        }
        fetchAchievements();
    }, [supabase]);

    const handleDelete = async (id: number) => {
        if (!confirm("Remove this achievement from history?")) return;
        const { error } = await supabase.from("achievements").delete().eq("id", id);
        if (!error) setItems(items.filter(i => i.id !== id));
    };

    if (loading) return <div className="p-10 text-white font-orbitron animate-pulse">LOCALIZING DATA...</div>;

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12 px-6">
            <div className="max-w-6xl mx-auto">
                <header className="flex justify-between items-center mb-10">
                    <h1 className="text-3xl font-orbitron font-bold">MILESTONE REPOSITORY</h1>
                    <a href="/admin1841/dashboard" className="text-slate-400 hover:text-white font-rajdhani">← Command Center</a>
                </header>

                <div className="space-y-4">
                    {items.map((item) => (
                        <div key={item.id} className="glass-panel p-6 border border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="flex items-center gap-6 w-full md:w-auto">
                                <div className="w-16 h-16 bg-white/5 border border-white/10 shrink-0 overflow-hidden">
                                    <img src={item.image} alt="" className="w-full h-full object-cover grayscale" />
                                </div>
                                <div>
                                    <h3 className="font-orbitron font-bold text-lg">{item.title}</h3>
                                    <p className="text-slate-500 font-rajdhani text-sm">{item.year}</p>
                                </div>
                            </div>
                            <div className="flex gap-4 w-full md:w-auto">
                                <a
                                    href={`/admin1841/achievements/edit/${item.id}`}
                                    className="px-4 py-2 border border-white/20 font-orbitron text-xs hover:bg-white/10 transition-all text-center flex-1 md:flex-none"
                                >
                                    EDIT
                                </a>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="px-4 py-2 border border-red-500/20 text-red-500 font-orbitron text-xs hover:bg-red-500/10 transition-all flex-1 md:flex-none"
                                >
                                    EXPUNGE
                                </button>
                            </div>
                        </div>
                    ))}
                    {items.length === 0 && <p className="text-center text-slate-500 font-rajdhani py-12">No milestones recorded.</p>}
                </div>
            </div>
        </div>
    );
}

"use client";

import React, { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function NewAchievement() {
    const [formData, setFormData] = useState({
        title: "",
        detail: "",
        year: new Date().getFullYear().toString(),
        image: "/hero.png",
        gallery: [] as string[],
    });
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState<number | 'main' | null>(null);
    const router = useRouter();
    const supabase = createClient();

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'main' | number) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(type);
        const fileExt = file.name.split(".").pop();
        const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;

        const { data, error } = await supabase.storage
            .from("uploads")
            .upload(fileName, file);

        if (error) {
            alert("Upload failed: " + error.message);
        } else {
            const { data: { publicUrl } } = supabase.storage.from("uploads").getPublicUrl(fileName);
            if (type === 'main') {
                setFormData({ ...formData, image: publicUrl });
            } else {
                const newGallery = [...formData.gallery];
                newGallery[type] = publicUrl;
                setFormData({ ...formData, gallery: newGallery });
            }
        }
        setUploading(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const { error } = await (supabase as any).from("achievements").insert(formData);
        if (!error) router.push("/admin1841/achievements");
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12 px-6">
            <div className="max-w-4xl mx-auto">
                <header className="mb-10">
                    <h1 className="text-3xl font-orbitron font-bold uppercase tracking-tight">Record Milestone</h1>
                    <a href="/admin1841/achievements" className="text-slate-400 hover:text-white font-rajdhani">← Cancel Operation</a>
                </header>

                <form onSubmit={handleSubmit} className="space-y-8 glass-panel p-8 border border-white/10">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-slate-500 font-rajdhani text-sm uppercase mb-2">Title</label>
                                <input required className="w-full bg-white/5 border border-white/10 p-3 font-rajdhani focus:border-white/40 outline-none"
                                    value={formData.title}
                                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-slate-500 font-rajdhani text-sm uppercase mb-2">Year</label>
                                <input required className="w-full bg-white/5 border border-white/10 p-3 font-rajdhani focus:border-white/40 outline-none"
                                    value={formData.year}
                                    onChange={e => setFormData({ ...formData, year: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <label className="block text-slate-500 font-rajdhani text-sm uppercase mb-2">Hero Image</label>
                            <div className="aspect-video bg-white/5 border border-white/10 overflow-hidden relative group">
                                <img src={formData.image} className="w-full h-full object-cover grayscale" />
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <label className="cursor-pointer font-orbitron text-xs">
                                        {uploading === 'main' ? "UPLOADING..." : "UPLOAD HERO"}
                                        <input type="file" className="hidden" accept="image/*" onChange={e => handleImageUpload(e, 'main')} disabled={uploading !== null} />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <label className="block text-slate-500 font-rajdhani text-sm uppercase mb-2">Mission Gallery (4 Images)</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[0, 1, 2, 3].map((i) => (
                                <div key={i} className="aspect-square bg-white/5 border border-white/10 overflow-hidden relative group">
                                    {formData.gallery[i] ? (
                                        <img src={formData.gallery[i]} className="w-full h-full object-cover grayscale text-xs p-2 text-slate-500" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-700 font-orbitron text-3xl">?</div>
                                    )}
                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <label className="cursor-pointer font-orbitron text-[10px] text-center">
                                            {uploading === i ? "UPLOADING..." : formData.gallery[i] ? "REPLACE" : "UPLOAD"}
                                            <input type="file" className="hidden" accept="image/*" onChange={e => handleImageUpload(e, i)} disabled={uploading !== null} />
                                        </label>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-slate-500 font-rajdhani text-sm uppercase mb-2">Achievement Details</label>
                        <textarea required rows={5} className="w-full bg-white/5 border border-white/10 p-3 font-rajdhani focus:border-white/40 outline-none"
                            value={formData.detail}
                            onChange={e => setFormData({ ...formData, detail: e.target.value })}
                        />
                    </div>
                    <button type="submit" disabled={loading || uploading !== null} className="w-full py-4 bg-white text-black font-orbitron font-bold tracking-widest hover:bg-slate-200 transition-all">
                        {loading ? "COMMITTING RECORD..." : "RECORD ACHIEVEMENT"}
                    </button>
                </form>
            </div>
        </div>
    );
}

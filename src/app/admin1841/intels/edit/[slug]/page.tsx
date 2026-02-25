"use client";

import React, { useState, useEffect, use } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function EditIntel({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const [formData, setFormData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const router = useRouter();
    const supabase = createClient();

    useEffect(() => {
        async function fetchIntel() {
            const { data } = await supabase.from("intels").select("*").eq("slug", slug).single();
            if (data) setFormData(data);
        }
        fetchIntel();
    }, [slug, supabase]);

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setUploading(true);
        const fileExt = file.name.split(".").pop();
        const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
        const { data, error } = await supabase.storage.from("uploads").upload(fileName, file);
        if (!error) {
            const { data: { publicUrl } } = supabase.storage.from("uploads").getPublicUrl(fileName);
            setFormData({ ...formData, image: publicUrl });
        }
        setUploading(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const { error } = await (supabase as any).from("intels").update(formData).eq("id", formData.id);
        if (!error) router.push("/admin1841/intels");
        setLoading(false);
    };

    if (!formData) return <div className="p-10 text-white font-orbitron animate-pulse">EXTRACTING RECORD...</div>;

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12 px-6">
            <div className="max-w-4xl mx-auto">
                <header className="mb-10">
                    <h1 className="text-3xl font-orbitron font-bold uppercase tracking-tight">Modify Intel</h1>
                    <a href="/admin1841/intels" className="text-slate-400 hover:text-white font-rajdhani">← Abort Changes</a>
                </header>

                <form onSubmit={handleSubmit} className="space-y-8 glass-panel p-8 border border-white/10">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-slate-500 font-rajdhani text-sm uppercase mb-2">Title</label>
                                <input
                                    required
                                    className="w-full bg-white/5 border border-white/10 p-3 font-rajdhani focus:border-white/40 outline-none"
                                    value={formData.title}
                                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-slate-500 font-rajdhani text-sm uppercase mb-2">Slug</label>
                                <input
                                    required
                                    className="w-full bg-white/5 border border-white/10 p-3 font-rajdhani focus:border-white/40 outline-none"
                                    value={formData.slug}
                                    onChange={e => setFormData({ ...formData, slug: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-slate-500 font-rajdhani text-sm uppercase mb-2">Tag</label>
                                <input required className="w-full bg-white/5 border border-white/10 p-3 font-rajdhani focus:border-white/40 outline-none"
                                    value={formData.tag}
                                    onChange={e => setFormData({ ...formData, tag: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="space-y-4 text-center">
                            <label className="block text-slate-500 font-rajdhani text-sm uppercase mb-2 text-left">Visual Data</label>
                            <div className="aspect-video bg-white/5 border border-white/10 overflow-hidden relative group">
                                <img src={formData.image} className="w-full h-full object-cover grayscale" />
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <label className="cursor-pointer font-orbitron text-xs">
                                        {uploading ? "UPLOADING..." : "SWAP FILE"}
                                        <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-slate-500 font-rajdhani text-sm uppercase mb-2">Excerpt</label>
                        <textarea required rows={2} className="w-full bg-white/5 border border-white/10 p-3 font-rajdhani focus:border-white/40 outline-none"
                            value={formData.excerpt}
                            onChange={e => setFormData({ ...formData, excerpt: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-slate-500 font-rajdhani text-sm uppercase mb-2">Content</label>
                        <textarea required rows={10} className="w-full bg-white/5 border border-white/10 p-3 font-rajdhani focus:border-white/40 outline-none"
                            value={formData.content}
                            onChange={e => setFormData({ ...formData, content: e.target.value })}
                        />
                    </div>
                    <button type="submit" disabled={loading || uploading} className="w-full py-4 bg-white text-black font-orbitron font-bold tracking-widest hover:bg-slate-200 transition-all">
                        {loading ? "PATCHING CORE..." : "APPLY MODIFICATIONS"}
                    </button>
                </form>
            </div>
        </div>
    );
}

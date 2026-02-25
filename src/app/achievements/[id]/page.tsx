import Image from "next/image";
import { notFound } from "next/navigation";
import { createStaticClient } from "@/lib/supabase/static";
import { Database } from "@/lib/supabase/types";
import { Metadata } from "next";

type Achievement = Database["public"]["Tables"]["achievements"]["Row"];

async function getAchievement(id: string): Promise<Achievement | null> {
    try {
        const supabase = createStaticClient();
        const { data, error } = await supabase
            .from("achievements")
            .select("*")
            .eq("id", id)
            .single();

        if (error) {
            console.error("Error fetching achievement:", error);
            return null;
        }

        return data;
    } catch (error) {
        console.error("Unexpected error:", error);
        return null;
    }
}

export async function generateStaticParams() {
    const supabase = createStaticClient();
    const { data: achievements } = await supabase.from("achievements").select("id");
    return (achievements as any[])?.map((a) => ({ id: a.id.toString() })) || [];
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const achievement = await getAchievement(id);

    if (!achievement) {
        return {
            title: "Achievement Not Found",
        };
    }

    return {
        title: `${achievement.title} | DCITC Achievements`,
        description: achievement.detail,
        openGraph: {
            title: achievement.title,
            description: achievement.detail,
            images: [achievement.image],
        },
    };
}

export default async function AchievementDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const achievement = await getAchievement(id);

    if (!achievement) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black text-slate-200 pt-24 sm:pt-32 pb-16">
            <article className="max-w-4xl mx-auto px-6">
                <header className="mb-10">
                    <a
                        href="/achievements"
                        className="inline-flex items-center text-slate-400 hover:text-white font-rajdhani mb-6 transition-colors"
                    >
                        ← Back to Achievements
                    </a>

                    <div className="relative h-64 md:h-96 w-full mb-8 overflow-hidden border border-white/10 rounded-lg">
                        <Image
                            src={achievement.image}
                            alt={achievement.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 text-xs font-orbitron tracking-widest uppercase rounded bg-white/10 text-white border border-white/20">
                            Ranked in {achievement.year}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
                        {achievement.title}
                    </h1>
                </header>

                <div className="prose prose-invert max-w-none mb-12">
                    <p className="font-rajdhani text-slate-300 text-xl leading-relaxed whitespace-pre-line">
                        {achievement.detail}
                    </p>
                </div>

                {achievement.gallery && achievement.gallery.length > 0 && (
                    <div className="mt-12">
                        <h3 className="text-white font-orbitron text-lg mb-6 uppercase tracking-widest">Mission Gallery</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {achievement.gallery.map((img, index) => (
                                <div key={index} className="relative aspect-square overflow-hidden border border-white/10 rounded-lg group">
                                    <Image
                                        src={img}
                                        alt={`Gallery image ${index + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="mt-16 pt-8 border-t border-white/10">
                    <h3 className="text-white font-orbitron text-lg mb-4">Share this Mission</h3>
                    <div className="flex gap-4">
                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                                typeof window !== "undefined" ? window.location.href : ""
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-600/20 text-blue-500 font-orbitron text-sm rounded-none transition-all"
                        >
                            Facebook
                        </a>
                        <a
                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                                typeof window !== "undefined" ? window.location.href : ""
                            )}&text=${encodeURIComponent(achievement.title)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-sky-400/10 hover:bg-sky-400/20 border border-sky-400/20 text-sky-400 font-orbitron text-sm rounded-none transition-all"
                        >
                            Twitter
                        </a>
                    </div>
                </div>
            </article>
        </div>
    );
}

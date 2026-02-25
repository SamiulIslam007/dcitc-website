import Image from "next/image";
import { notFound } from "next/navigation";
import { createStaticClient } from "@/lib/supabase/static";
import { Database } from "@/lib/supabase/types";
import { Metadata } from "next";
import ShareButtons from "@/components/ShareButtons";

type Intel = Database["public"]["Tables"]["intels"]["Row"];

async function getIntelBySlug(slug: string): Promise<Intel | null> {
  try {
    const supabase = createStaticClient();
    const { data, error } = await supabase
      .from("intels")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error) {
      console.error("Error fetching intel:", error);
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
  const { data: intels } = await supabase.from("intels").select("slug");
  return (intels as any[])?.map((i) => ({ slug: i.slug })) || [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const intel = await getIntelBySlug(slug);

  if (!intel) {
    return {
      title: "Intel Not Found",
    };
  }

  return {
    title: `${intel.title} | DCITC Intel`,
    description: intel.excerpt,
    openGraph: {
      title: intel.title,
      description: intel.excerpt,
      images: [intel.image],
    },
  };
}

export default async function IntelDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const intel = await getIntelBySlug(slug);

  if (!intel) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-slate-200 pt-24 sm:pt-32 pb-16">
      <article className="max-w-4xl mx-auto px-6">
        <header className="mb-10">
          <a
            href="/intel"
            className="inline-flex items-center text-slate-400 hover:text-white font-rajdhani mb-6 transition-colors"
          >
            ← Back to Intel
          </a>

          <div className="relative h-64 md:h-96 w-full mb-8 overflow-hidden border border-white/10 rounded-lg">
            <Image
              src={intel.image}
              alt={intel.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
            <span className="w-fit px-3 py-1 text-xs font-orbitron tracking-widest uppercase rounded bg-white/10 text-white border border-white/20">
              {intel.tag}
            </span>
            <div className="flex items-center gap-4">
              <span className="text-sm font-rajdhani text-slate-500">
                {intel.date}
              </span>
              <span className="text-sm font-rajdhani text-slate-500 border-l border-white/10 pl-4">
                By DCITC Core
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
            {intel.title}
          </h1>
          <p className="text-xl font-rajdhani text-slate-400 leading-relaxed">
            {intel.excerpt}
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <div className="font-rajdhani text-slate-300 text-lg leading-relaxed whitespace-pre-line">
            {intel.content}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <h3 className="text-white font-orbitron text-lg mb-4">Circulate Intel</h3>
          <ShareButtons title={intel.title} />
        </div>
      </article>
    </div>
  );
}

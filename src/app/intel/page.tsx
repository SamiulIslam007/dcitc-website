import Image from "next/image";
import { createStaticClient } from "@/lib/supabase/static";
import { Database } from "@/lib/supabase/types";

type Intel = Database["public"]["Tables"]["intels"]["Row"];

async function getIntels(): Promise<Intel[]> {
  try {
    const supabase = createStaticClient();
    const { data, error } = await supabase
      .from("intels")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching intels:", error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error("Unexpected error:", error);
    return [];
  }
}

export default async function IntelsPage() {
  const intels = await getIntels();

  return (
    <div className="min-h-screen bg-black text-slate-200 pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-10">
          <p className="text-xs font-orbitron tracking-[0.3em] text-slate-500 uppercase mb-3">
            Intelligence Briefing
          </p>
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
            Intel
          </h1>
          <p className="text-slate-400 font-rajdhani text-lg">
            Latest insights and updates from the DCITC team
          </p>
        </header>

        {intels.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-500 font-rajdhani text-xl">
              No intelligence reports available at this time.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {intels.map((intel) => (
              <a
                key={intel.id}
                href={`/intel/${intel.slug}`}
                className="group relative bg-dc-panel p-0 border border-white/5 hover:border-white/30 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={intel.image}
                    alt={intel.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 text-xs font-orbitron tracking-widest uppercase rounded bg-black/70 text-white">
                    {intel.tag}
                  </span>
                </div>

                <div className="p-5 flex flex-col grow">
                  <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-slate-200 leading-tight">
                    {intel.title}
                  </h3>
                  <p className="font-rajdhani text-slate-400 text-sm mb-3 grow">
                    {intel.excerpt}
                  </p>

                  <div className="flex justify-between items-center pt-2 border-t border-white/5 mt-auto">
                    <span className="text-xs font-rajdhani text-slate-500">
                      {intel.date}
                    </span>
                    <span className="text-sm font-orbitron text-white/80 border-b border-transparent group-hover:border-white/50 transition-colors">
                      Read More →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

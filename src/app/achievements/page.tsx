import Image from "next/image";
import { DEMO_ACHIEVEMENTS } from "@/constants";
import { Achievement } from "@/types";

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-black text-slate-200 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-10">
          <p className="text-xs font-orbitron tracking-[0.3em] text-slate-500 uppercase mb-3">
            Mission Log
          </p>
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
            Achievements
          </h1>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {DEMO_ACHIEVEMENTS.map((item: Achievement) => (
            <div
              key={item.title}
              className="bg-dc-panel border border-white/10 p-6 flex flex-col gap-3 hover:border-white/40 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative w-full h-40 mb-2 overflow-hidden border border-white/10 bg-black/40">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xs font-orbitron tracking-[0.3em] text-slate-500 uppercase">
                {item.year}
              </span>
              <h2 className="text-lg md:text-xl font-orbitron text-white">
                {item.title}
              </h2>
              <p className="font-rajdhani text-slate-400 text-sm leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

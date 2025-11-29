"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "../UI/SectionTitle";
import { LEADERSHIP } from "../../constants";
import { LeadershipMember } from "../../types";

const LEADERSHIP_MEMBERS: LeadershipMember[] =
  LEADERSHIP.MEMBERS as LeadershipMember[];
const LEADERSHIP_SUBTITLE: string = LEADERSHIP.SUBTITLE;
const LEADERSHIP_EXEC_LABEL: string = LEADERSHIP.LABELS.EXECUTIVE;
const LEADERSHIP_CHIEF_LABEL: string = LEADERSHIP.LABELS.CHIEF;
const LEADERSHIP_JOINT_LABEL: string = LEADERSHIP.LABELS.JOINT;

const Leadership: React.FC = () => {
  const executives = LEADERSHIP_MEMBERS.filter((m) => m.tier === "executive");
  const chiefs = LEADERSHIP_MEMBERS.filter((m) => m.tier === "chief");
  const joints = LEADERSHIP_MEMBERS.filter((m) => m.tier === "joint");

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  const LeaderCard = ({
    member,
    index,
    size = "normal",
  }: {
    member: LeadershipMember;
    index: number;
    size?: "large" | "normal" | "small";
  }) => {
    const sizeClasses: Record<"large" | "normal" | "small", string> = {
      large: "w-48 h-48 md:w-56 md:h-56",
      normal: "w-40 h-40 md:w-48 md:h-48",
      small: "w-36 h-36 md:w-40 md:h-40",
    };

    return (
      <motion.div
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
        className="group relative flex flex-col items-center"
      >
        <div className={`relative ${sizeClasses[size]} mb-4 overflow-hidden`}>
          <div
            className="absolute inset-0 border border-white/10 group-hover:border-white/40 transition-all duration-500 bg-linear-to-br from-white/5 to-transparent"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          ></div>

          <div
            className="absolute inset-2 overflow-hidden"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          >
            <Image
              src={member.image}
              alt={`${member.name} - ${member.role}`}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 border-t border-l border-white/30 group-hover:border-white/60 transition-colors"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 border-b border-r border-white/30 group-hover:border-white/60 transition-colors"></div>
        </div>

        <div className="text-center">
          <h3 className="font-orbitron text-white text-sm md:text-base font-bold tracking-wider uppercase mb-1">
            {member.name}
          </h3>
          <p className="font-rajdhani text-slate-400 text-sm md:text-base tracking-wide">
            {member.role}
          </p>
        </div>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-white/20 to-transparent animate-[scan_2s_linear_infinite]"></div>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="leadership"
      className="py-24 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle title="Leadership" subtitle={LEADERSHIP_SUBTITLE} />

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center items-center mb-8"
          >
            <div className="h-px w-16 bg-linear-to-r from-transparent to-white/30"></div>
            <span className="px-4 font-orbitron text-xs tracking-[0.3em] text-slate-500 uppercase">
              {LEADERSHIP_EXEC_LABEL}
            </span>
            <div className="h-px w-16 bg-linear-to-l from-transparent to-white/30"></div>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {executives.map((member, index) => (
              <LeaderCard
                key={member.image}
                member={member}
                index={index}
                size="large"
              />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center items-center mb-8"
          >
            <div className="h-px w-16 bg-linear-to-r from-transparent to-white/20"></div>
            <span className="px-4 font-orbitron text-xs tracking-[0.3em] text-slate-600 uppercase">
              {LEADERSHIP_CHIEF_LABEL}
            </span>
            <div className="h-px w-16 bg-linear-to-l from-transparent to-white/20"></div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10 justify-items-center">
            {chiefs.map((member, index) => (
              <LeaderCard
                key={member.image}
                member={member}
                index={index + executives.length}
                size="normal"
              />
            ))}
          </div>
        </div>

        {joints.length > 0 && (
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center items-center mb-8"
            >
              <div className="h-px w-16 bg-linear-to-r from-transparent to-white/10"></div>
              <span className="px-4 font-orbitron text-xs tracking-[0.3em] text-slate-700 uppercase">
                {LEADERSHIP_JOINT_LABEL}
              </span>
              <div className="h-px w-16 bg-linear-to-l from-transparent to-white/10"></div>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {joints.map((member, index) => (
                <LeaderCard
                  key={member.image}
                  member={member}
                  index={index + executives.length + chiefs.length}
                  size="small"
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="absolute top-1/4 left-0 w-32 h-32 bg-white/5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-white/3 blur-3xl rounded-full"></div>
    </section>
  );
};

export default Leadership;

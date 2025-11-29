import { Terminal, Cpu, ShieldCheck, BrainCircuit } from "lucide-react";
import { NavItem, DomainFeature, Achievement } from "./types";

export const CLUB = {
  NAME: "Dhaka College Information & Technology Club",
  SHORT: "DCITC",
  MOTTO: "Shaping Tomorrow Today",
  FOUNDED: "2025",
  LOGO_URL: "/logo.png",
  MISSION: {
    STATEMENT:
      'To enrich higher secondary level DCians with core and deep knowledge of Robotics, Programming, Cybersecurity, and Artificial Intelligence. We dig into the world of technology with our motto "Shaping Tomorrow Today".',
  },
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Domains", href: "#domains" },
  { label: "Departments", href: "#departments" },
  { label: "Leadership", href: "#leadership" },
  { label: "Achievements", href: "#achievements" },
  { label: "Intel", href: "#intel" },
];

export const DOMAINS: DomainFeature[] = [
  {
    title: "Robotics",
    description:
      "Designing autonomous systems and mechanical automation to bridge software with the physical world.",
    icon: Cpu,
    color: "text-slate-300",
  },
  {
    title: "Programming",
    description:
      "Mastering algorithms, data structures, and software engineering to build scalable digital solutions.",
    icon: Terminal,
    color: "text-white",
  },
  {
    title: "Cybersecurity",
    description:
      "Defending networks and systems. Ethical hacking, cryptography, and securing the digital frontier.",
    icon: ShieldCheck,
    color: "text-slate-400",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Exploring machine learning, neural networks, and generative AI to create intelligent systems.",
    icon: BrainCircuit,
    color: "text-gray-200",
  },
];

export const DEPARTMENTS: DomainFeature[] = [
  {
    title: "Content Writing & Publication Department",
    description:
      "Crafting compelling technical and creative content, publications, and communications that shape the voice of DCITC.",
    icon: Terminal,
    color: "text-green-300",
  },
  {
    title: "Graphics & Design Department",
    description:
      "Designing visual identities, event collateral, and digital assets that represent the club across all media.",
    icon: Cpu,
    color: "text-blue-300",
  },
  {
    title: "Programming & Robotics Department",
    description:
      "Building software and robotics projects, from algorithms to autonomous systems, powering innovation at DCITC.",
    icon: BrainCircuit,
    color: "text-purple-300",
  },
  {
    title: "Web Development & Cyber Security Department",
    description:
      "Engineering secure web platforms while safeguarding the club's digital infrastructure through cybersecurity practices.",
    icon: ShieldCheck,
    color: "text-red-300",
  },
];

export const LEADERSHIP = {
  MEMBERS: [
    {
      name: "M M Mushfiq Bin Musa",
      role: "President",
      image: "/leadership/president.png",
      tier: "executive",
    },
    {
      name: "Tahasin Raj Khan",
      role: "Vice President",
      image: "/leadership/vice-president.png",
      tier: "executive",
    },
    {
      name: "Sakhwat Hossain Saikot",
      role: "General Secretary",
      image: "/leadership/gs.png",
      tier: "executive",
    },
    {
      name: "Jannato Adon Soaeb",
      role: "Chief Executive of Administration",
      image: "/leadership/CEA.png",
      tier: "chief",
    },
    {
      name: "Arpon Saha",
      role: "Chief Executive of Content Writing & Publication",
      image: "/leadership/CECWP.png",
      tier: "chief",
    },
    {
      name: "MD An Nafi",
      role: "Chief Executive of Graphics & Design",
      image: "/leadership/CEGD.png",
      tier: "chief",
    },
    {
      name: "MD Rudro Biswas",
      role: "Chief Executive of Web Development & Cyber Security",
      image: "/leadership/CEWC.png",
      tier: "chief",
    },
    {
      name: "Srijon Kumar Shill",
      role: "Chief Executive of Programming & Robotics",
      image: "/leadership/CEPR.png",
      tier: "chief",
    },
    {
      name: "Nazmul Alom Shanto",
      role: "Joint Executive of Programming & Robotics",
      image: "/leadership/JEPR.png",
      tier: "joint",
    },
  ],
  SUBTITLE: "The commanding officers steering DCITC towards innovation",
  LABELS: {
    EXECUTIVE: "Executive Board",
    CHIEF: "Chief Executives",
    JOINT: "Joint Executives",
  },
};

export const DEMO_ACHIEVEMENTS: Achievement[] = [
  {
    year: "2025",
    title: "National Robotics Championship Finalist",
    detail:
      "Ranked in the top 6 teams nationwide with an autonomous line-following bot.",
    image: "/hero.png",
  },
  {
    year: "2024",
    title: "Inter-College Hackathon Champions",
    detail: "Built an AI-powered attendance and analytics system in 24 hours.",
    image: "/hero.png",
  },
  {
    year: "2024",
    title: "Cybersecurity CTF Top 10",
    detail: "Secured a top 10 spot in a national capture-the-flag competition.",
    image: "/hero.png",
  },
];

export const DEMO_BLOG_POSTS = [
  {
    slug: "getting-started-with-dcitc",
    title: "Getting Started with DCITC",
    excerpt: "How to join, what to expect, and how we operate as a tech squad.",
    tag: "Onboarding",
    date: "Nov 2025",
    image: "/hero.png",
    content:
      "This is a demo article explaining how a new member can get started with DCITC. Replace this with real content later.",
  },
  {
    slug: "behind-the-robotics-lab",
    title: "Behind the Robotics Lab",
    excerpt: "A peek into how we prototype bots, from CAD to code.",
    tag: "Robotics",
    date: "Oct 2025",
    image: "/hero.png",
    content:
      "This is a demo article about what happens inside the robotics lab. Replace with stories, photos, and logs of your projects.",
  },
  {
    slug: "defending-the-digital-frontier",
    title: "Defending the Digital Frontier",
    excerpt: "What our Cyber Security team practices to stay ahead of threats.",
    tag: "Cyber Security",
    date: "Sep 2025",
    image: "/hero.png",
    content:
      "This is a demo article describing the cybersecurity mindset of the club. Swap this text for real write-ups later.",
  },
];

import { useState } from "react";

const categories = [
  {
    label: "Core",
    techs: [
      { name: "HTML5",        dot: "bg-orange-500",  glow: "hover:shadow-orange-500/20", border: "hover:border-orange-400/40", bg: "hover:bg-orange-50"  },
      { name: "CSS3",         dot: "bg-blue-500",    glow: "hover:shadow-blue-500/20",   border: "hover:border-blue-400/40",   bg: "hover:bg-blue-50"    },
      { name: "JavaScript",   dot: "bg-yellow-400",  glow: "hover:shadow-yellow-400/20", border: "hover:border-yellow-400/40", bg: "hover:bg-yellow-50"  },
      { name: "TypeScript",   dot: "bg-blue-600",    glow: "hover:shadow-blue-600/20",   border: "hover:border-blue-500/40",   bg: "hover:bg-blue-50"    },
    ],
  },
  {
    label: "Frameworks",
    techs: [
      { name: "React",        dot: "bg-cyan-500",    glow: "hover:shadow-cyan-500/20",   border: "hover:border-cyan-400/40",   bg: "hover:bg-cyan-50"    },
      { name: "Next.js",      dot: "bg-zinc-900",    glow: "hover:shadow-zinc-400/20",   border: "hover:border-zinc-400/40",   bg: "hover:bg-zinc-100"   },
      { name: "Redux",        dot: "bg-purple-500",  glow: "hover:shadow-purple-500/20", border: "hover:border-purple-400/40", bg: "hover:bg-purple-50"  },
    ],
  },
  {
    label: "Styling",
    techs: [
      { name: "Tailwind CSS", dot: "bg-sky-500",     glow: "hover:shadow-sky-500/20",    border: "hover:border-sky-400/40",    bg: "hover:bg-sky-50"     },
      { name: "SCSS",         dot: "bg-pink-500",    glow: "hover:shadow-pink-500/20",   border: "hover:border-pink-400/40",   bg: "hover:bg-pink-50"    },
      { name: "Framer Motion",dot: "bg-violet-500",  glow: "hover:shadow-violet-500/20", border: "hover:border-violet-400/40", bg: "hover:bg-violet-50"  },
    ],
  },
  {
    label: "Tools",
    techs: [
      { name: "Git",          dot: "bg-red-500",     glow: "hover:shadow-red-500/20",    border: "hover:border-red-400/40",    bg: "hover:bg-red-50"     },
      { name: "Figma",        dot: "bg-violet-500",  glow: "hover:shadow-violet-500/20", border: "hover:border-violet-400/40", bg: "hover:bg-violet-50"  },
      { name: "VS Code",      dot: "bg-blue-500",    glow: "hover:shadow-blue-500/20",   border: "hover:border-blue-400/40",   bg: "hover:bg-blue-50"    },
      { name: "Vercel",       dot: "bg-zinc-900",    glow: "hover:shadow-zinc-400/20",   border: "hover:border-zinc-400/40",   bg: "hover:bg-zinc-100"   },
    ],
  },
];

const filters = ["all", "core", "frameworks", "styling", "tools"];

export default function TechStack() {
  const [active, setActive] = useState("all");

  const visible =
    active === "all"
      ? categories
      : categories.filter((c) => c.label.toLowerCase() === active);

  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-24">

      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-[11px] tracking-[0.3em] text-zinc-400 uppercase mb-4">
          Frontend Developer
        </p>
        <h2 className="text-5xl font-light text-zinc-900 tracking-tight">
          Tech Stack
        </h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-1 mb-14 p-1 rounded-full border border-zinc-200 bg-zinc-50">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 py-1.5 rounded-full text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer ${
              active === f
                ? "bg-zinc-900 text-white font-medium"
                : "text-zinc-400 hover:text-zinc-700"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Category Groups */}
      <div className="flex flex-col gap-10 w-full max-w-2xl">
        {visible.map((cat) => (
          <div key={cat.label}>
            <p className="text-[10px] tracking-[0.3em] text-zinc-400 uppercase mb-4 text-center">
              {cat.label}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {cat.techs.map((tech) => (
                <div
                  key={tech.name}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-full border
                    border-zinc-200 bg-white
                    shadow-sm transition-all duration-300 cursor-default
                    ${tech.glow} ${tech.border} ${tech.bg}
                  `}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${tech.dot}`} />
                  <span className="text-sm text-zinc-500 transition-colors duration-300 hover:text-zinc-900">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Total count */}
      <p className="mt-16 text-[11px] text-zinc-300 tracking-widest">
        {visible.reduce((acc, cat) => acc + cat.techs.length, 0)} technologies
      </p>
    </section>
  );
}
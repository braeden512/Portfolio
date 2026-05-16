export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  awardTag?: string;
  type: "demo" | "research";
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
    paper?: string;
  };
  featured: boolean;
  year: string;
  screenshots: string[];
}

export const projects: Project[] = [
  {
    slug: "genoscript",
    title: "GenoScript",
    description:
      "A pharmacogenomic decision support tool for personalized medicine.",
    longDescription: `GenoScript is a web application designed to help healthcare providers make informed decisions about drug prescriptions based on a patient's genetic profile. By analyzing pharmacogenomic data, GenoScript provides insights into how a patient might metabolize certain medications, allowing for personalized treatment plans that minimize adverse drug reactions and maximize efficacy.`,
    awardTag: "Best Use of AI @ VandyHacks",
    type: "demo",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Gemini API", "React"],
    links: {
      demo: "https://vercel-deploy-eight-sigma.vercel.app/",
      github: "https://github.com/fenrear55/GenoScript",
    },
    featured: true,
    year: "2026",
    screenshots: [
      "/projects/genoscript-1.png",
      "/projects/genoscript-2.png",
      "/projects/genoscript-3.png",
    ],
  },
  {
    slug: "repright",
    title: "RepRight",
    description:
      "A computer vision exercise form analyzer that provides real-time feedback.",
    longDescription: `RepRight uses computer vision technology to analyze exercise form in real-time, providing instant feedback to help users improve their technique and avoid injury. The system utilizes a combination of pose estimation and machine learning models trained on a large dataset of exercise videos to identify common form issues and offer corrective suggestions. Users can connect their webcam to the RepRight web app, and receive instant feedback on their form. The platform also tracks progress over time, allowing users to see improvements and set goals for their fitness journey.`,
    type: "demo",
    technologies: ["React", "C# / .NET", "MySQL", "TensorFlow", "PoseNet"],
    links: {
      github: "https://github.com/EliabW/RepRight",
    },
    featured: true,
    year: "2025",
    screenshots: [
      "/projects/repright-1.png",
      "/projects/repright-2.png",
      "/projects/repright-3.png",
    ],
  },
  {
    slug: "truebalance",
    title: "TrueBalance",
    description:
      "A financial tracking web application to help users manage their money effectively.",
    longDescription: `TrueBalance helps users take control of their finances with intuitive tracking and personalized insights. Users can enter their income and expenses, and categorize transactions. The platform provides visualizations like pie charts and line graphs to help users understand their spending habits. Additionally, TrueBalance uses AI to analyze transaction data and offer insights on how to save money, optimize spending, and achieve financial goals. TrueBalance empowers users to make informed financial decisions and improve their financial health.`,
    type: "demo",
    technologies: ["React", "Node.js", "OpenAI API", "Chart.js", "MySQL"],
    links: {
      github: "https://github.com/braeden512/TrueBalance",
    },
    featured: false,
    year: "2025",
    screenshots: [
      "/projects/truebalance-1.png",
      "/projects/truebalance-2.png",
      "/projects/truebalance-3.png",
    ],
  },
  {
    slug: "temporal-logic-reward-shaping-comparison",
    title:
      "Comparing Temporal Logic Reward Shaping Approaches in Reinforcement Learning",
    description:
      "Research on dense and sparse reward shaping techniques for temporal logic specifications in reinforcement learning.",
    longDescription: `Temporal logic specifications are increasingly used to provide safety and task 
guarantees for reinforcement learning agents, yet most existing approaches assume 
infinite-horizon objectives. We empirically compare infinite-horizon automaton-based 
methods (LTL) with finite-horizon robustness-based formulations (TLTL) across three 
MiniGrid benchmark environments of increasing complexity, evaluating specification 
satisfaction probability, mean time to satisfaction, and sample efficiency across 30 
independent runs.`,
    type: "research",
    technologies: ["Python", "MiniGrid", "Gymnasium", "PPO"],
    links: {
      paper:
        "https://github.com/braeden512/temporal-logic-reward-shaping-comparison/blob/main/docs/final_paper.pdf",
      github:
        "https://github.com/braeden512/temporal-logic-reward-shaping-comparison",
    },
    featured: false,
    year: "2026",
    screenshots: ["/projects/ltl-1.png"],
  },
  {
    slug: "prompt-abstention-eval",
    title:
      "LLM Abstention Study: Prompt Style Effects in Passage-Grounded Generation",
    description:
      "Research on the impact of prompt style on LLM abstention behavior in passage-grounded generation.",
    longDescription: `Large Language Models (LLMs) frequently generate confident but unsupported responses 
when confronted with questions they cannot answer, a phenomenon known as 
hallucination. Abstention, or the ability of a model to decline answering when sufficient 
evidence is unavailable, has been proposed as a mitigation strategy, but the mechanisms 
that drive reliable abstention behavior remain poorly understood. This study investigates 
whether explicit abstention instruction in a passage-grounded prompt is necessary for 
calibrated refusal behavior, or whether constraining a model to a provided passage is 
sufficient. Using LLaMA 3 8B Instruct on the SQuAD2.0 validation split, we compare two 
prompt configurations: an explicit condition that scripts a precise refusal phrase when the 
passage is insufficient, and an implicit condition that instructs the model to use only the 
passage without prescribing refusal language. Both conditions receive identical passage
question pairs drawn from SQuAD2.0, with 500 answerable and 500 unanswerable 
questions per condition.`,
    type: "research",
    technologies: ["Python", "Ollama LLaMA 3", "SQuAD2.0", "HuggingFace"],
    links: {
      paper:
        "https://github.com/braeden512/prompt-abstention-eval/blob/main/docs/paper.pdf",
      github: "https://github.com/braeden512/prompt-abstention-eval",
    },
    featured: false,
    year: "2026",
    screenshots: ["/projects/prompt-1.png"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByType(type: "demo" | "research"): Project[] {
  return projects.filter((p) => p.type === type);
}

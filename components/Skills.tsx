"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  {
    title: "Expertise",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Redux",
      "Express",
      "NestJS",
      "Prisma",
      "Mongoose",
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "SASS",
      "Tailwind CSS",
      "Bootstrap",
      "DaisyUI",
      "Ant Design",
      "Material UI",
    ],
  },
  {
    title: "Comfortable With",
    items: [
      "Stripe Integration",
      "bKash",
      "Nagad",
      "SSLCommerz",
      "WordPress Customization",
    ],
  },
  {
    title: "Familiar With",
    items: [
      "Redis",
      "React Native",
      "AWS",
      "Docker",
      "Socket.IO",
    ],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "Git Bash",
      "GitLab",
      "Swagger",
      "VS Code",
      "Heroku",
      "Vercel",
      "Railway",
      "Render",
      "NoSQL Booster",
      "Netlify",
      "Chrome DevTools",
      "Figma",
      "Stack Overflow",
    ],
  },
];

export default function SkillCard() {
  return (
    <section id="skills" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Skills
        </h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-1">
        {skills.map((skillGroup, index) => (
          <Card
            key={index}
            className="w-full border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="p-4">
              <CardTitle className="text-lg font-semibold">
                {skillGroup.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2 p-4">
              {skillGroup.items.map((item, idx) => (
                <Badge key={idx}>{item}</Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin } from "lucide-react";
import { ModeToggle } from "./ui/toggle-mode";
import useActiveSection from "@/hooks/useActiveSection";
import Image from "next/image";
import ProfileImage from './istiak hasan.jpg'
type NavItem = {
  name: string;
  href: string;
};

export default function Nav() {
  const activeSection = useActiveSection([
    "skills",
    "experience",
    "projects",
    "education",
    "certifications",
    "contact",
  ]);

  const navItems: NavItem[] = [
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const getNavItemClasses = (href: string) => {
    const isActive = activeSection === href.substring(1);

    return {
      linkClass: isActive ? "active" : "",
      indicatorClass: `nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all ${
        isActive
          ? "active w-16 bg-foreground h-2"
          : "group-hover:w-16 group-hover:bg-foreground group-hover:h-px"
      }`,
      textClass: `nav-text text-xs font-bold uppercase tracking-widest ${
        isActive
          ? "text-foreground"
          : "text-slate-500 group-hover:text-foreground"
      }`,
    };
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-12 flex flex-col lg:gap-4">
      <div className="flex flex-col gap-2 lg:pr-24 mt-6 lg:mt-0">
        <div className="w-full flex lg:items-center lg:justify-start">
          <Avatar className="w-24 lg:w-36 h-auto border-2 border-primary bg-secondary">
            <Image src={ProfileImage} alt="" />
  
          </Avatar>
        </div>
        <h1 className="text-[32px] font-bold lg:text-start">
          Hi, I&#39;m Istiak 👋
        </h1>
        <h2 className="text-xl lg:text-start">
          Full Stack Developer
        </h2>
        <div className="text-md lg:text-start text-muted-foreground space-y-2">
          <p>
            Expert in building full-stack web apps using Next.js, React, TypeScript, Node.js, NestJS, Prisma, and Mongoose.
          </p>
          <p>
            Skilled with modern CSS frameworks (Tailwind, SASS, Bootstrap, Material UI) and payment gateway integration.
          </p>
          <p>
            Experienced with Redis, AWS, Docker, and real-time systems using Socket.IO.
          </p>
        </div>
      </div>

      <nav className="lg:flex hidden">
        <ul className="flex flex-col w-max text-start gap-3 uppercase text-xs font-medium">
          {navItems.map((item: NavItem) => {
            const { linkClass, indicatorClass, textClass } = getNavItemClasses(item.href);
            return (
              <li key={item.name} className="group">
                <a href={item.href} className={`py-3 ${linkClass}`}>
                  <span className={indicatorClass}></span>
                  <span className={textClass}>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <ul className="flex flex-row gap-6 mt-6 lg:mt-0">
        <Button variant="outline" size="icon">
          <a
            href="https://github.com/istiakhasan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
        <Button variant="outline" size="icon">
          <a
            href="https://www.linkedin.com/in/istiak-hasan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
        <ModeToggle />
      </ul>
    </header>
  );
}

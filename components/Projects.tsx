/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";
import SpartSprit from './spark-spirit.png'
import DartRoom from './darkroom.png'
import GrandAuto from './grand-auto.png'
const jobProjects = [
  {
    imagePath: SpartSprit,
    title: "spark-spirit-shop-(e-commerce-website)",
    description:
      "Spark Spirit Shop is a responsive eCommerce platform offering personalized accounts, secure payment options, and product reviews. Built with Next.js, TypeScript, Redux RTK Query, Material UI, Express, Mongoose, and Swagger, the site provides a seamless shopping experience across all devices",
    skills: [
      "Product Design",
      "UI/UX Design",
      "Design System",
      "Design Strategy",
      "Next Js",
      "Express",
      "Mongoose",
      "Vercel",
      "Figma",
    ],
    link: "https://spark-spirit-shop.vercel.app/",
  },
  {
    imagePath: DartRoom,
    title: "Darkroom Imagery",
    description:
      "A sleek and intuitive interface that allows users to effortlessly browse through various services and seamlessly book them with just a few clicks. \n ->Development of an interactive dashboard for service providers to efficiently manage bookings, and update service availability and enhanced customer satisfaction\n -> Integration of a review and rating system that allows users to provide feedback on services.\n->Custom authentication system , Booking Schedule,Profile Management ,Role based dashboard for super admin , admin and users.",
    skills: [
      "Product Design",
      "UI/UX Design",
      "Design System",
      "Design Strategy",
      "Vercel",
      "Figma",
    ],
    link: "https://darkroom-imagery-frontend.vercel.app/",
  },
  {
    imagePath:GrandAuto,
    title: "GRAND-AUTO",
    description:
      "->Lead the full cycle of research, design , development, etc . \n ->Full stack website using react ,nodejs,  express js and mongodb database .\n->Firebase authentication system and jwt based authorization .\n->Mobile ,desktop and notepad  responsive website.\n->Dynamic stripe payment gateway system",
    skills: [
      "Product Design",
      "UI/UX Design",
      "Design System",
      "Design Strategy",
      "Vercel",
      "Figma",
    ],
    link: "https://grandauto-da398.web.app/",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  className="bg-[#141414] h-[100px] mt-2 border border-muted-foreground rounded-[0.5rem]"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-primary font-bold">
                  {project.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
    </section>
  );
}

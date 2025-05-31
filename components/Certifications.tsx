"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const certifications = [
  {
    title: "Apollo Level Two Web Dev",
    institution: "Programming Hero By Jhankar Mahbub",
    date: "April 2023 - October 2023",
  },
  {
    title: "Web Development",
    institution: "Programming Hero By Jhankar Mahbub",
    date: "January 2022 - June 2022",
  },
  {
    title: "Mobile Game & Application",
    institution: "Information Communications Technology (ICT)",
    date: "May 2018 - November 2018",
  },
  {
    title: "Responsive Web Design",
    institution: "Coders Trust Bangladesh",
    date: "April 2017 - September 2017",
  },
];

export default function CertificationCard() {
  return (
    <section id="certifications" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Certifications
        </h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {certifications.map((cert, index) => (
          <Card
            key={index}
            className="w-full border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="p-4">
              <CardTitle className="text-lg font-semibold">{cert.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{cert.institution}</p>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground">{cert.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

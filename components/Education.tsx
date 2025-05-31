"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Uttara University (UU)",
    location: "Dhaka, Bangladesh",
    session: "2016 – 2020 ",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Govt Ashikh Mahmud Collage",
    location: "Jamalpur, Bangladesh",
    session: "2014 – 2015",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Sharifpur High School",
    location: "Jamalpur, Bangladesh",
    session: "2012 – 2013",
  },
];

export default function EducationCard() {
  return (
    <section id="education" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Education
        </h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {education.map((edu, index) => (
          <Card
            key={index}
            className="w-full border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="p-4">
              <CardTitle className="text-lg font-semibold">{edu.degree}</CardTitle>
              <p className="text-sm text-muted-foreground">{edu.institution}</p>
              <p className="text-sm text-muted-foreground">{edu.location}</p>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground">{edu.session}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

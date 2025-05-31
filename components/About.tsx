"use client";
/* eslint-disable */

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
          I am a passionate{" "}
          <span className="text-white">Full Stack Developer</span> experienced in building dynamic and responsive web applications. I specialize in using technologies like{" "}
          <span className="text-white">
            Next.js, React, TypeScript, Node.js, NestJS, Prisma, and Mongoose
          </span>{" "}
          to create seamless user experiences.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          I have professional experience working with{" "}
          <span className="text-white">Ghorer Bazar</span> and{" "}
          <span className="text-white">EXCELIT AI</span>, where I developed full-stack applications, designed RESTful APIs, and optimized database performance using{" "}
          <span className="text-white">PostgreSQL</span> and{" "}
          <span className="text-white">MongoDB</span>. 
          I also completed an internship at{" "}
          <span className="text-white">iBOS (An Akij Company)</span>, gaining hands-on experience in frontend development in an agile environment.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          My expertise extends to integrating secure payment systems like{" "}
          <span className="text-white">Stripe, bKash, Nagad, and SSLCommerz</span>, 
          and I am comfortable working with tools like{" "}
          <span className="text-white">Docker, AWS, Redis, and Socket.IO</span>. 
          I have also developed full-stack projects like{" "}
          <span className="text-white">Spark-Spirit-shop</span> and{" "}
          <span className="text-white">Darkroom-Imagery</span> that showcase my ability to deliver scalable and user-centric solutions.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          I am passionate about learning new technologies, solving real-world problems, and building intuitive digital experiences. 
          My goal is to continue growing as a developer while contributing to impactful and innovative projects.
        </p>
      </div>
    </section>
  );
}

"use client";

export default function Footer() {
  return (
    <section>
      <div className="flex flex-col gap-4 lg:px-6 mt-16">
        <p className="text-sm text-start text-muted-foreground">
          Designed and developed by{" "}
          <a className="text-foreground" href="mailto:istieak.hasan1996@gmail.com">
            Md. Istiak Hasan
          </a>
          , Full Stack Developer based in Motijheel, Dhaka. Skilled in{" "}
          <span className="text-foreground">
            Next.js, React, TypeScript, Redux, NestJS, Express, Prisma, Mongoose
          </span>
          , and experienced with{" "}
          <span className="text-foreground">
            PostgreSQL, MySQL, Firebase, and modern CSS frameworks
          </span>
          . Comfortable with integrating payment systems like{" "}
          <span className="text-foreground">Stripe, bKash, Nagad, and SSLCommerz</span>.
          Familiar with{" "}
          <span className="text-foreground">
            Redis, Docker, AWS, React Native, and real-time communication using Socket.IO
          </span>
          .
          <br />
          Built with{" "}
          <a className="text-foreground" href="https://nextjs.org/">
            Next.js
          </a>
          ,{" "}
          <a className="text-foreground" href="https://tailwindcss.com/">
            Tailwind CSS
          </a>
          , and deployed using{" "}
          <a className="text-foreground" href="https://vercel.com/">
            Vercel
          </a>
          . Coded in{" "}
          <a className="text-foreground" href="https://code.visualstudio.com/">
            Visual Studio Code
          </a>
          .
        </p>
      </div>
    </section>
  );
}

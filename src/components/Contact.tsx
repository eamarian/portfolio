import { forwardRef } from "react";
import Image from "next/image";

const Contact = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section id="contact" className="scroll-mt-[inherit]" ref={ref}>
      <h1>Contact me.</h1>
      <a href="mailto:eamarian@gmail.com">
        <h2>eamarian@gmail.com</h2>
      </a>
      <p>
        Have a question or want to work together? Leave your details and
        I&apos;ll get back to you as soon as possible.
        <br />
        <br />
        Evan Marian
        <br />
        Lakeville, MN
      </p>
      <ul className="flex gap-10">
        {/** Resume */}
        <li>
          <a
            href={"/resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            title="Resume"
          >
            <Image
              src="/resume.svg"
              alt="Resume"
              height={32}
              width={32}
              className="inline-block"
            />
          </a>
        </li>
        {/** GitHub */}
        <li>
          <a
            href={"https://github.com/eamarian"}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <Image
              src={"/github.svg"}
              alt="Github logo"
              height={32}
              width={32}
              className="inline-block"
            />
          </a>
        </li>
        {/** LinkedIn */}
        <li>
          <a
            href={"https://www.linkedin.com/in/evan-marian-032441101"}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <Image
              src={"/linkedin.svg"}
              alt="LinkedIn logo"
              height={32}
              width={32}
              className="inline-block"
            />
          </a>
        </li>
        {/** Goodreads */}
        <li>
          <a
            href={"https://www.goodreads.com/user/show/183196923-evan-marian"}
            target="_blank"
            rel="noopener noreferrer"
            title="Goodreads"
          >
            <Image
              src={"/goodreads.svg"}
              alt="Goodreads logo"
              height={32}
              width={32}
              className="inline-block"
            />
          </a>
        </li>
      </ul>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;

import { forwardRef } from "react";

const Contact = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section id="contact" className="h-dvh scroll-mt-[inherit]" ref={ref}>
      <h1>Contact Me</h1>
      <p>
        Have a question or want to work together? Leave your details and
        I&aposll get back to you as soon as possible.
      </p>
      <form>
        <input name="name" placeholder="Name"></input>
        <input name="email" placeholder="Email" type="email"></input>
        <textarea name="message" placeholder="Message"></textarea>
        <button>Submit</button>
      </form>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;

import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero} aria-labelledby="hero-title">
      <div className={classes.image}>
        <Image
          src="/images/site/theo.jfif"
          alt="An image showing Theo"
          width={300}
          height={300}
        />
      </div>
      <h1 id="hero-title">Hi, I'm Theo</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        React.
      </p>
    </section>
  );
}

export default Hero;

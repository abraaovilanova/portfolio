import "./HomeHero.css";
import img from "./images/illustration-hero-main.webp";
import img2 from "./images/hero.png";
function HomeHero() {
  return (
    <section className="home-hero">
      <div className="hero-text-container">
        <h2 className="home-hero-main-txt">Hi, my name is <span style={{color: "#a9ff03"}}>Abraão</span></h2>
        <h3 className="home-hero-second-txt">
          I'm a <span style={{color: "#c58fff"}}>front-end developer</span> who builds and design web and mobile
          applications.
        </h3>
        <p className="home-hero-text">
          Check out <a href="#">what I've doing</a>, find me on{" "}
          <a href="https://github.com/abraaovilanova" target="_blank">
            GitHub
          </a>
          ,{" "}
          <a href="https://twitter.com/gibiruei" target="_blank">
            Twitter
          </a>
          , or on{" "}
          <a
            href="https://www.linkedin.com/in/abraao-vila-nova-ab3333a4/"
            target="_blank"
          >
            linkedin
          </a>{" "}
          or just
          <a href="#contact"> send me a email</a> saying hi.
        </p>
      </div>
      <div className="hero-img-container">
        <img className="hero-img" src={img} />
      </div>
    </section>
  );
}

export default HomeHero;

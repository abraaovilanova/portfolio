import { useState } from "react";
import { send } from "emailjs-com";
import "./App.css";

import NavBar from "./components/NavBar";
import HomeHero from "./components/HomeHero/HomeHero";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import Accordion from "./components/Accordion/Accordion";

import img from "./icon-matt.svg";
import img2 from "./icon-custom-assisted-matching.svg";

function App() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSendMessage(e) {
    const toSend = {
      from_name: name,
      to_name: "Abe",
      company,
      email,
      phone,
      message,
    };
    e.preventDefault();
    send("service_b87r36j", "template_q5wvh8h", toSend, "SeQxpIvEFmR2GsPcv")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  }

  function handleTelefone(event) {
    const regex = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;
    var str = event.replace(/[^0-9]/g, "").slice(0, 11);

    const result = str.replace(regex, "( $1 ) $2-$3");

    return result;
  }

  return (
    <div className="App">
      <NavBar />
      <main>
        <HomeHero />
        <section className="text-section" id="about">
          <SectionTitle title="About" />
          <div className="section-main-info">
            <div className="section-img">
              <img src={img} />
            </div>
            <div className="section-main-txt">
              <p style={{ color: "#abb8c3", wordSpacing: "8px" }}>
                As a Frontend Developer, I specialize in React and React Native,
                and I have extensive experience working with complementary
                libraries such as Redux and React Router. Additionally, I
                possess strong skills in backend development using Python
                (Tornado) and JavaScript (Node). My expertise extends beyond
                development, as I am also experienced in testing tools, CI/CD,
                and containerization (Docker).{" "}
              </p>

              <p style={{ color: "#abb8c3", wordSpacing: "8px" }}>
                In addition to my web development skills, I hold a PhD in which
                I utilized Python for data analysis and computer vision
                research, utilizing tools such as Scikit-learn, TensorFlow, and
                OpenCV. I am passionate about utilizing my skills to create
                efficient and effective solutions for clients, and I am always
                eager to learn and grow as a developer.
              </p>
            </div>
          </div>

          {/* <div className="list-section">
            <div>
              <SectionTitle title="Experience" />
              <ul>
                <li>
                  Maxtrack
                  <Accordion title="fullStack develop">
                    <ul>
                      <li>Docker</li>
                      <li>GitHub</li>
                      <li>MongoDB</li>
                      <li>Redis</li>
                      <li>API REST</li>
                      <li>GitLab</li>
                      <li>GitFlow</li>
                      <li>React</li>
                      <li>PythonCompetências</li>
                    </ul>
                  </Accordion>
                  <Accordion title="front-end develop">
                    <ul>Fullstack developer</ul>
                    <ul>Front-end developer</ul>
                  </Accordion>
                </li>
                <li>
                  FoodsGo
                  <Accordion title="front-end develop">
                    <ul>Fullstack developer</ul>
                    <ul>Front-end developer</ul>
                  </Accordion>
                </li>
              </ul>
            </div>
            <div>
              <SectionTitle title="Education" />
              <Accordion title="fullStack develop">
              <ul>
                <li>Bachelor's Degree in Civil Engineering</li>
                <li>Master Degree</li>
                <li>Tecnical</li>
              </ul>
            </Accordion>
     
            </div>
          </div> */}
        </section>
        {/* <section>
          <h2>Skills</h2>
          <h3>Programer languages</h3>
          <ul>
            <li>JavaScript</li>
            <li>Python</li>
          </ul>

          <h3>Web development frameworks</h3>
          <ul>
            <li>React</li>
            <li>Node / Express</li>
            <li>Python Tornado</li>
            <li>Python Flask</li>
          </ul>
          <h3>languages</h3>
          <li>English</li>
          <li>French</li>
          <li>Italian</li>
          <li>Português</li>
        </section> */}

        <div className="contact-section" id="contact">
          <SectionTitle title="Contact" />
          <div className="contact-container">
            <div className="input-container">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className={`text-input ${name ? "filled" : ""}`}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Company"
                  className={`text-input ${company ? "filled" : ""}`}
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className={`text-input ${email ? "filled" : ""}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="phone"
                  placeholder="Phone"
                  className={`text-input ${phone ? "filled" : ""}`}
                  value={phone}
                  onChange={(e) => setPhone(handleTelefone(e.target.value))}
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  className={`text-area ${message ? "filled" : ""}`}
                  rows="15"
                  cols="60"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                onClick={(e) => handleSendMessage(e)}
                className="main-btn"
              >
                Send message
              </button>
            </div>
            <div className="section-img">
              <img src={img2} alt="contact-img" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

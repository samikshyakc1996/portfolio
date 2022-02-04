import React, { Component } from "react";
import portrait from "../img/image.jpg";
class Info extends Component {
  render() {
    return (
      <main>
        <article>
          <h1>Intro</h1>
          <img src={portrait} alt="Sam image" />

          <section id="about">
            <h2>About</h2>
            <div className="circle">
              <p>Samikshya KC. </p>
              <p>
                She is a front-end web developer, currently studying a Web
                design and development course at Humber.
              </p>
              <p>
                She has a Software engineer degree and a Project Management-IT
                degree as well.
              </p>
              <p>
                In addition to that She has done numerous other courses to
                enhance her skill such as: Shecodes, Udemy courses,
                Javascript30.
              </p>
            </div>
          </section>

          <section id="get-in-touch">
            <h2>Get In Touch</h2>

            <ul className="social-media-links">
              <li>
                <i className="fab fa-linkedin"></i>
                <a href="#"> </a>
              </li>

              <li>
                <a href="#">
                  {" "}
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/samikshyakc1996">
                  {" "}
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/kc_samikshya" target={"_blank"}>
                  {/* {"Twitter "} */}
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </section>
          <section className="project-section">
            <h2>Projects</h2>
          </section>
        </article>
      </main>
    );
  }
}

export default Info;

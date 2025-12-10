import { useState, useEffect } from "react";
import "./App.css";
import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");

      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-logo">FerdinandDev</div>

        {/* Mobile Menu Button */}
        <div
          className={`menu-btn ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu */}
        <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#home")
                ?.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
          >
            Home
          </a>

          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
          >
            About
          </a>

          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
          >
            Contact
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-left">
          <h1>
            Hi, I'm <span>Ferdinand</span> 👋
          </h1>

          <h2></h2>

          <p>
            A highly motivated Information Systems fresh graduate with strong
            analytical capability and a proven record of driving insights,
            improving workflows, and supporting high-impact decisions.
            Experienced in sales reporting, performance analysis, and
            operational support across multi-branch environments. Skilled in
            developing digital solutions, coordinating across teams, and
            enhancing systems and marketing initiatives. Consistently delivers
            efficient processes, clear data insights, and meaningful
            improvements in both corporate and project-based settings
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-outline">
              View Projects
            </a>
            <a
              href="https://www.linkedin.com/in/ferdinandsitorus/"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./linkedin.webp" // ganti sesuai lokasi file
                alt="LinkedIn"
                className="linkedin-icon"
              />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-right">
          <img src="./me.jpg" alt="Profile" className="hero-img" />
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-container">
          {/* Foto */}
          <div className="about-photo fade-element">
            <img
              src="./about.jpg" // path ke gambar
              alt="About Me"
              className="photo"
            />
          </div>

          {/* Konten */}
          <div className="about-content">
            <h2 className="about-title">About Me</h2>
            <p className="about-text">
              Hi! I'm Ferdinand Jery Wilkinson Sitorus, a passionate Web
              Developer and Data Enthusiast who loves turning ideas into
              interactive, user-friendly digital experiences. I enjoy building
              responsive websites and web applications that are not only
              visually appealing, but also functional and efficient.
              <br />
              <br />I have experience working with modern technologies like
              HTML, CSS, JavaScript, and React, and I’m constantly exploring new
              tools and frameworks to improve my skills. I’m highly interested
              in data analytics and enjoy transforming complex data into clear,
              meaningful insights that help drive better decisions. 🚀
            </p>

            {/* SKILLS */}
            <div className="about-cards">
              <div className="card fade-element">
                <h3>Skills</h3>
                <div className="skills-columns">
                  <ul className="skills-list">
                    <li>
                      <img src="html.png" alt="HTML" className="skill-icon" />
                      HTML
                    </li>
                    <li>
                      <img src="css3.png" alt="CSS" className="skill-icon" />
                      CSS
                    </li>
                    <li>
                      <img
                        src="js.png"
                        alt="JavaScript"
                        className="skill-icon"
                      />
                      JavaScript
                    </li>
                  </ul>
                  <ul className="skills-list">
                    <li>
                      <img src="react.png" alt="React" className="skill-icon" />
                      React
                    </li>
                    <li>
                      <img src="excel.png" alt="Excel" className="skill-icon" />
                      Ms. Excel
                    </li>
                    <li>
                      <img
                        src="sql-server.png"
                        alt="SQL"
                        className="skill-icon"
                      />
                      SQL
                    </li>
                  </ul>
                </div>
              </div>

              {/* Experience */}
              <div className="card fade-element">
                <h3>Experience</h3>
                <ul className="experience-list">
                  <li className="experience-item">
                    <img
                      src="nsslogo.png"
                      alt="Perusahaan 1"
                      className="company-icon"
                    />
                    <div>
                      <strong>Nusantara Sakti Group</strong> Data Control
                      Analyst
                    </div>
                  </li>
                  <li className="experience-item">
                    <img
                      src="cbn.png"
                      alt="Perusahaan 2"
                      className="company-icon"
                    />
                    <div>
                      <strong>PT Cyberindo Aditama</strong> Front-End Developer
                      - Internship
                    </div>
                  </li>
                </ul>
              </div>

              {/* Certification*/}
              <div className="card fade-element">
                <h3>Certification</h3>
                <div className="certificates-horizontal">
                  <div className="cert-item">
                    <a
                      href="Sertifikat kelulusan dicoding.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-link"
                    >
                      <img
                        src="dicoding.jpeg"
                        alt="PDF Icon"
                        className="pdf-icon"
                      />{" "}
                      Dicoding Indonesia - Front-end dan Back-End
                    </a>
                  </div>
                  <div className="cert-item">
                    <a
                      href="growiacert.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-link"
                    >
                      <img
                        src="./growia.png"
                        alt="PDF Icon"
                        className="pdf-icon"
                      />
                      Growia Education - Data Analyst
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="CV - Ferdinand Sitorus.pdf"
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>VIEW CURRICULUM VITAE</strong>
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects" id="projects">
        {/* MODAL PROJECT */}
        {selectedProject && (
          <div className="modal" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={selectedProject.img} alt="" />
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.desc}</p>
              <button onClick={() => setSelectedProject(null)}>Close</button>
            </div>
          </div>
        )}
        <h2 className="projects-title">My Projects</h2>

        <div className="projects-grid">
          {[
            {
              title: "Portfolio Website",
              tech: "React + Tailwind",
              img: "profile (1).png",
              desc: "Personal portfolio website with modern animations and responsive design.",
            },
            {
              title: "Comingsoon",
              tech: "HTML, CSS, JS",
              img: "comingsoon.png",
              desc: "High converting landing page with smooth scrolling and animations.",
            },
            {
              title: "Comingsoon",
              tech: "React + API",
              img: "comingsoon.png",
              desc: "Interactive dashboard with dynamic charts and real-time API data.",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="project-box slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-img">
                <img src={project.img} alt={project.title} />
              </div>

              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.tech}</p>
                <span className="project-btn">View</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* CONTACT */}
      <section className="contact" id="contact">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtitle">
          Have a project in mind? Let’s talk 📩
        </p>

        <div className="contact-wrap">
          {/* LEFT - Social */}
          <div className="contact-left">
            <div className="contact-grid">
              <a href="mailto:emailkamu@gmail.com" className="contact-card">
                <FaEnvelope className="contact-icon" />
                <span>Email</span>
              </a>

              <a
                href="https://www.linkedin.com/in/ferdinandsitorus/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <FaLinkedin className="contact-icon" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://www.instagram.com/ferdinandjws/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <FaInstagram className="contact-icon" />
                <span>Instagram</span>
              </a>

              <a
                href="https://github.com/usernamekamu"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <FaGithub className="contact-icon" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* RIGHT - Form */}
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Send Message 🚀</button>
          </form>
        </div>
      </section>
    </>
  );
}

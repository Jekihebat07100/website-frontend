import React from "react";

import portofolioImg from "../assets/portofolio.png";
import jerseyImg from "../assets/website jersey.png";
import mobilImg from "../assets/mobil.png";
function Project() {
  const projects = [
    {
      id: 1,
      title: "Web Portfolio Pribadi",
      image: portofolioImg,
      tech: ["React", "Vite", "Bootstrap"],
      description:
        "Website portfolio pribadi dibangun dengan React + Vite. Menampilkan informasi diri, pengalaman, dan proyek-proyek yang telah dibuat.",
    },
    {
      id: 2,
      title: "Website Jersey",
      image: jerseyImg,
      tech: ["React", "CSS", "JavaScript"],
      description:
        "Website penjualan jersey sepak bola dengan tampilan modern, responsif, dan mudah digunakan.",
    },
    {
      id: 3,
      title: "Membuat Game 2D",
      image: mobilImg,
      tech: ["Turbo Warp"],
      description:
        "Game 2D car parking game melewati berbagai rintangan sesuai level.",
    },
  ];

  return (
    <div className="portfolio-project">
      <div className="project-title">
        <span>PORTFOLIO</span>

        <h1>Proyek Saya</h1>

        <p>
          Kumpulan proyek yang telah saya kerjakan selama belajar di sekolah
          
        </p>
      </div>

      <div className="project-showcase">
        {projects.map((project) => (
          <div className="showcase-card" key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <div className="tech-list">
                {project.tech.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-status">
                <span className="status-dot"></span>
                Selesai
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
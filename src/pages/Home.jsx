import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {

  const [count, setCount] = useState(0);

  const handleEdit = (jenis) => {
    alert(`Edit ${jenis}`);
  };

  const handleDelete = (jenis) => {
    alert(`Hapus ${jenis}`);
  };

  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <section className="hero-section">

        <div className="hero-content">

          <p className="hero-tag">
            🚀 Welcome To My Portfolio
          </p>

          <h1>
            Halo, Saya Muhammad<span>Dzaky Syandana</span>
          </h1>

          <h2>
            Frontend Developer & UI Enthusiast
          </h2>

          <p>
            Saya membuat website modern, interaktif,
            responsive, dan aesthetic menggunakan
            React JS serta teknologi frontend terbaru.
          </p>

          {/* BUTTON */}
          <div className="hero-buttons">

            <Link
              to="/project"
              className="btn-hero-primary"
            >
              Lihat Project
            </Link>

            <Link
              to="/about"
              className="btn-hero-secondary"
            >
              About Me
            </Link>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="stats-section">

        <div className="stats-card">
          <h2>3+</h2>
          <p>Project Selesai</p>
        </div>

        <div className="stats-card">
          <h2>2+</h2>
          <p>Tahun Belajar</p>
        </div>

        <div className="stats-card">
          <h2>100%</h2>
          <p>Semangat Coding</p>
        </div>

      </section>


      {/* SKILLS */}
      <section className="skills-section">

        <h2 className="section-title">
          🚀 My Skills
        </h2>

        <div className="skills-wrapper">

          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React JS</span>
          <span>Bootstrap</span>
          <span>Figma</span>
          <span>UI Design</span>

        </div>

      </section>

      {/* COUNTER */}
      <section className="counter-wrapper">

        <div className="counter-card">

          <h2>
            🔥 Counter Latihan
          </h2>

          <div className="counter-number">
            {count}
          </div>

          <p>
            Latihan state management React JS
          </p>

          <div className="counter-buttons">

            <button
              className="counter-add"
              onClick={() => setCount(count + 1)}
            >
              Tambah
            </button>

            <button
              className="counter-reset"
              onClick={() => setCount(0)}
            >
              Reset
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;
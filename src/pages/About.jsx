import profileImg from "../assets/profile.png";

function About() {
  return (
    <div className="about-page">

      <p className="about-small-title">
        PERKENALAN
      </p>

      <h1 className="about-title">
        Tentang Saya
      </h1>

      <div className="about-card">

        <div className="about-profile">

          <img
            src={profileImg}
            alt="Profile"
          />

          <h3>Muhammad Dzaky Syandana</h3>

          <span>Frontend Developer</span>

        </div>

        <div className="about-info">

          <h2>Profil Singkat</h2>

          <p>
            Saya adalah siswa SMK jurusan RPL yang
            sedang mempelajari React JS, JavaScript,
            Bootstrap, dan UI Design.
          </p>

          <div className="info-list">

            <div>
              <strong>Sekolah</strong>
              <p>SMK N 1 Purbalingga</p>
            </div>

            <div>
              <strong>Jurusan</strong>
              <p>Rekayasa Perangkat Lunak</p>
            </div>

            <div>
              <strong>Fokus</strong>
              <p>Frontend Development</p>
            </div>

          </div>

        </div>

      </div>

      <div className="skill-card">

        <h2>Skill Saya</h2>

        <div className="skill-list">

          <span>React JS</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Bootstrap</span>
          <span>Figma</span>
          <span>MySQL</span>

        </div>

      </div>

    </div>
  );
}

export default About;
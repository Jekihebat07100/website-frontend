import { useState } from "react";

function Experience() {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      kategori: "Ekstrakurikuler",
      judul: "KIR(karya ilmiah Remaja)",
      deskripsi:
        "eskul nya seru dan menarik",
    },
    {
      id: 2,
      kategori: "Lomba",
      judul: "BANYUMAS TRAIL RUN",
      deskripsi:
        "Finish urutan 30",
    },
  ]);

  const [kategori, setKategori] = useState("PKL");
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = () => {
    if (!judul || !deskripsi) {
      alert("Lengkapi semua data!");
      return;
    }

    if (editId) {
      setExperiences(
        experiences.map((item) =>
          item.id === editId
            ? {
                ...item,
                kategori,
                judul,
                deskripsi,
              }
            : item
        )
      );

      setEditId(null);
    } else {
      const newData = {
        id: Date.now(),
        kategori,
        judul,
        deskripsi,
      };

      setExperiences([...experiences, newData]);
    }

    setKategori("PKL");
    setJudul("");
    setDeskripsi("");
  };

  const handleEdit = (item) => {
    setKategori(item.kategori);
    setJudul(item.judul);
    setDeskripsi(item.deskripsi);
    setEditId(item.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Yakin ingin menghapus pengalaman ini?"
    );

    if (!confirmDelete) return;

    setExperiences(
      experiences.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="experience-container">

      {/* HEADER */}
      <div className="experience-header">
        <span className="experience-label">
          PERJALANAN
        </span>

        <h1>Experience</h1>
      </div>

      {/* FORM */}
      <div className="experience-form">

        <h3>
          {editId
            ? "✏️ Edit Pengalaman"
            : "+ Tambah Pengalaman Baru"}
        </h3>

        <div className="form-row">

          <div className="form-group">
            <label>Kategori</label>

            <select
              value={kategori}
              onChange={(e) =>
                setKategori(e.target.value)
              }
            >
              <option>PKL</option>
              <option>Freelance</option>
              <option>Lomba</option>
              <option>Ekstrakurikuler</option>
              <option>Organisasi</option>
            </select>
          </div>

          <div className="form-group">
            <label>Judul Pengalaman</label>

            <input
              type="text"
              placeholder="Contoh: PKL di PT XYZ"
              value={judul}
              onChange={(e) =>
                setJudul(e.target.value)
              }
            />
          </div>

        </div>

        <div className="form-group">
          <label>Deskripsi</label>

          <textarea
            rows="4"
            placeholder="Ceritakan pengalaman kamu..."
            value={deskripsi}
            onChange={(e) =>
              setDeskripsi(e.target.value)
            }
          ></textarea>
        </div>

        <button
          className="experience-submit"
          onClick={handleSubmit}
        >
          {editId
            ? "💾 Simpan Perubahan"
            : "➕ Tambahkan ke Portfolio"}
        </button>

      </div>

      {/* GRID EXPERIENCE */}
      <div className="experience-grid">

        {experiences.map((item) => (
          <div
            className="experience-card"
            key={item.id}
          >

            <span className="experience-badge">
              {item.kategori}
            </span>

            <h3>{item.judul}</h3>

            <p>{item.deskripsi}</p>

            <div className="experience-actions">

              <button
                className="btn-edit"
                onClick={() =>
                  handleEdit(item)
                }
              >
                Edit
              </button>

              <button
                className="btn-delete"
                onClick={() =>
                  handleDelete(item.id)
                }
              >
                Hapus
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Experience;

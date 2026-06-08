function ExperienceCard({ judul, jenis, onDelete, onEdit }) {
  return (
    <div className="card p-3 mt-3">
      <h4>{judul}</h4>
      <p><strong>Jenis:</strong> {jenis}</p>

      <button 
        className="btn btn-outline-primary btn-sm me-2"
        onClick={onEdit}
      >
        Edit
      </button>

      <button 
        className="btn btn-outline-danger btn-sm"
        onClick={onDelete}
      >
        Hapus
      </button>
    </div>
  );
}

export default ExperienceCard;
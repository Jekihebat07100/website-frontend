function ExperienceCard({ judul, jenis, onDelete, onEdit }) {
  return (
    <div className="card">
      <h3>{judul}</h3>
      <p><strong>Jenis:</strong> {jenis}</p>

      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Hapus</button>
    </div>
  );
}

export default ExperienceCard;
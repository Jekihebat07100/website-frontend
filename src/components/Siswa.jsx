const handleSubmit = () => {
  if (editIndex !== null) {
    // UPDATE DATA
    const newData = [...dataSiswa];
    newData[editIndex] = { nama, kelas };
    setDataSiswa(newData);
    setEditIndex(null);
  } else {
    // CEK MAKSIMAL 5 DATA
    if (dataSiswa.length >= 5) {
      alert("Data siswa maksimal 5!");
      return;
    }

    // TAMBAH DATA
    setDataSiswa([...dataSiswa, { nama, kelas }]);
  }

  setNama("");
  setKelas("");
};
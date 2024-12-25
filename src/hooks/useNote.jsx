import { useEffect, useState } from "react";
import useGlobalState from "./useGlobalState";
import Swal from "sweetalert2";

export default function useNote() {
  const { state, dispatch } = useGlobalState();
  const { notes, search } = state;
  const { setNotes, setSearch } = dispatch;

  const [data, setData] = useState([]);

  function addNote(title, body) {
    const data = {
      id: Date.now(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    setNotes([...notes, data]);
    Swal.fire({
      title: "Catatan Berhasil Tersimpan!",
      icon: "success"
    })
  }

  function deleteNote(id) {
    Swal.fire({
      title: "Apakah kamu yakin ingin menghapus ???",
      text: "Setelah terhapus, Anda tidak dapat mengembalikan catatan!",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "Iya",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Catatan Berhasil Terhapus",
          icon: "success"
        });
        const filtered = notes.filter((note) => note.id !== id);
        setNotes(filtered);
        
      } else {
        console.log("cancel");
      }
    });
  }

  function toggleStatus(id) {
    const targetIndex = notes.findIndex((note) => note.id === id);
    notes[targetIndex].archived = !notes[targetIndex].archived;
    setNotes([...notes]);
  }

  useEffect(() => {
    setData(notes);
  }, [notes]);

  useEffect(() => {
    if (!search) return setData(notes);
    setData(
      notes.filter((note) =>
        note.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [notes, search]);

  return {
    notes: data,
    setNotes,
    deleteNote,
    toggleStatus,
    addNote,
    search,
    setSearch,
  };
}

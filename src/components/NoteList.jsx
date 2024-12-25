import React from "react";
import useNote from "../hooks/useNote";
import NoteItems from "./NoteItems";

export default function NotesList({ title }) {
  const { notes } = useNote();

  const filteredByStatus = () => {
    const isArchived = title === "Arsip";
    const filtered = notes.filter((note) => note.archived === isArchived);
    return filtered;
  };

  return (
    <section>
      <h2>{title}</h2>
      <div className="notes-list">
        {filteredByStatus().length ? (
          filteredByStatus().map((note) => (
            <NoteItems key={note.id} data={note} />
          ))
        ) : (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        )}
      </div>
    </section>
  );
}

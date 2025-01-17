import useNote from "../hooks/useNote";
import React from 'react';

export default function Header() {
  const { search, setSearch } = useNote();
  return (
    <header className="note-app__header">
      <h1>My Personal Notes</h1>
      <div className="note-search">
        <input
          type="search"
          placeholder="Cari catatan ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </header>
  );
}

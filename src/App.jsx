import React from "react";
import Header from "./components/Header";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList"
import { Provider } from "./hooks/useGlobalState";


const App = () => {
  return (
    <>
      <Provider>
        <Header />
        <main className="note-app__body">
          <NoteInput />
          <NoteList title="Catatan Aktif" />
          <NoteList title="Arsip" />
        </main>
      </Provider>
    </>
  );
};

export default App;

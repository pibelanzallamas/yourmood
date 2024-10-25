import { useEffect, useState } from "react";
import "./styles/app.css";
import { discos } from "./utils/discos";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [respuesta, setRespuesta] = useState(0);
  const [album, setAlbum] = useState({ name: "", link: "" });

  function handleSubmit(e) {
    e.preventDefault();

    let random;
    const DISCOSXMOOD = discos;

    random = Math.floor(Math.random() * DISCOSXMOOD[respuesta].length);
    setAlbum(DISCOSXMOOD[respuesta][random]);
  }

  return (
    <div className="all">
      <Analytics />
      <h1>
        <u>Mood Checker</u>
      </h1>
      <div className="consigna">
        <p> ¿Cómo se encuentra hoy?</p>
        <ol>
          <li>feliz</li>
          <li>triste</li>
          <li>enojado</li>
          <li>miedoso</li>
          <li>ansioso</li>
          <li>aburrido</li>
          <li>eufórico</li>
          <li>calmado</li>
          <li>confundido</li>
          <li>reflexivo</li>
        </ol>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="form">Ingrese una opción:</label>
        <input
          type="number"
          id="form"
          value={respuesta}
          onChange={(e) => setRespuesta(e.target.value)}
          required
          min={1}
          max={10}
        ></input>
        <button>Enviar</button>
      </form>
      {album.link && (
        <div className="video">
          <iframe
            src={album.link}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="frame"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default App;

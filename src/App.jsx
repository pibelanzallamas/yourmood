import { useEffect, useState } from "react";
import "./styles/app.css";
import { discos } from "./utils/discos";

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
      <h1>Mood Checker</h1>
      <br />
      <div className="consigna">
        <p>
          Como se encuentra hoy?:
          <br />
          1. feliz
          <br />
          2. triste
          <br />
          3. enojado
          <br />
          4. miedoso
          <br />
          5. ansioso
          <br />
          6. aburrido
          <br />
          7. extremo
          <br />
          8. calmado
          <br />
          9. confundido
          <br />
          10.pensativo
        </p>
      </div>
      <br />
      <div className="input">
        <label>Ingrese una opción</label>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={respuesta}
            onChange={(e) => setRespuesta(e.target.value)}
            placeholder="Ingrese una opción"
            required
            min={1}
            max={10}
            autoFocus
          ></input>
          <br />
          <br />
          <button>Enviar</button>
        </form>
      </div>
      <br />
      {album.link ? (
        <div className="video">
          <iframe
            width="560"
            height="315"
            src={album.link}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;

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
      <br />
      <div className="consigna">
        <p>
          ¿Cómo se encuentra hoy?
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
          7. eufórico
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
        <label>Ingrese una opción:</label>
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
      {album.link ? (
        <>
          <br />
          <br />
          <div className="video">
            <iframe
              src={`${album.link}?autoplay=1&mute=1`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="frame"
            ></iframe>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;

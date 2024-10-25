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
          <li> 1. feliz</li>
          <li>2. triste</li>
          <li> 3. enojado</li>
          <li> 4. miedoso</li>
          <li>5. ansioso</li>
          <li> 6. aburrido</li>
          <li> 7. eufórico</li>
          <li>8. calmado</li>
          <li>9. confundido</li>
          <li>10.pensativo</li>
        </ol>
      </div>
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

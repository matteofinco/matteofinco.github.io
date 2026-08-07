/* Base reset/fix per la gestione immagini */
img {
  max-width: 100%;
}

/* Griglia editoriale principale */
.editorial-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  width: 100%;
}

/* Wrapper dei media con larghezza full-bleed */
.row-media {
  width: 50vw;
  height: 520px;
  overflow: hidden;
  background: #0d0d0d;
  border: none;
}

/* Sfondamento a sinistra se l'immagine è il primo elemento della riga */
.editorial-row .row-media:first-child {
  margin-left: calc(-50vw + 50%);
}

/* Sfondamento a destra se l'immagine è l'ultimo elemento della riga */
.editorial-row .row-media:last-child {
  margin-right: calc(-50vw + 50%);
  justify-self: end;
}

/* Rendering corretto dell'immagine all'interno del wrapper */
.row-media img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}
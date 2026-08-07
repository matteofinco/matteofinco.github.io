import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';

interface TTableProps {
  heroFit?: 'contain' | 'cover';
}


// ======================================================
// IMAGES
// ======================================================

const IMAGES = {
  hero: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2c9ec8a6b5fd4d90bb36506ce7b89adc",

  solution: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2c9ec8a6b5fd4d90bb36506ce7b89adc",

  research: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2c9ec8a6b5fd4d90bb36506ce7b89adc",

  design: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2c9ec8a6b5fd4d90bb36506ce7b89adc",

  compositeTop: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2c9ec8a6b5fd4d90bb36506ce7b89adc",

  compositeBottomLeft: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2c9ec8a6b5fd4d90bb36506ce7b89adc",

  compositeBottomRight: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2c9ec8a6b5fd4d90bb36506ce7b89adc"
};



// ======================================================
// PROJECT NAVIGATION
// ======================================================

const PROJECTS_LIST = [
  {
    id: "archivia",
    title: "Archivia",
    subtitle: "Pen holder",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fc4e5eae770e146cc9e7245b921f5d11e",
    path: "/archivia"
  },
  {
    id: "pizzamente",
    title: "PizzaMente",
    subtitle: "Academic Workshop",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2e3383ac1e3348f0bc9a80ad0e830913",
    path: "/pizzamente"
  },
  {
    id: "nando",
    title: "Nando",
    subtitle: "Hyperplastic cutlery handle",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F58faeaf495544fe5a8367b24177ac088",
    path: "/nando"
  },
  {
    id: "snake",
    title: "Snake",
    subtitle: "Hockey stickhandling trainer",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F9366df60acf94b0bacc85252a2e3865e",
    path: "/snake"
  },
  {
    id: "wafflemaker",
    title: "Waffle Maker",
    subtitle: "Product analysis",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fedbb2046d3db4d549f4da864fca20382",
    path: "/wafflemaker"
  },
  {
    id: "prop",
    title: "Prop",
    subtitle: "3D Printed Emergency Crutch",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F5ea37818589140f49395200bfbdbbb41",
    path: "/prop"
  },
  {
    id: "ttable",
    title: "T-Table",
    subtitle: "Interactive dining system",
    imageUrl: IMAGES.hero,
    path: "/ttable"
  }
];



// ======================================================
// CONTENT
// ======================================================

const content = {

en: {

title: "T-TABLE",

subtitle:
"Interactive table designed to improve awareness during meals",


meta: {

teamLabel: "Designers",

yearLabel: "Year",

yearVal: "2026",

awardLabel: "Project Type",

awardVal:
"Product Design & Interactive System"

},


overview: {

title: "Overview",

subtitle: "Challenge",

p1:
"The increasing presence of digital screens during meals has contributed to the phenomenon of distracted eating: a behaviour that affects natural satiety perception and weakens memory of the eating experience.",

p2:
"Although touchscreen tables were introduced in restaurants to enhance interaction, they often absorb the user's attention completely, moving focus away from food and social relationships. The challenge was therefore to rethink interactive technology as a discreet tool capable of supporting the meal ritual instead of replacing it."

},


solution: {

title: "Solution",

p1:
"T-Table is a smart dining system developed for fast-food environments, designed to reduce visual overstimulation and restore attention to the act of eating.",

p2:
"The project explores a new relationship between digital interfaces and physical objects, creating a table that adapts its behaviour according to the different phases of the meal.",

p3:
"Before food arrives, the surface becomes an interactive environment for cooperative activities. Once trays and smart placemats are detected, the system automatically reduces interaction and transforms into a calm background."

},


research: {

title: "Research",

p1:
"The research focused on the relationship between digital distraction, eating behaviour and social interaction. Scientific studies showed how continuous screen stimulation can increase consumption while reducing awareness of hunger signals.",

p2:
"Analysing restaurant environments revealed that the problem was not entertainment itself, but its overlap with eating. This led to the definition of a system able to separate play and consumption, activating technology only when it improves the experience."

},


design: {

title: "Design",

p1:
"T-Table translates the principles of Calm Technology into a physical and interactive product language.",

p2:
"The surface combines a tactile material perception with a low-impact digital interface, reducing the visual dominance usually associated with traditional touchscreen products.",

p3:
"Through sensors, smart objects and adaptive feedback, the table creates a balanced interaction between technology, food and social behaviour."

},


technical: {

title: "Technical Insights",

p1:
"The project explored the design of human-machine interactions focused on supporting users rather than capturing their attention.",

p2:
"Combining materials, electronics and behavioural research allowed the development of a more responsible approach to interactive product design."

},


cta: {

title: "What's next?",

subtitle:
"Explore other projects",

button:
"BACK TO PORTFOLIO"

}

},



it: {

title: "T-TABLE",

subtitle:
"Tavolo interattivo progettato per migliorare la consapevolezza durante il pasto",


meta: {

teamLabel: "Designer",

yearLabel: "Anno",

yearVal: "2026",

awardLabel: "Tipologia Progetto",

awardVal:
"Product Design & Sistema Interattivo"

},


overview: {

title: "Overview",

subtitle: "Sfida progettuale",

p1:
"La crescente presenza degli schermi durante i pasti ha contribuito alla diffusione del fenomeno del distracted eating, un comportamento che influenza la percezione della sazietà e riduce la memoria dell'esperienza alimentare.",

p2:
"Nonostante i tavoli touchscreen siano stati introdotti per arricchire l'esperienza nei ristoranti, spesso finiscono per assorbire completamente l'attenzione dell'utente, allontanandolo dal cibo e dalla relazione con gli altri."

},

solution: {

title: "Solution",

p1:
"T-Table è un sistema smart progettato per ambienti fast-food con l'obiettivo di ridurre la sovrastimolazione visiva e riportare attenzione al rito del pasto.",

p2:
"Il progetto sviluppa una nuova relazione tra interfacce digitali e oggetti fisici, creando un tavolo capace di adattarsi alle diverse fasi dell'esperienza.",

p3:
"Prima dell'arrivo del cibo la superficie permette attività interattive cooperative; successivamente riconosce la presenza dei vassoi e riduce automaticamente l'interazione."

},


research: {

title: "Research",

subtitle: "Research",

p1:
"La ricerca ha analizzato il rapporto tra distrazione digitale, comportamento alimentare e interazione sociale.",

p2:
"L'analisi dell'esperienza nella ristorazione ha evidenziato la necessità di separare il momento del gioco da quello del consumo, progettando una tecnologia più discreta e consapevole."

},


design: {

title: "Design",

p1:
"T-Table traduce i principi della Calm Technology in un sistema fisico e digitale equilibrato.",

p2:
"La superficie combina percezione tattile e interazione digitale riducendo l'impatto visivo tipico dei prodotti touchscreen.",

p3:
"Attraverso sensori, oggetti intelligenti e feedback adattivi il tavolo crea un equilibrio tra tecnologia, cibo e comportamento umano."

},


technical: {

title: "Technical Insights",

p1:
"Il progetto ha permesso di approfondire la progettazione di interazioni uomo-macchina orientate al supporto dell'utente.",

p2:
"La combinazione tra materiali, elettronica e ricerca comportamentale ha portato allo sviluppo di un approccio più responsabile al design interattivo."

},


cta: {

title: "What's next?",

subtitle:
"Esplora altri progetti",

button:
"TORNA AL PORTFOLIO"

}

}

};<style>{`

html,
body {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  background: #070707;
}


.project-page * {
  box-sizing: border-box;
}


.project-page {

  background:#070707;

  color:#e5e5e5;

  min-height:100vh;

  width:100%;

  padding-top:120px;

  padding-bottom:80px;

  font-family:
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;

}



.project-container {

  width:100%;

  overflow:hidden;

}



.editorial-content {

  width:100%;

  max-width:1200px;

  margin:0 auto;

  padding:
  0 4vw;

}




/* DIVIDER */


.editorial-divider {

  border:none;

  height:1px;

  background:#1b1b1b;

  margin:70px 0;

}





/* HERO */


.project-hero {

  padding-bottom:20px;

}



.project-hero h1 {

  margin:0 0 15px;

  font-size:
  clamp(3rem,7vw,6rem);

  font-weight:900;

  line-height:.9;

  letter-spacing:-3px;

  color:white;

}



.project-subtitle {

  font-size:
  clamp(1.1rem,2vw,1.5rem);

  color:#888;

  margin-bottom:45px;

}





.hero-info {

  display:grid;

  grid-template-columns:
  repeat(auto-fit,minmax(200px,1fr));

  gap:35px;

  padding-top:30px;

  border-top:1px solid #1c1c1c;

}



.info-block span {

  display:block;

  font-family:monospace;

  font-size:.75rem;

  text-transform:uppercase;

  letter-spacing:1px;

  color:#666;

  margin-bottom:10px;

}



.info-block p {

  margin:0;

  color:#ddd;

  line-height:1.5;

}





/* HERO FULL WIDTH */


.hero-media-fullbleed {

  width:100vw;

  margin-left:0;

  height:
  clamp(420px,65vh,800px);

  overflow:hidden;

  background:#111;

}



.hero-media-fullbleed img {

  width:100%;

  height:100%;

  display:block;

  object-fit:${heroFit};

}





/* OVERVIEW */


.overview-section {

  max-width:850px;

}



.overview-section h2,
.row-text h2,
.technical-section h2 {

  color:white;

  font-size:
  clamp(1.8rem,3vw,2.7rem);

  line-height:1.1;

  letter-spacing:-1px;

  font-weight:800;

}



.section-label {

  display:block;

  font-family:monospace;

  text-transform:uppercase;

  color:#777;

  font-size:.8rem;

  margin-bottom:25px;

}



.overview-section p,
.row-text p,
.technical-section p {

  color:#aaa;

  font-size:1.05rem;

  line-height:1.8;

}





/* ================================================= */
/* FULL BLEED IMAGE + TEXT SECTIONS */
/* ================================================= */



.editorial-row-fullbleed {

  width:100vw;

  margin-left:0;

  display:grid;

  grid-template-columns:

  minmax(0,50vw)

  minmax(0,50vw);

  align-items:center;

  margin-bottom:80px;

}



/*
IMMAGINE A SINISTRA
*/


.row-img-left .row-media {

  grid-column:1;

}



.row-img-left .row-text {

  grid-column:2;

  padding-left:clamp(40px,6vw,100px);

  padding-right:5vw;

}




/*
IMMAGINE A DESTRA
*/


.row-img-right .row-text {

  grid-column:1;

  padding-left:5vw;

  padding-right:clamp(40px,6vw,100px);

}



.row-img-right .row-media {

  grid-column:2;

}




/* IMAGE BOX */


.row-media {

  width:100%;

  height:
  clamp(400px,55vh,650px);

  overflow:hidden;

  background:#111;

}



.row-media img {

  width:100%;

  height:100%;

  display:block;

  object-fit:cover;

  transition:
  transform .8s cubic-bezier(.16,1,.3,1);

}



.row-media:hover img {

  transform:scale(1.04);

}





/* COMPOSITE */


.fullbleed-composite {

  width:100vw;

}



.media-composite-box {

  width:100%;

}



.composite-top {

  width:100%;

  height:
  clamp(400px,60vh,700px);

  overflow:hidden;

}



.composite-bottom {

  display:grid;

  grid-template-columns:1fr 1fr;

  gap:12px;

  margin-top:12px;

}



.composite-square {

  height:
  clamp(280px,40vh,450px);

  overflow:hidden;

}



.media-composite-box img {

  width:100%;

  height:100%;

  object-fit:cover;

  display:block;

}






/* NAVIGATOR */


.project-navigator {

  margin-top:40px;

  display:flex;

  justify-content:center;

  position:relative;

}



.dots-container {

  display:flex;

  gap:15px;

  padding:12px 25px;

  border:1px solid #222;

  background:#111;

  border-radius:40px;

}



.dot-item {

  width:12px;

  height:12px;

  border-radius:50%;

  border:none;

  background:#444;

  cursor:pointer;

}



.dot-item.active {

  background:white;

}





.project-preview-card {

  position:absolute;

  bottom:60px;

  width:280px;

  background:#111;

  border:1px solid #333;

  overflow:hidden;

}



.preview-img-box {

  height:160px;

}



.preview-img-box img {

  width:100%;

  height:100%;

  object-fit:cover;

}





/* REVEAL */


.reveal-editorial {

  opacity:0;

  transform:translateY(35px);

  filter:blur(8px);

  transition:
  opacity .8s ease,
  transform .8s ease,
  filter .8s ease;

}



.reveal-active {

  opacity:1;

  transform:none;

  filter:none;

}





/* CTA */


.project-cta {

  text-align:center;

  padding-top:50px;

}



.cta-button {

  display:inline-block;

  margin-top:35px;

  padding:15px 40px;

  background:white;

  color:black;

  text-decoration:none;

  font-weight:700;

  font-size:.85rem;

  letter-spacing:1px;

}




/* MOBILE */


@media(max-width:860px){


.project-page {

padding-top:80px;

}



.editorial-row-fullbleed {

display:flex;

flex-direction:column;

width:100%;

}



.row-media {

height:350px;

}



.row-text,
.row-img-left .row-text,
.row-img-right .row-text {

padding:40px 4vw;

}



.row-img-right {

flex-direction:column-reverse;

}



.composite-bottom {

grid-template-columns:1fr;

}



.hero-media-fullbleed {

height:320px;

}



}

`}</style>
export default function TTable({ heroFit = "cover" }: TTableProps) {


const [language] = useState<'it' | 'en'>('en');


const [hoveredProject, setHoveredProject] =
useState<typeof PROJECTS_LIST[0] | null>(null);


const t = content[language];



useEffect(() => {


const elements =
document.querySelectorAll(".reveal-editorial");


const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"reveal-active"
);

observer.unobserve(
entry.target
);

}

});

},

{
threshold:.08
}

);



elements.forEach(el=>{

const rect =
el.getBoundingClientRect();


if(rect.top < window.innerHeight){

el.classList.add(
"reveal-active"
);

}
else{

observer.observe(el);

}

});



return()=>{

observer.disconnect();

};


},[]);





return (

<div className="project-page">


<div className="project-container">



{/* ================= HERO ================= */}



<div className="editorial-content">


<section className="
project-hero
reveal-editorial
">


<h1>
{t.title}
</h1>


<p className="project-subtitle">
{t.subtitle}
</p>



<div className="hero-info">


<div className="info-block">

<span>
{t.meta.teamLabel}
</span>

<p>
Matteo Finco<br/>
Anna Foresto<br/>
Paolo Levorato<br/>
Andrea Melchiori<br/>
Giulia Pettenò
</p>

</div>



<div className="info-block">

<span>
{t.meta.yearLabel}
</span>

<p>
{t.meta.yearVal}
</p>

</div>



<div className="info-block">

<span>
{t.meta.awardLabel}
</span>

<p>
{t.meta.awardVal}
</p>

</div>


</div>


</section>


</div>






<section className="
hero-media-fullbleed
reveal-editorial
">


<img
src={IMAGES.hero}
alt="T-Table hero"
/>


</section>






{/* ================= OVERVIEW ================= */}



<div className="editorial-content">


<hr className="editorial-divider"/>


<section className="
overview-section
reveal-editorial
">


<h2>
{t.overview.title}
</h2>


<span className="section-label">
{t.overview.subtitle}
</span>



<p>
{t.overview.p1}
</p>


<p>
{t.overview.p2}
</p>


</section>



<hr className="editorial-divider"/>


</div>








{/* ================= SOLUTION ================= */}



<section className="
editorial-row-fullbleed
row-img-left
">



<div className="
row-media
reveal-editorial
">


<img

src={IMAGES.solution}

alt="T-Table solution"

/>


</div>




<div className="
row-text
reveal-editorial
">


<h2>
{t.solution.title}
</h2>



<p>
{t.solution.p1}
</p>


<p>
{t.solution.p2}
</p>


<p>
{t.solution.p3}
</p>



</div>



</section>






<div className="editorial-content">

<hr className="editorial-divider"/>

</div>






{/* ================= RESEARCH ================= */}



<section className="
editorial-row-fullbleed
row-img-right
">


<div className="
row-text
reveal-editorial
">


<h2>
{t.research.title}
</h2>


<p>
{t.research.p1}
</p>


<p>
{t.research.p2}
</p>


</div>




<div className="
row-media
reveal-editorial
">


<img

src={IMAGES.research}

alt="T-Table research"

/>



</div>



</section>







<div className="editorial-content">

<hr className="editorial-divider"/>

</div>








{/* ================= DESIGN ================= */}



<section className="
editorial-row-fullbleed
row-img-left
">



<div className="
row-media
reveal-editorial
">


<img

src={IMAGES.design}

alt="T-Table design"

/>


</div>






<div className="
row-text
reveal-editorial
">


<h2>
{t.design.title}
</h2>


<p>
{t.design.p1}
</p>


<p>
{t.design.p2}
</p>


<p>
{t.design.p3}
</p>


</div>



</section>







<div className="editorial-content">

<hr className="editorial-divider"/>

</div>







{/* ================= COMPOSITE ================= */}



<section className="
fullbleed-composite
reveal-editorial
">



<div className="
media-composite-box
">



<div className="composite-top">


<img

src={IMAGES.compositeTop}

alt="T-Table assembly"

/>


</div>





<div className="
composite-bottom
">



<div className="composite-square">

<img

src={IMAGES.compositeBottomLeft}

alt="T-Table detail"

/>

</div>





<div className="composite-square">


<img

src={IMAGES.compositeBottomRight}

alt="T-Table detail"

/>


</div>



</div>




</div>


</section>








{/* ================= TECHNICAL ================= */}



<div className="editorial-content">



<hr className="editorial-divider"/>



<section className="
technical-section
reveal-editorial
">


<h2>
{t.technical.title}
</h2>



<p>
{t.technical.p1}
</p>



<p>
{t.technical.p2}
</p>



</section>




<hr className="editorial-divider"/>







{/* ================= CTA ================= */}



<section className="
project-cta
reveal-editorial
">


<h2>
{t.cta.title}
</h2>



<p className="cta-subtitle">
{t.cta.subtitle}
</p>




<div className="project-navigator">



{hoveredProject && (


<div className="
project-preview-card
">


<div className="preview-img-box">


<img

src={hoveredProject.imageUrl}

alt={hoveredProject.title}

/>


</div>



<div className="preview-details">


<h4>
{hoveredProject.title}
</h4>


<p>
{hoveredProject.subtitle}
</p>


</div>



</div>


)}







<div className="dots-container">



{
PROJECTS_LIST.map(project=>(


<button

key={project.id}

className={

`dot-item ${
project.id==="ttable"
?
"active"
:
""
}`

}


onMouseEnter={()=>setHoveredProject(project)}


onMouseLeave={()=>setHoveredProject(null)}


onClick={()=>
window.location.href = project.path
}


/>



))

}



</div>




</div>






<a

href="/"

className="cta-button"

>

{t.cta.button}

</a>




</section>





</div>







</div>


</div>


);

}
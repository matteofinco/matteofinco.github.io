import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero-section" className="hero-section">

      <style>{`

        .hero-section {
          height:100vh;
          width:100%;
          background:#070707;
          color:white;
          position:relative;
          overflow:hidden;
          display:flex;
          align-items:center;
        }


        .hero-name {

          position:absolute;

          top:40px;
          left:6vw;

          font-family:monospace;
          font-size:0.85rem;

          letter-spacing:0.18em;
          text-transform:uppercase;

          color:#777;

        }



        .hero-content {

          width:88vw;
          margin:auto;

        }



        .hero-title {

          font-size:clamp(4rem,9.5vw,10rem);

          line-height:0.88;

          letter-spacing:-0.07em;

          font-weight:900;

          text-transform:uppercase;

          margin:0;

          max-width:1400px;

        }



        .hero-role {

          margin-top:45px;

          font-family:monospace;

          font-size:1rem;

          letter-spacing:0.35em;

          text-transform:uppercase;

          color:#888;

        }



        /* elemento tecnico discreto */

        .hero-meta {

          position:absolute;

          bottom:45px;

          left:6vw;

          font-family:monospace;

          font-size:0.75rem;

          color:#555;

          letter-spacing:0.15em;

        }



        /* linea verticale */

        .hero-line {

          position:absolute;

          right:6vw;

          top:20%;

          height:60%;

          width:1px;

          background:#222;

        }



        .hero-dot {

          position:absolute;

          right:calc(6vw - 3px);

          top:20%;

          width:7px;

          height:7px;

          background:white;

          border-radius:50%;

        }



        @media(max-width:900px){

          .hero-title{

            font-size:4rem;

          }

        }


      `}</style>



      <div className="hero-name">
        MATTEO FINCO
      </div>



      <div className="hero-content">

        <h1 className="hero-title">

          I LIKE<br/>
          UNDERSTANDING<br/>
          HOW THINGS<br/>
          WORK

        </h1>


        <div className="hero-role">
          PRODUCT DESIGNER & MAKER
        </div>

      </div>



      <div className="hero-meta">
        IUAV UNIVERSITY OF VENICE — 2026
      </div>


      <div className="hero-line"></div>
      <div className="hero-dot"></div>


    </section>
  );
};
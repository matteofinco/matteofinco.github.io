import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero-section" className="hero-section">

      <style>{`

        .hero-section {
          width:100%;
          height:100vh;
          background:#070707;
          color:white;
          position:relative;
          overflow:hidden;

          display:flex;
          align-items:center;
          justify-content:center;
        }


        .hero-layout {

          width:88%;
          max-width:1500px;

          display:grid;

          grid-template-columns: 
          minmax(0, 1fr) auto;

          align-items:center;

          gap:80px;

        }



        /* TESTO PRINCIPALE */

        .hero-content {

          animation:heroReveal 1.4s cubic-bezier(.16,1,.3,1);

        }


        .hero-title {

          margin:0;

          font-size:
          clamp(3.5rem,7vw,8rem);

          line-height:.9;

          font-weight:900;

          letter-spacing:-0.07em;

          text-transform:uppercase;

        }



        .hero-subtitle {

          margin-top:45px;

          font-size:
          clamp(.9rem,1.2vw,1.3rem);

          letter-spacing:.35em;

          font-weight:600;

          color:#888;

        }



        /* NOME DESTRA */

        .hero-name {

          writing-mode:vertical-rl;

          transform:rotate(180deg);


          font-size:
          clamp(3rem,5vw,6rem);

          line-height:.9;

          font-weight:900;

          letter-spacing:.12em;

          text-transform:uppercase;

          color:#ffffff;


          animation:nameReveal 1.6s cubic-bezier(.16,1,.3,1);

        }



        /* FRECCIA */

        .hero-arrow {

          position:absolute;

          bottom:35px;

          left:50%;

          transform:translateX(-50%);

          font-size:32px;

          font-weight:200;

          color:#777;

          line-height:1;

        }



        @keyframes heroReveal {

          from {

            opacity:0;

            transform:translateY(40px);

            filter:blur(10px);

          }

          to {

            opacity:1;

            transform:none;

            filter:blur(0);

          }

        }


        @keyframes nameReveal {

          from {

            opacity:0;

            transform:rotate(180deg) translateY(-40px);

          }

          to {

            opacity:1;

            transform:rotate(180deg) translateY(0);

          }

        }



        @media(max-width:900px){

          .hero-layout {

            grid-template-columns:1fr;

            gap:40px;

          }


          .hero-name {

            writing-mode:horizontal-tb;

            transform:none;

            font-size:2rem;

          }


        }


      `}</style>



      <div className="hero-layout">


        <div className="hero-content">

          <h1 className="hero-title">

            I LIKE<br/>
            UNDERSTANDING<br/>
            HOW THINGS<br/>
            WORK

          </h1>


          <div className="hero-subtitle">

            PRODUCT DESIGN & MAKER

          </div>

        </div>



        <div className="hero-name">

          MATTEO<br/>
          FINCO

        </div>


      </div>



      <div className="hero-arrow">
        ∨
      </div>


    </section>
  );
};
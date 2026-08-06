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
          1fr auto;

          align-items:center;

          gap:60px;

        }



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



        /* NOME A DESTRA */

        .hero-name {

          font-size:
          clamp(2.5rem,4vw,5rem);

          font-weight:900;

          letter-spacing:-0.05em;

          white-space:nowrap;

          text-transform:uppercase;

          color:#fff;

          animation:nameReveal 1.5s cubic-bezier(.16,1,.3,1);

        }




        /* FRECCIA SVG */

        .hero-arrow {

          position:absolute;

          bottom:35px;

          left:50%;

          transform:translateX(-50%);

          width:18px;

          height:35px;

          opacity:.6;

        }


        .hero-arrow svg {

          width:100%;
          height:100%;

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

            transform:translateX(40px);

          }

          to {

            opacity:1;

            transform:none;

          }

        }



        @media(max-width:900px){

          .hero-layout {

            grid-template-columns:1fr;

          }


          .hero-name {

            white-space:normal;

            font-size:2.5rem;

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

          MATTEO FINCO

        </div>


      </div>



      <div className="hero-arrow">

        <svg 
          viewBox="0 0 20 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >

          <line
            x1="10"
            y1="0"
            x2="10"
            y2="25"
            stroke="white"
            strokeWidth="1"
          />

          <polyline
            points="3,20 10,28 17,20"
            stroke="white"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

        </svg>

      </div>


    </section>
  );
};
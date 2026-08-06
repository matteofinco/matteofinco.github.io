import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="hero-section"
      className="hero-section"
    >

      <style>{`

        .hero-section {
          width: 100%;
          height: 100vh;
          background:#070707;
          color:white;
          display:flex;
          align-items:center;
          justify-content:center;
          overflow:hidden;
          position:relative;
        }


        .hero-container {
          width:90vw;
          max-width:1500px;
          height:85vh;
          display:grid;
          grid-template-columns: 1fr 150px;
          align-items:center;
          gap:40px;
          position:relative;
        }


        /* TESTO PRINCIPALE */

        .hero-main {
          display:flex;
          flex-direction:column;
          justify-content:center;
        }


        .hero-title {

          font-size:clamp(4rem,8vw,9rem);
          line-height:0.88;
          letter-spacing:-0.06em;
          font-weight:900;
          text-transform:uppercase;

          margin:0;

        }



        .hero-subtitle {

          margin-top:35px;

          font-size:clamp(1rem,1.5vw,1.5rem);

          letter-spacing:0.35em;

          font-weight:600;

          color:#999;

          text-transform:uppercase;

        }



        /* NOME VERTICALE */


        .hero-name {

          height:100%;

          display:flex;

          align-items:center;

          justify-content:center;

          writing-mode:vertical-rl;

          transform:rotate(180deg);

          font-size:clamp(3rem,5vw,5.5rem);

          letter-spacing:-0.04em;

          font-weight:900;

          color:#999;

          white-space:nowrap;

        }



        /* FRECCIA */

        .hero-arrow {

          position:absolute;

          bottom:40px;

          left:50%;

          transform:translateX(-50%);

          opacity:0.6;

        }


        .hero-arrow svg {

          width:32px;

          height:32px;

        }



        @media(max-width:900px){

          .hero-container {

            grid-template-columns:1fr;

          }


          .hero-name {

            display:none;

          }


          .hero-title {

            font-size:clamp(3rem,12vw,5rem);

          }

        }



      `}</style>


      <div className="hero-container">


        <div className="hero-main">


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
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >

          <path d="M6 9L12 15L18 9"/>

        </svg>

      </div>


    </section>
  );
};
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="hero-section"
      className="hero-section"
    >

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


        /* NOME VERTICALE */
        .hero-name {
          position:absolute;
          left:35px;
          top:50%;
          transform:translateY(-50%) rotate(-90deg);
          
          font-size:14px;
          font-weight:600;
          letter-spacing:8px;
          color:#888;

          text-transform:uppercase;

          animation:fadeIn 1.5s ease forwards;
        }


        /* CONTENUTO CENTRALE */
        .hero-content {

          width:90%;
          max-width:1400px;

          display:flex;
          flex-direction:column;
          justify-content:center;

          animation:heroReveal 1.5s cubic-bezier(.16,1,.3,1);
        }


        .hero-title {

          font-size:
          clamp(3.8rem, 8vw, 9rem);

          line-height:.92;

          font-weight:900;

          letter-spacing:-0.06em;

          max-width:1200px;

          text-transform:uppercase;

          margin:0;

        }


        .hero-subtitle {

          margin-top:40px;

          font-size:
          clamp(1rem,1.5vw,1.4rem);

          letter-spacing:0.35em;

          color:#888;

          font-weight:500;

        }



        /* SCROLL INDICATOR */

        .hero-scroll {

          position:absolute;

          bottom:45px;
          right:50%;

          transform:translateX(50%);

          font-size:11px;

          letter-spacing:5px;

          color:#555;

          text-transform:uppercase;

        }


        .hero-scroll::after {

          content:"";

          display:block;

          width:1px;

          height:45px;

          background:#444;

          margin:15px auto 0;

        }



        @keyframes heroReveal {

          from {

            opacity:0;

            transform:translateY(40px);

            filter:blur(12px);

          }

          to {

            opacity:1;

            transform:none;

            filter:blur(0);

          }

        }


        @keyframes fadeIn {

          from {
            opacity:0;
          }

          to {
            opacity:1;
          }

        }



        @media(max-width:768px){

          .hero-name {

            left:15px;

            font-size:11px;

          }


          .hero-title {

            font-size:3.2rem;

          }


          .hero-subtitle {

            letter-spacing:.2em;

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


        <div className="hero-subtitle">

          PRODUCT DESIGN & MAKER

        </div>

      </div>



      <div className="hero-scroll">

        SCROLL

      </div>


    </section>
  );
};
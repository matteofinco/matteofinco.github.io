import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero-section" className="hero-section">

      <style>{`

        .hero-section {
          width: 100%;
          height: 100vh;
          background: #070707;
          display:flex;
          align-items:center;
          justify-content:center;
          overflow:hidden;
          position:relative;
        }


        .hero-container {
          width:92vw;
          max-width:1500px;
          height:85vh;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          position:relative;
        }


        /* TITOLO PRINCIPALE */

        .hero-title {

          font-size:clamp(5rem, 17vw, 15rem);
          line-height:0.78;
          font-weight:900;
          letter-spacing:-0.08em;
          text-align:center;

          background-image:
          url("https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fbe86c1cc389d455eb6f0512af86b90bc");

          background-size:120%;
          background-position:center;

          -webkit-background-clip:text;
          background-clip:text;

          color:transparent;

          animation:
          textureMove 18s ease-in-out infinite alternate;

          margin:0;

          user-select:none;
        }


        @keyframes textureMove {

          from {
            background-position:
            40% 50%;
          }

          to {
            background-position:
            60% 50%;
          }

        }



        /* RUOLO */

        .hero-role {

          margin-top:55px;

          font-family:monospace;
          font-size:0.9rem;

          letter-spacing:6px;
          text-transform:uppercase;

          color:#999;

          opacity:0;

          animation:
          fadeUp 1.5s ease forwards;

          animation-delay:1s;

        }



        /* CLAIM */

        .hero-claim {

          margin-top:35px;

          max-width:650px;

          text-align:center;

          font-size:
          clamp(1.2rem,2vw,1.8rem);

          line-height:1.4;

          font-weight:600;

          letter-spacing:-0.02em;

          color:white;

          opacity:0;

          animation:
          fadeUp 1.5s ease forwards;

          animation-delay:1.5s;

        }



        /* INDICATORE */

        .hero-scroll {

          position:absolute;

          bottom:45px;

          left:50%;

          transform:translateX(-50%);

          color:#666;

          font-family:monospace;

          font-size:0.75rem;

          letter-spacing:4px;

          display:flex;
          flex-direction:column;
          align-items:center;

          gap:15px;

          opacity:0;

          animation:
          fadeUp 1s ease forwards;

          animation-delay:2.2s;

        }



        .hero-scroll-line {

          width:1px;
          height:45px;

          background:#555;

          animation:
          scrollPulse 2s infinite;

        }


        @keyframes scrollPulse {

          0%,100% {
            opacity:.3;
            transform:scaleY(.7);
          }

          50% {
            opacity:1;
            transform:scaleY(1);
          }

        }



        @keyframes fadeUp {

          from {

            opacity:0;
            transform:
            translateY(25px);

          }

          to {

            opacity:1;
            transform:
            translateY(0);

          }

        }



        @media(max-width:768px){

          .hero-title {
            font-size:clamp(4rem,20vw,8rem);
          }


          .hero-role {
            margin-top:35px;
            font-size:.7rem;
          }


          .hero-claim {

            font-size:1.1rem;

          }

        }


      `}</style>


      <div className="hero-container">


        <h1 className="hero-title">

          MATTEO
          <br/>
          FINCO

        </h1>


        <div className="hero-role">

          PRODUCT DESIGNER

        </div>


        <div className="hero-claim">

          I LIKE UNDERSTANDING
          <br/>
          HOW THINGS WORK

        </div>


        <div className="hero-scroll">

          SCROLL

          <div className="hero-scroll-line"></div>

        </div>


      </div>


    </section>
  );
};
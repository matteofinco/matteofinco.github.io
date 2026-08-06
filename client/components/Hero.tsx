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
          background: #070707;
          color: white;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }


        /* NOME IN ALTO */
        .hero-name {
          position: absolute;
          top: 45px;
          left: 6vw;

          font-family: monospace;
          font-size: 0.9rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;

          color: #888;

          z-index: 5;
        }


        /* CONTENUTO CENTRALE */
        .hero-content {

          width: 88vw;
          max-width: 1500px;

          display:flex;
          flex-direction:column;
          justify-content:center;

        }


        .hero-title {

          font-size: clamp(3.5rem, 8.5vw, 9rem);

          font-weight:900;

          line-height:0.9;

          letter-spacing:-0.06em;

          text-transform:uppercase;

          max-width:1400px;

          color:white;

        }


        .hero-role {

          margin-top:40px;

          font-family: monospace;

          font-size: clamp(0.9rem,1.2vw,1.2rem);

          letter-spacing:0.35em;

          color:#999;

          text-transform:uppercase;

        }



        /* SFONDO TECNICO */
        .hero-grid {

          position:absolute;

          inset:0;

          opacity:0.12;

          background-image:

          linear-gradient(
          rgba(255,255,255,.2) 1px,
          transparent 1px
          ),

          linear-gradient(
          90deg,
          rgba(255,255,255,.2) 1px,
          transparent 1px
          );

          background-size:80px 80px;

          animation:gridMove 25s linear infinite;

        }


        @keyframes gridMove {

          from {
            transform:translate(0,0);
          }

          to {
            transform:translate(80px,80px);
          }

        }



        /* SCHIZZI / IMMAGINE TECNICA */
        .hero-image {

          position:absolute;

          right:-10%;

          bottom:-20%;

          width:60vw;

          opacity:0.12;

          filter:grayscale(100%);

          animation:floatImage 18s ease-in-out infinite;

        }


        @keyframes floatImage {

          0%,100%{
            transform:translateY(0);
          }

          50%{
            transform:translateY(-30px);
          }

        }




        @media(max-width:900px){

          .hero-title{
            font-size:4rem;
          }


          .hero-role{
            margin-top:25px;
          }

        }


      `}</style>



      <div className="hero-grid"></div>


      <div className="hero-name">
        Matteo Finco
      </div>



      <div className="hero-content">


        <h1 className="hero-title">

          I LIKE<br/>
          UNDERSTANDING<br/>
          HOW THINGS<br/>
          WORK

        </h1>


        <div className="hero-role">

          Product Designer & Maker

        </div>


      </div>



      <img
        className="hero-image"
        src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fbe86c1cc389d455eb6f0512af86b90bc"
        alt=""
      />


    </section>
  );
};
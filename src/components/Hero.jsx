import React from "react";
import { Parallax } from "react-parallax";

const Hero = () => {
  //logo: https://uploads-ssl.webflow.com/64217e6df1c4db453cb8c781/64218ff5f9dbbd2ef67ff7cf_139%20Sem%20Ti%CC%81tulo_20230324000717-p-500.png

  // logo2: https://uploads-ssl.webflow.com/64217e6df1c4db453cb8c781/64219001fca7d87074d0c885_Product-p-500.png

  // background: https://uploads-ssl.webflow.com/64217e6df1c4db453cb8c781/6421e37076296edbcd37134b_00034-1788636776%20(2).png

  // socialMedia: https://uploads-ssl.webflow.com/64217e6df1c4db453cb8c781/6422126dd6de9c2a6c7f7efd_Screenshot%202023-03-28%20at%2000.00.49.png

  //picture: https://uploads-ssl.webflow.com/64217e6df1c4db453cb8c781/642192ffdffe867fe1428f3e_photo_2023-03-27%2010.23.28.jpeg
  return (
    <div>
      <Parallax
        bgImage={
          "https://uploads-ssl.webflow.com/64217e6df1c4db453cb8c781/6421e37076296edbcd37134b_00034-1788636776%20(2).png"
        }
        strength={500}
        bgImageSizes="(max-width: 768px) 100vw, 60vw"
        className="w-full h-auto"
      >
        <div className="h-screen flex flex-col justify-center items-center w-full"></div>
      </Parallax>
    </div>
  );
};

export default Hero;

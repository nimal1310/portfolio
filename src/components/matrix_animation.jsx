// import React, { useEffect } from 'react';

// const Matrix=()=>
//     {
//         useEffect(()=>{
//         const canvas =document.getElementById('matrix');
//         const ctx =canvas.getContext('2d');
//         canvas.width=window.innerWidth;
//         canvas.height=window.innerHeight;

//         const binary='01';
//         const fontsize=16;
//         const columns=canvas.width/fontsize;
//         const drops=Array(Math.floor(columns)).fill(0);

//         function draw(){
//             ctx.fillstyle='rgba(0,0,0,0.05)';
//             ctx.fillRect(0,0,canvas.width,canvas.height);
//             ctx.fillstyle='#00FF00';
//             ctx.font=`${fontsize}px monospace`;
//             drops.forEach((y, index) => {
//                 const text = binary[Math.floor(Math.random() * binary.length)];
//                 ctx.fillText(text, index * fontsize, y * fontsize);
        
//                 if (y * fontsize > canvas.height && Math.random() > 0.975) {
//                   drops[index] = 0;
//                 }
//                 drops[index]++;
//         });

//         }
//         setInterval(draw,50);
//     },[]);
// return <canvas id="matrix" />;
//     };

// export default Matrix;


import React, { useEffect } from 'react';

const Matrix = () => {
  useEffect(() => {
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const binary = '01';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(0);

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00FF00';
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, index) => {
        const text = binary[Math.floor(Math.random() * binary.length)];
        ctx.fillText(text, index * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[index] = 0;
        }
        drops[index]++;
      });
    }

    setInterval(draw,50);
  }, []);

  return <canvas id="matrix" />;
};

export default Matrix;

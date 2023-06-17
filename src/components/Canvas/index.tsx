import { useRef, useEffect } from 'react'
import data from '../../assets/data.json'
import img from '../../assets/tutzing.svg'


const MyCanvas = ({dotes}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const image = new Image();
    image.src = img;
    image.onload = function() {
      // Рисуем картинку на canvas
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      dotes.forEach(coord => {
        const scaledX = coord.x * canvas.width / 100;
        const scaledY = coord.y * canvas.height / 100; 
        const { name } = coord;
        ctx.beginPath();
        ctx.arc(scaledX, scaledY, 5, 0, 2 * Math.PI);
        ctx.fillText(name, scaledX, scaledY - 10);
        ctx.stroke();
      });
    }
  }, [dotes, img]);

  return (
    <canvas ref={canvasRef} width={1000} height={1000} />
  );
}

export default MyCanvas;




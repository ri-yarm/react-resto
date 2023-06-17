/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

import { useRef, useEffect} from "react";
import img from "../../assets/tutzing.svg";

/* 
  ? я пытался найти библиотеку, что бы она уже умела рисовать точки и передвигать, но не нашёл.
  до этого с канвас я работал мимолётно
  ! есть возможность добавлять точки, а удалять - нет
*/

type CanvasProps = {
  dots: Array;
  handleAddDot: () => {x, y, name}
}

const Canvas: React.FC<CanvasProps> = ({ dots, handleAddDot }) => {
  const canvasStats = { width: 800, height: 800 }
  const canvasRef = useRef(null);

  /** Функция отрисовывает точки  */
  const drawDots = (ctx, canvas, dotsing) => {
    dotsing.forEach((dot) => {
      const { x, y, name } = dot;
      const scaledX = (x * canvas.width) / 100;
      const scaledY = (y * canvas.height) / 100;
      ctx.beginPath();
      ctx.arc(scaledX, scaledY, 5, 0, 2 * Math.PI);
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.strokeStyle = "red";
      ctx.stroke();
      ctx.fillStyle = "black";
      ctx.fillText(name, scaledX, scaledY - 10);
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const image = new Image();
    image.src = img;

    image.onload = () => {
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      drawDots(ctx, canvas, dots);
    };
  }, [dots]);

  /* при клике на canvas рисуем точку */
  const handleCanvasClick = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const newDot = {
      x: (mouseX / canvasStats.width) * 100,
      y: (mouseY / canvasStats.height) * 100,
      name: "новая точка",
    };
    
    // добавлят точку в локальное хранилище
    handleAddDot(newDot);
  };

  return (
      <canvas
        ref={canvasRef}
        width={canvasStats.width}
        height={canvasStats.height}
        onClick={handleCanvasClick}
      />
  );
};

export default Canvas;

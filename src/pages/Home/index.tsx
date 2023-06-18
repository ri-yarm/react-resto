/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Canvas from "../../components/Canvas";

import "./Home.less";

import data from "../../assets/data.json";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const login = localStorage.getItem("login");
  const [dots, setDots] = useState([]);

  useEffect(() => {
    if (!login) {
      return navigate("/login");
    }

    const storedDots = localStorage.getItem("dots");
    const isClearDots = localStorage.getItem("dotsClear");

    if (storedDots) {
      // если есть в хранилище точки, рисуем их
      return setDots(JSON.parse(storedDots));
    } else if (isClearDots) {
      // если мы удалили всё, то ничего не рисуем
      return setDots([]);
    }
    // рисуем точки по дефолту
    setDots(data);
  }, [login, dots]);

  // добавляет в локальное хранилище весь массив dots при добавлении новой точки
  const handleAddDot = (newDot: object) => {
    localStorage.removeItem("dotsClear");
    setDots((prevDots: object[]) => {
      const newDots = [...prevDots, newDot];
      localStorage.setItem("dots", JSON.stringify(newDots));
      return newDots;
    });
  };

  // удаляем всё
  const handleDeleteAll = () => {
    setDots([]);
    localStorage.removeItem("dots");
    localStorage.setItem("dotsClear", "false");
  };

  // сброс к заводским настройкам
  const reset = () => {
    localStorage.removeItem("dotsClear");
    setDots(data);
    localStorage.setItem("dots", JSON.stringify(data));
  };

  return (
    <main className="main">
      <h1>Добрый день, {login}!</h1>
      <button className="button__delete" onClick={handleDeleteAll}>
        Удалить все точки
      </button>
      <button className="button__reset" onClick={reset}>
        Заводские настройки
      </button>
      <Canvas dots={dots} handleAddDot={handleAddDot} />
    </main>
  );
};

export default Home;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import svg from "../../assets/tutzing.svg";

import styles from "./Home.module.less";

import data from "../../assets/data.json";
import Canvas from "../../components/Canvas";

const Home = () => {
  const navigate = useNavigate();
  const login = localStorage.getItem('login');
  const [dots, setDots] = useState(data);

  useEffect(() => {
    if (!login) {
      return navigate('/login');
    }
  }, [login]);

  function handleAddDot(newDot) {
    setDots(prevDots => [...prevDots, newDot]);
  }

  function handleDeleteDot(index) {
    setDots(prevDots => {
      const newDots = [...prevDots];
      newDots.splice(index, 1);
      return newDots;
    });
  }

  return (
    <main className="main">
      <h1 className={styles.title}>Добрый день, {login}!</h1>
      <Canvas dots={dots} onAddDot={handleAddDot} onDeleteDot={handleDeleteDot} />
    </main>
  );
};

export default Home;
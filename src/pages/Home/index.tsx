import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import svg from "../../assets/tutzing.svg";

import styles from './Home.module.less'

const Home = () => {
  const navigate = useNavigate()
  // емейл у меня как токен, я к тому же буду его использовать в разметке
  const login = localStorage.getItem('login')

  useEffect(() => {
    // нет емейла? досвидания
    // можно было добавить элемент высшего порядка, для переадреса
    // но так как приложения не большое, можно просто перенаправлять
    if(!login) {
      return navigate('/login')
    }
  }, [login])
  
  return (
    <main className="main">
      <h1 className={styles.title}>Добрый день {login}</h1>
      <img src={svg} alt="" />
    </main>
  );
};

export default Home;

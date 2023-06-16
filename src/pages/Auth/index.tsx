// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { useNavigate } from "react-router-dom";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

import styles from "./Auth.module.less";

/** 
 * * В тз говорилось не усложнять, но я не удержался и сделал чуть сложнее вход))
  */
const Auth = () => {
  const navigate = useNavigate();

  // ? кастомный хук валидации
  const { isValid, values, handleChange, errors } = useFormAndValidation();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    navigate("/");
    // !!!! емейл в локальном хранилище будет у меня как токен входа и как приветсвие на главной странице
    localStorage.setItem("login", values.login);
  };

  return (
    <main className="main">
      <h1 className={styles.title}>Войдите в аккаунт</h1>
      <form action="#" className={styles.form} noValidate onSubmit={handleSubmit}>
        <div className={styles.form__group}>
          <input
            type="text"
            name="login"
            placeholder="test"
            minLength={4}
            required
            autoComplete="off"
            value={values.login || ""}
            onChange={handleChange}
          />
          <span className="form__span">{errors.login}</span>

          <input
            type="password"
            name="password"
            placeholder="test"
            autoComplete="off"
            required
            minLength={4}
            value={values.password || ""}
            onChange={handleChange}
          />
          <span className={`${!isValid ? `buttonDisabled` : ""}`}>
            {errors.password}
          </span>
          <button disabled={!isValid} type="submit">
            Войти
          </button>
        </div>
      </form>
    </main>
  );
};

export default Auth;

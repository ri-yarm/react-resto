import { Link, useNavigate, useLocation } from "react-router-dom";

import "./Header.less";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navigate = useNavigate();

  const signout = () => {
    localStorage.removeItem("login");
    navigate("/login");
  };

  return (
    <header className="header">
      <Link to="/" className="header__link">
        <svg
          viewBox="0 0 194 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="styles-module--header__logoIcon--YUS4B"
        >
          <path
            d="M61.686 11.905a10.13 10.13 0 0 0-7.5-2.98 10.158 10.158 0 0 0-10.464 10.35 10.424 10.424 0 0 0 2.966 7.499 10.081 10.081 0 0 0 7.499 3.054c2.128.039 4.216-.58 5.979-1.772l2.632 2.413 1.813-1.813-2.339-2.55a10.404 10.404 0 0 0 2.38-6.859 10.008 10.008 0 0 0-2.966-7.342Zm-7.5 14.583a6.246 6.246 0 0 1-4.771-2.046 7.247 7.247 0 0 1-1.896-4.833 7.002 7.002 0 0 1 1.896-5.304 6.681 6.681 0 0 1 9.544 0 7.006 7.006 0 0 1 1.895 5.283 7.384 7.384 0 0 1-1.11 3.79l-2.728-2.93-2.481 2.48 2.918 2.687a6.292 6.292 0 0 1-3.266.873ZM86.863 14.966h-3.626v14.5h3.626v-14.5ZM86.863 9.328h-3.626v3.225h3.626V9.328ZM97.594 26.767a4.302 4.302 0 0 1-3.279-1.322 4.772 4.772 0 0 1 0-6.443 4.192 4.192 0 0 1 3.19-1.302 5.134 5.134 0 0 1 3.764 1.568l1.629-2.475a6.183 6.183 0 0 0-2.502-1.63 9.078 9.078 0 0 0-3.081-.538 7.662 7.662 0 0 0-5.713 2.209 7.375 7.375 0 0 0-2.182 5.4 7.378 7.378 0 0 0 2.175 5.454 7.724 7.724 0 0 0 5.72 2.181 8.91 8.91 0 0 0 3.347-.64 7.25 7.25 0 0 0 2.639-1.726l-1.398-2.563a6.004 6.004 0 0 1-4.309 1.827ZM136.42 20.843v-.055a5.019 5.019 0 0 0 2.468-2.161 6.534 6.534 0 0 0 .907-3.409 6.317 6.317 0 0 0-.907-3.463 5.317 5.317 0 0 0-2.495-2.114 10.082 10.082 0 0 0-3.804-.545h-6.641v20.37h3.621v-7.648h3.49l3.934 7.649h4.227l-4.145-7.554a7.262 7.262 0 0 0-.655-1.07Zm-1.077-2.905a3.123 3.123 0 0 1-2.311.853h-3.463v-6.245h2.87a5.552 5.552 0 0 1 2.188.34c1.05.43 1.582 1.364 1.582 2.728a3.205 3.205 0 0 1-.866 2.324ZM148.842 14.523a7.147 7.147 0 0 0-5.352 2.127 7.505 7.505 0 0 0-2.045 5.454 7.42 7.42 0 0 0 2.168 5.4 7.565 7.565 0 0 0 5.672 2.215 9.64 9.64 0 0 0 3.184-.559 7.84 7.84 0 0 0 2.666-1.527l-1.425-2.59a6.61 6.61 0 0 1-4.186 1.642 4.514 4.514 0 0 1-2.966-1.015 3.98 3.98 0 0 1-1.398-2.837h10.009c.063-.452.102-.907.116-1.363a7.243 7.243 0 0 0-1.712-5.011 5.968 5.968 0 0 0-4.731-1.936Zm-3.593 5.883a3.84 3.84 0 0 1 1.193-2.243 3.347 3.347 0 0 1 2.311-.838 2.725 2.725 0 0 1 2.046.825c.567.611.871 1.422.845 2.256h-6.395ZM165.374 21.709a25.973 25.973 0 0 0-2.127-.839 9.353 9.353 0 0 1-1.806-.832 1.284 1.284 0 0 1-.743-1.084c0-.909.681-1.363 2.045-1.363a6.134 6.134 0 0 1 2.045.354 5.039 5.039 0 0 1 1.664.9l1.363-2.543a7.185 7.185 0 0 0-4.908-1.65 6.566 6.566 0 0 0-4.05 1.125 3.743 3.743 0 0 0-1.582 3.211 3.507 3.507 0 0 0 .743 2.25 4.867 4.867 0 0 0 1.807 1.439 22.96 22.96 0 0 0 2.127.872 9.4 9.4 0 0 1 1.793.825 1.292 1.292 0 0 1 .736 1.084 1.251 1.251 0 0 1-.525 1.07 2.5 2.5 0 0 1-1.499.382 5.93 5.93 0 0 1-4.111-1.588l-1.623 2.393a7.88 7.88 0 0 0 5.713 2.134 6.004 6.004 0 0 0 3.988-1.268 4.004 4.004 0 0 0 1.514-3.205 3.514 3.514 0 0 0-.743-2.256 4.67 4.67 0 0 0-1.821-1.412ZM174.401 25.813a2.348 2.348 0 0 1-.92-2.155v-5.672h3.224v-2.822h-3.224v-4.159l-3.627.443v12.688a6.258 6.258 0 0 0 .45 2.474 4.316 4.316 0 0 0 1.097 1.616c.458.392.982.699 1.548.907.511.209 1.044.36 1.588.45.479.07.962.104 1.446.102.17 0 .545 0 1.124-.088v-3.253a3.965 3.965 0 0 1-.681.055c-.717.003-1.42-.2-2.025-.586ZM191.67 16.78a8.529 8.529 0 0 0-11.331 0 7.125 7.125 0 0 0-2.311 5.453 7.144 7.144 0 0 0 .562 2.979 7.143 7.143 0 0 0 1.749 2.476 8.543 8.543 0 0 0 11.345 0 7.14 7.14 0 0 0 2.311-5.454 7.11 7.11 0 0 0-2.325-5.454Zm-2.577 8.72a4.363 4.363 0 0 1-6.136 0 4.475 4.475 0 0 1-1.234-3.267 4.436 4.436 0 0 1 1.254-3.245 4.097 4.097 0 0 1 3.048-1.288 4.144 4.144 0 0 1 3.068 1.288 4.421 4.421 0 0 1 1.268 3.245 4.443 4.443 0 0 1-1.268 3.266ZM76.596 23.413c0 .532 0 2.843-3.122 2.843-3.123 0-3.123-2.311-3.123-2.843v-8.447h-3.627v8.256c.048 3.709 2.127 6.688 6.743 6.688 4.615 0 6.688-2.98 6.743-6.688v-8.256h-3.627l.013 8.447ZM118.129 14.966h-4.05l-4.649 6.967V8.435l-3.627.45v20.582h3.627v-7.534l5.522 7.534h4.152l-5.857-7.534 4.882-6.967Z"
            fill="#171229"
          ></path>
          <path
            d="M10.945 22.057c0-3.905 0-5.861.763-7.354a6.98 6.98 0 0 1 3.046-3.053c1.493-.756 3.449-.756 7.36-.756h2.617c3.905 0 5.861 0 7.354.756a6.993 6.993 0 0 1 3.053 3.053c.756 1.493.756 3.449.756 7.354v2.596c0 3.905 0 5.861-.756 7.354a6.993 6.993 0 0 1-3.053 3.053c-1.493.756-3.448.756-7.354.756h-2.59c-3.911 0-5.867 0-7.36-.756a6.978 6.978 0 0 1-3.046-3.053c-.763-1.493-.763-3.449-.763-7.354l-.027-2.596Z"
            fill="#3021E5"
          ></path>
          <path
            d="M13.766 27.584c7.603 0 13.766-6.164 13.766-13.767S21.37.051 13.766.051 0 6.214 0 13.817s6.163 13.767 13.766 13.767Z"
            fill="#FC0B36"
          ></path>
          <path
            d="m16.145 19.106 2.916-2.917 9.46 10.577-1.895 1.894-10.481-9.554Z"
            fill="#fff"
          ></path>
        </svg>
      </Link>
      <div className="header__controls">
        {currentPath === "/" && (
          <button onClick={signout} className="header__signout">
            Выйти
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;

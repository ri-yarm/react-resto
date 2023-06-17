import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from './components/App/App'
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter basename='/react-resto'>
    <App />
  </BrowserRouter>
);


import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initTranslation, getLanguage } from "./utils/translate";

const language = getLanguage();
initTranslation(language);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App language={language} />
);

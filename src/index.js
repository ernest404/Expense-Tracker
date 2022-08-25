import ReactDOM from "react-dom/client"; // This a react library package, this enables a function exposed by the library available here.

import "./index.css";
import App from "./App"; // ./ means in the same directory

const root = ReactDOM.createRoot(document.getElementById("root")); //creates the main entry point of react app to the webpage index.html, the single html file we need. via root id div
root.render(<App />); //what should be rendered in the root id div. <App /> this is the main component

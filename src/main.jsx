import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import ScrollOnTop from "./ScrollonTop.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<HashRouter>
			<ScrollOnTop />
			<App />
		</HashRouter>
	</StrictMode>
);

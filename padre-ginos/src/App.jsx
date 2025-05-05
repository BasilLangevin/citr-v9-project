import { scan } from "react-scan";
import { createRoot } from "react-dom/client";
import Order from "./Order";

const App = () => {
    return (
        <div>
            <h1>Padre Gino's</h1>
            <Order />
        </div>
    );
};

scan({
    enabled: true,
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

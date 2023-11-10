import AppRouter from "./components/AppRouter.tsx";
import {BrowserRouter as Router} from "react-router-dom";

import './i18n.ts'

function App() {

    return (
        <div className="App">
            <Router>
                <AppRouter />
            </Router>
        </div>
    );
}

export default App

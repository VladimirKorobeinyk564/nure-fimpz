import {BrowserRouter as Router} from "react-router-dom";
import './i18n.ts'

import AppRouter from "./components/AppRouter.tsx";
import Header from "./components/common/header/header.tsx";

function App() {
    return (
        <div className="bg-dark-bg">
            <Router>
                <Header></Header>
                <AppRouter />
            </Router>
        </div>
    );
}

export default App;

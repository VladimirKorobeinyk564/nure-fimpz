import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";

import { store } from '@/store/store';

import './styles/index.scss'

import App from './App.tsx'
import {Toaster} from "@/components/ui/toast/toaster.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    // <React.StrictMode>
        <Provider store={store}>
            <App/>
            <Toaster />
        </Provider>
    // </React.StrictMode>
)

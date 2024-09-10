import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.jsx";
import {SnackbarProvider} from "notistack";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <SnackbarProvider maxSnack={3} anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
      }} autoHideDuration={4000}>
          <StoreContextProvider>
              <App />
          </StoreContextProvider>
      </SnackbarProvider>
  </BrowserRouter>
)

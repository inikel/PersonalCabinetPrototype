import React from 'react';
import Main from "./Main";
import '@/sass/main.sass'
import AuthContextProvider from "./contexts/authContext";
import {render} from "react-dom"

function App() {

  return (
      <AuthContextProvider>
        <Main />
      </AuthContextProvider>
  );
}

render(<App/>, document.getElementById('app'))

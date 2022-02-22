
import {BrowserRouter, Routes, Route,} from "react-router-dom"
import React from "react"
import './App.scss'
// import {authRoutes} from "pages/auth/authRoutes";
import {HomePageRoute} from '../src/containers/HomePage/HomePageRoute'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {[
              ...HomePageRoute,
              // ...authRoutes,
              // ...homeRoutes
            ].map((props, key) => <Route key={key} {...props} />)}
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

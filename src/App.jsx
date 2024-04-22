import { useState } from "react";
import "./App.css";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import AboutPage from "./pages/AboutPage";
import TestPage from "./pages/TestPage";

function App() {
// steps to use react router:
// go to https://reactrouter.com/en/main/start/tutorial to read about react router.
// in the terminal write npm install react-router-dom
// import this: import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom"; in app.jsx
// Links: are used instead of anchor tags to navigate to different pages. Instead of the usual href attribute you have to use to attribute.
// Router: Has to be wrapped over the whole application.
// Routes: Route has to be inside of Routes to be used. Everything outside of Routes (but still inside Router) will allways be shown no matter the url.
// Route: is used to render a component based on the path. The path  attribute is refering to the url. The element attribute should be the component/html elements you want to render.

  return (
    <>
      <Router>
        <header className="flex bg-slate-600">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/test">Test</Link>
        </header>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
        <footer className="flex bg-slate-600">footer</footer>
      </Router>
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


const routes = [
  { path: "/", label: "Home", component: Home },
  { path: "/about", label: "About Us", component: About },
  { path: "/contact", label: "Contact", component: Contact }
];

export default function App() {
  return (
      <Router>
          <div>
              <Header routes={routes} /> {/* Pass the routes array as a prop */}
              <Routes>
                  {routes.map((route, index) => (
                      <Route key={index} path={route.path} element={<route.component />} />
                  ))}
              </Routes>
          </div>
      </Router>
  );
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

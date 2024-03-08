// MainApp.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import Header from '../Header';

function MainApp() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* Add more routes for other dashboard pages if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default MainApp;



// import React from 'react';
// import App from '../App'; // Main content

// function MainApp() {
//   return (
//     <div className='container-fluid'>
//       <App />
//     </div>
//   );
// }

// export default MainApp;
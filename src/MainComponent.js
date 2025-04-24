import React, { useState } from 'react';
import App from './App'; // هذا هو المكون الذي تريده عند الضغط على "Call me"
import MyApp from './MyApp'; // أنشئ هذا لاحقًا إن لم يكن موجودًا

function MainComponent() {
  const [currentPage, setCurrentPage] = useState('MyApp');

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage('MyApp')}>MyApp</button>
        <button onClick={() => setCurrentPage('app')}>Call me</button>
      </nav>

      <div>
        {currentPage === 'MyApp' && <MyApp />}
        {currentPage === 'app' && <App />}
      </div>
    </div>
  );
}

export default MainComponent;

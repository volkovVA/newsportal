import React from 'react';
import NewsHeader from '../NewsHeader/NewsHeader';
import NewsList from '../NewsList/NewsList';

function App() {
  return (
    <div className="container">
      <NewsHeader />
      <NewsList />
    </div>
  );
}

export default App;

import './App.css';
import data from './data';
import React, { useState } from 'react';
import List from './List';
function App() {

  const [peoples, getPeople] = useState(data)
  return (
    <main>
      <div className="App">
        <section className="container">
          <h3>{peoples.length} Birthday Today</h3>
          <List peoples={peoples} />
          <button onClick={() => getPeople([])}>Clear ALl Birthday</button>
        </section>
      </div>
    </main>
  );
}

export default App;

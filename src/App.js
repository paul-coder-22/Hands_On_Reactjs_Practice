import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import questions from './data';
import Question from './Question';

function App() {
  const [question, getQuestion] = useState(questions);
  return (
    <main className="App">
      <div className="container">
        <h3>question and answer about logins</h3>
        <section className="info">
          {
            question.map((question) => <Question key={question.id} {...question} />)
          }
        </section>
      </div>
    </main>
  );
}

export default App;

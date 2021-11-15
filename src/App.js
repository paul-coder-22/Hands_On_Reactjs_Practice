import logo from './logo.svg';
import { FaGithubSquare } from 'react-icons/fa';
import './App.css';
import Review from './review';

function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';

function App() {
  let url = "https://course-api.com/react-tours-project";
  const [loading, getLoading] = useState(true);
  const [tours, getTours] = useState([])

  const fetchData = async () => {
    getLoading(false)
    let apiValue = await fetch(url);
    let jsonValue = await apiValue.json();
    console.log(jsonValue)
  }


  useEffect(() => {
    fetchData();
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Tours />
    </main>
  )
}

export default App;

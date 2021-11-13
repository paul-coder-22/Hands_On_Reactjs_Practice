import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';

function App() {
  let url = "https://course-api.com/react-tours-project";
  const [loading, getLoading] = useState(true);
  const [tours, getTours] = useState([])


  const removeTour = (id) => {
    const newTour = tours.filter(i => i.id !== id)
    return getTours(newTour)
  }


  const fetchData = async () => {
    getLoading(true)
    try {

      let apiValue = await fetch(url);
      let jsonValue = await apiValue.json();
      getTours(jsonValue)
      getLoading(false)
    } catch (error) {
      getLoading(false)
        (console.error)
    }
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
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App;

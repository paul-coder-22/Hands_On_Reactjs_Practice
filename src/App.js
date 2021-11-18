import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
const url = 'https://course-api.com/react-tabs-project';

function App() {

  const [loading, getApipading] = useState(true);
  const [jobs, getJobs] = useState([]);
  const [value, getValue] = useState(0);
  const fecthValue = async () => {
    const apiValue = await fetch('https://course-api.com/react-tabs-project');
    const jsonValue = await apiValue.json();
    getJobs(jsonValue);
    getApipading(false)
  }

  useEffect(() => {
    fecthValue();
  }, [])

  if (loading) {
    return (
      <section className="section loading">
        <h2>loading...</h2>
      </section>);
  }
  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section >
  )
}

export default App;

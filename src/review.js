import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from './data';
function Review(props) {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];


    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0;
        }
        if (number < 0) {
            return people.length - 1;
        }
        return number
    }

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex)
        })
    }
    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex)
        })
    }

    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className='person-img' />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevPerson} >
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={nextPerson} >
                    <FaChevronRight />
                </button>
            </div>
            <button className="random-btn" onClick={() => setIndex(Math.round(Math.random() * 3))}  >
                suprise me
            </button>
        </article>
    );
}

export default Review;
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
function Question({ title, info }) {
    const [showInfo, getInfo] = useState(false)
    return <article>
        <header>
            <h4>{title}</h4>
            <button className="btn" onClick={() => getInfo(!showInfo)}  >{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
        </header>
        <p>{showInfo && info}</p>
    </article>
}

export default Question;
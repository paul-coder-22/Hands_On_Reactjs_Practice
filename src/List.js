import React from 'react';

function List(props) {
    /*  return (
         <>
             <h2>list component</h2>
         </>
     ); */

    return props.peoples.map((e, i) => {
        const { id, name, age, image } = e;
        return (
            <article key={i} className='person'>
                <img src={image} alt={name} />
                <div>
                    <h4>{name}</h4>
                    <p>{age} years</p>
                </div>
            </article>
        )
    })
}

export default List;
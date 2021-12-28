import React, { useState, useEffect } from 'react';
import '../styles.css';


export default function MyBooks() {

    const [books, setBooks] = useState([]);
        
    useEffect(() => {
        fetch ('http://localhost:3001/books')
            .then(resp => resp.json())
            .then(data => setBooks(data))
    }, [])

   /* if (books.length > 0){
        return(
            <ul>
                {
                    books.map(b => (
                        <li key={b.id}>
                            {b.title}
                        </li>
                    ))
                }
            </ul>
        )
    }*/

    const deleteBook = ()=>{
        
    }

    return (
        <>
        <div >
           <section className="section.grid">
           {
                    books.map( b => (
                        <article className="article"
                            key={b.i}
                         >
                            <p><a href="https://google.pt">{b.title}</a></p> 
                            <h2>{b.author}</h2>
                            <img src={'../images/' + b.imageUrl} alt={b.title}/>
                            
                            <p>Already Read: {b.alreadyRead}</p>
                            <p><button onClick={deleteBook}> Delete </button></p>

                            {/*
                            <img src="../../public/livros/{b.imageUrl}" alt={b.title}/>
                            <input type="image" src="../../public/livros/"{...b.imageUrl} alt={b.title} />
                            <img src="../../public/livros/"{...b.imageUrl} alt={b.title}/>
                            */}

                        </article>

                        
                        
                    ) )
                }


           </section>


            
        </div>
        
    </>
    )
}


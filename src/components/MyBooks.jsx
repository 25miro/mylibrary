import React, { useState, useEffect} from 'react'

export default function MyBooks() {

    const [books, setBooks] = useState([]);
        
    useEffect(() => {
        fetch ('http://localhost:3001/books')
            .then(resp => resp.json())
            .then(data => setBooks(data))
    }, [])

    if (books.length > 0){
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
    }

    return (
        <div>
            Estou em books...
        </div>
    )
}

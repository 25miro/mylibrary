import React, { useState, useEffect } from 'react';
import BookList from './BookList';
  


export default function BookDashboard() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch ('http://localhost:3001/books')
        //Recebe resposta de uma promise que dizemos que o json que vem é para transformar em formato javascript 
        .then(resp => resp.json())
        //Os dados que recebo alteram o state "SetBooks"
        .then(data => setBooks(data))
}, [])

const HandleDeleteBook = (id) =>{
  //console.log('I Want to delete the Book with ID: '+ id)
  //To delete the book from the List (books), iterate the array, and create a new array 
  //without the "book" whose ID we received by BookList > Book
  setBooks(()=> books.filter(b => b.id !== id));
}



    return (
        <> 
        <section>
         
          <BookList books={books} onDelete={HandleDeleteBook} /> {/*Passar a props.... books ={books} */}
        </section>
        </>
    )
}

import React, { useState, useEffect } from 'react';
import BookList from './BookList';
  


export default function BookDashboard() {

  const [books, setBooks] = useState([]);

  const [filter, setFilter] = useState()

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
  //O setBooks cria uma arrowfunction que gera um novo array em que exclui o id 
  //Onde for dado o Click.
  setBooks(()=> books.filter(b => b.id !== id));
}



    return (
        <> 
        


        <div className="filterBook">
            {books && (
                <>
                    <p>
                        <label>Read:</label>
                        <input type="checkbox" checked={filter} 
                            onChange={({target:{checked}}) => setFilter(checked) }
                        />
                    </p>
                    {/* O Bloco abaixo indica que tudo o que esta a seguir ao && é falso e por issi fica escondido*/}
                        { 

                    
                        }
                </>
                )}
        </div>

        <section>
          
          <BookList books={books} onDelete={HandleDeleteBook} /> {/*Passar a props.... books ={books} e recebe os dados do HandleDeleteBook do Component Bookables*/}
        </section>



        </>
    )
}

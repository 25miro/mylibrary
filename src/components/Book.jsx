import React from 'react';

export default function Book(props) {
  
  let {id, title, author, imageUrl, alreadyRead} = props.books;

  const handleDelete = ()=>{
    props.onDelete(id);
  }
  
  return (
    <>
      <article className="article">
            <h1 >{title}</h1> 
            <h2 >{author}</h2>
            <img src={`images/${imageUrl}`} alt={title}/>
            {/* <img src={"livros/"+imageUrl} alt={title}/> */}
            
            <p >Already Read: {alreadyRead ? '✓' : '🗴'}</p>
            <section>
              <button onClick={handleDelete}>Delete</button>
            </section>
            

      </article>
    </>
  );
}

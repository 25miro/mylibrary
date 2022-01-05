import React from 'react';

export default function FilterBooks(props) {

    let {id} = props.books;

  const BookFilter = ()=>{
      //console.log("teste");
      props.onClick(id);
    
  }

    return (
        <>
           <div className="filterBook">
           Read:<input type="checkbox" onClick={BookFilter} />
            </div>
        </>
    )
}

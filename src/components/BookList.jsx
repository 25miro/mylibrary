import Book from './Book';


export default function BookList(props) {

    //let {id, title, author, imageURL, alreadyRead} = props.books;



    return (
           <section className="grid">
                {
                    props.books.map(b => <Book books={b} key={b.id} onDelete={props.onDelete} />)
                }
           </section>
    )
}


    //const [books, setBooks] = useState([]);
        
    /*useEffect(() => {
        fetch ('http://localhost:3001/books')
            .then(resp => resp.json())
            .then(data => setBooks(data))
    }, [])*/


   /* const deleteBook = ()=>{
             
    }*/

    /*
    
    <section className="grid">
           {
                    books.map( b => (
                        <article className="article"
                            key={b.i}
                         >
                            <p key={b.i}><a href="https://google.pt">{b.title}</a></p> 
                            <h2 key={b.i}>{b.author}</h2>
                            <img key={b.i} src={'../images/' + b.imageUrl} alt={b.title}/>
                            
                            <p key={b.i}>Already Read: {b.alreadyRead}</p>
                            <p key={b.i}><button onClick={deleteBook}> Delete </button></p>

                        </article>

                        
                        
                    ) )
                }


           </section>
    
    
    
    */

    

import React, { useState, useEffect } from 'react';
import '../styles.css';

export default function NavMenu() {

    const [items, setItems] = useState([]);
        
    useEffect(() => {
        fetch ('http://localhost:3001/navigator')
            .then(resp => resp.json())
            .then(data => setItems(data))
    }, [])




    return (
        <>
           <nav>
                <ul>
                    {
                        items.map( i => (
                        <li key={i.i}>
                            <p>{i.navname}</p>
                        </li>
                        ) )

                    }
                </ul>
           </nav>
    </>
    )
}

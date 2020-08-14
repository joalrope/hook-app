import React from 'react';
import { useEffect, useState } from 'react';

import '../../index.css';

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const { x, y } = coords;
    
    useEffect(() => {

        const mouseMove = (e) => {
            // console.log(e.X, e.Y);
            console.log(':D');
            const coords = { x: e.x, y: e.y };
            setCoords(coords);

        }
        
        console.log('Componente montado');
        window.addEventListener('mousemove', mouseMove );
        
        return () => {
            console.log('Componente desmontado');
            window.removeEventListener('mousemove', mouseMove);
        }

    }, [ ]);

    return (
        <div>
            <h3>Eres genial !!!</h3>
            <p>
                x: { x } y: { y } 
            </p>
        </div>
    );
}


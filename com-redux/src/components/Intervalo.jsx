import './Intervalo.css';
import React from 'react';
import Card from './Card';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    
    const onMinChanged = ()=>{}; 
    const onMaxChanged = () => {};
    const min = 1;
    const max = 2

    return (
        <Card 
            red
            title="Intervalo de numeros"
        >
            <div className="Intervalo">
                <span>
                    <strong>Mínimo</strong>
                    <input 
                        type="number" 
                        onChange={(e)=>onMinChanged(+e.target.value)}
                        value={min}
                    />
                </span>
                <span>
                    <strong>Máximo</strong>
                    <input 
                        type="number" 
                        onChange={(e)=>onMaxChanged(+e.target.value)}
                        value={max}
                    />
                </span>
            </div>
        </Card>
    );
}
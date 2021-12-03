import React from 'react';
import Card from './Card';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({min,max}) => {
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return (
        <Card title="Sorteio de números" purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{getRandomIntInclusive(min,max)}</strong>
                </span>
            </div>
        </Card>
    );
}
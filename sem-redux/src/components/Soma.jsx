import React from 'react';
import Card from './Card';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({min,max}) => {
    return (
        <Card title="Soma dos Números" blue>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{min+max}</strong>
                </span>
            </div>
        </Card>
    );
}
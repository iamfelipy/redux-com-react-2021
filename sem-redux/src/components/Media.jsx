import React from 'react';
import Card from './Card';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({min,max}) => {
    return (
        <Card title="Média dos Números" green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{(min+max)/2}</strong>
                </span>
            </div>
        </Card>
    );
}
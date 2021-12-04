import React from 'react';
import Card from './Card';
import {connect} from 'react-redux';

// eslint-disable-next-line import/no-anonymous-default-export
function Sorteio(props){
    const {min, max} = props;
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

function mapStateToProps(state){
  return {
    min: state.numeros.min,
    max: state.numeros.max
  }
}

export default connect(mapStateToProps)(Sorteio);
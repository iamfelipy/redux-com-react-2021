import './Intervalo.css';
import React from 'react';
import Card from './Card';
import {connect} from 'react-redux';
import {alterarNumeroMinimo} from '../store/actions/numeros';
import {alterarNumeroMaximo} from '../store/actions/numeros';

// eslint-disable-next-line import/no-anonymous-default-export
function Intervalo(props) {
    
    const {min,max} = props;
    
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
                        onChange={(e)=>props.alterarMinimo(+e.target.value)}
                        value={min}
                    />
                </span>
                <span>
                    <strong>Máximo</strong>
                    <input 
                        type="number" 
                        onChange={(e)=>props.alterarMaximo(+e.target.value)}
                        value={max}
                    />
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

function mapDispatchToProp(dispatch){
  return {
    alterarMinimo(novoNumero){
      const action = alterarNumeroMinimo(novoNumero);
      dispatch(action)
    },
    alterarMaximo(novoNumero){
      const action = alterarNumeroMaximo(novoNumero);
      dispatch(action)
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(Intervalo);
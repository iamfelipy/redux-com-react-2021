import { createStore, combineReducers } from "redux";
import numerosReducer from './reducers/numeros'

const reducers = combineReducers({
  numeros: numerosReducer,
  nomes: function (state, action) {
    console.log("Reducer Nomes...");
    console.log(state, "", action);
    return ["Jesus", "Jéssica"];
  },
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;

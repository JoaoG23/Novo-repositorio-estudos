function actionIncr( carga ) {// Somente a carga selecionada de Incremento
    return {
        type: 'INCREMENT',
        payload: carga || 1,
    }
}

const incrementAction = (carga)  =>  { return {  type:'INCREMENT', payload:carga || 1 } };
const decrementAction = (carga)  =>  { return {  type:'DECREMENT', payload:carga || 1 } };


module.exports = {
    incrementAction,
    decrementAction
}
export const CartReducer = (state,action) =>{
    switch (action.type) {
        case 'AGREGAR':
            return{cantidad: state.cantidad + 1};
        case 'RESTAR':
            return{cantidad: state.cantidads - 1};   
        default:
            return state;            
    }
}
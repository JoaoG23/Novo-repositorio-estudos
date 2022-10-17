export default function loginReducer( state = false , payload ) {
    switch ( payload.type ) {
        case 'LOGIN':
            return true;
        case 'LOGOUT':
            return false;
        default:
            return state;
    }
}
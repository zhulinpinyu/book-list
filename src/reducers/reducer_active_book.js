export default function(state=null,action){
    switch (action.typr) {
        case 'BOOK_SELECTED':
            return action.payload
            break;
        default:
            return state
    }
}

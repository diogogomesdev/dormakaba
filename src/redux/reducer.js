export default function reducer(state = {}, action){
    if(action.type === 'login'){
        return{
            user: action.payload
        }
    }else if(action.type === 'logout'){
        return{}
    }
    return state;
}
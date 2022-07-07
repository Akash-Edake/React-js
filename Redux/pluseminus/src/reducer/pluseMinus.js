const initial =0
const ChangeNum =(state=initial,action)=>{
    
    switch(action.type){
        case "INCREMENT": return state+action.payloadaabcd
        case "DECREMENT": return state-1
        default : return state
    }
    }
    export default ChangeNum
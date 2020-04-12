import * as ActionTypes from './ActionTypes';

export const Partners = (state={isLoading:true,
                            errMess: null,
                        partners:[]}, action) =>{
    switch(action.type){
        case ActionTypes.ADD_PARTNERS:
            return {...state, isLoading:false, partners: action.payload};
        
        case ActionTypes.PARTNERS_LOADING:
        return {...state, isLoading:true, partners: []};
   
        case ActionTypes.PARTNERS_FAILED:
        return {...state, isLoading:true, partners: action.payload};

        default:
        return state;
    }
}
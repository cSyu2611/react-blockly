import {UPDATE_API_RESULT} from '../actions'

const initialState = {
    apiResult: []
}

const apiResultState = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_API_RESULT:
            let newState = {...state};
            newState.apiResult = action.payload
            return newState
        default:
            return state
    }
}

export default apiResultState
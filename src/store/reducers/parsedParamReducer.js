import {UPDATE_PARSED_PARAM} from '../actions'

const initialState = {
    parsedParam: {}
}

const parsedParamState = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_PARSED_PARAM:
            let newState = {...state};
            newState.parsedParam = action.payload
            return newState
        default:
            return state
    }
}

export default parsedParamState
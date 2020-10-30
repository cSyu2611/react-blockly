import {UPDATE_WORK_SPACE} from '../actions'

const initialState = {
    workSpace: {}
}

const workSpaceState = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_WORK_SPACE:
            let newState = {...state};
            newState.workSpace = action.payload
            return newState
        default:
            return state
    }
}

export default workSpaceState
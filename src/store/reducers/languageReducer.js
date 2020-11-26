import {SET_LANGUAGE} from '../actions';

const initialState = {
    language: 'ja'
}

const languageState = (state = initialState, action) => {
    let nextState = {...state};
    switch(action.type){
        case SET_LANGUAGE:
            nextState.language = action.language;
            console.log(nextState.language)
            break;
        default:
            return state;
    }
    return nextState;
}

export default languageState;
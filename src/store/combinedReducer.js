import {combineReducers} from 'redux';

import workSpaceState from './reducers/workSpaceReducer'
import parsedParamState from './reducers/parsedParamReducer'
import apiResultState from './reducers/apiResultReducer'
import languageState from './reducers/languageReducer'


const combinedReducer = combineReducers({
    workSpaceState: workSpaceState,
    parsedParamState: parsedParamState,
    apiResultState: apiResultState,
    languageState: languageState
})

export default combinedReducer
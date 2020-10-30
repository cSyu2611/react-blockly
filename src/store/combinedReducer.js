import {combineReducers} from 'redux';

import workSpaceState from './reducers/workSpaceReducer'
import parsedParamState from './reducers/parsedParamReducer'
import apiResultState from './reducers/apiResultReducer'


const combinedReducer = combineReducers({
    workSpaceState: workSpaceState,
    parsedParamState: parsedParamState,
    apiResultState: apiResultState
})

export default combinedReducer
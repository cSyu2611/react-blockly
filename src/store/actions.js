// ワークスペースの更新
export const UPDATE_WORK_SPACE = "UPDATE_WORK_SPACE"
export const updateWorkSpace = workSpace => {
    return {
        type: UPDATE_WORK_SPACE,
        payload: workSpace
    }
}

// 通信パラメータの更新
export const UPDATE_PARSED_PARAM = "UPDATE_PARSED_PARAM";
export const updateParsedParam = parsedParam => {
    return {
        type: UPDATE_PARSED_PARAM,
        payload: parsedParam
    }
}

// APIの結果を更新
export const UPDATE_API_RESULT = "UPDATE_API_RESULT";
export const updateApiResult = apiResult => {
    return {
        type: UPDATE_API_RESULT,
        payload: apiResult
    }
}
import * as actionTypes from './actionsTypes';

const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
}

export const storeResult = (res) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(saveResult(res))
        }, 1000);
    }

};

export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    };
};
import { FETCH_ITEM_LIST } from './Types';

const loadList = (data) => {
    return dispatch => {
        return dispatch({
            type: FETCH_ITEM_LIST,
            payload: data
        });
    }
};

export default loadList;

import { FETCH_ITEM_LIST } from '../actions/Types';

export default ( state = { data:{}, }, action) => {
    const { type, payload } = action;
    switch (type){
        case FETCH_ITEM_LIST: {
            state={
                ...state,
                data: payload || {}
            };
            return state;

        }
        default: return state;
    }
}

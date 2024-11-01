import * as actionTypes from '../actions/actionTypes';

const initialState = {
    SelfInfo                : null,
    Notifications           : null,
};

/**
 * @typedef {Object} Action
 * @property {string} type
 * @property {any} data
 */

/**
 * @param {Object} state
 * @param {Action} action
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SELF_INFO:
        console.log("SET_SELF_INFO", action.data);

        return {
            ...state,
            SelfInfo: action.data,
        };

    case actionTypes.SET_NOTIFICATIONS:
        return {
            ...state,
            Notifications: action.data,
        };


    default:
      return state;
  }
};

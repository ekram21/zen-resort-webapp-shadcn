import * as actionTypes from '../actions/actionTypes';

const initialState = {
  login: {
    success: true,
  },
  user: {
    lang: 'en',
  },
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
    case actionTypes.LOGIN:
      return {
        login: action.data,
      };
    default:
      return state;
  }
};

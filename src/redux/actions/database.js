import * as actionTypes from './actionTypes';

const setSelfInfo = (data) => {
  return {
    type: actionTypes.SET_SELF_INFO,
    data,
  };
};


const setNotifications = (data) => {
    return {
      type: actionTypes.SET_NOTIFICATIONS,
      data,
    };
};




export const onSetSelfInfo = (data) => (dispatch) => {
    dispatch(setSelfInfo(data));
};


export const onSetNotifications = (data) => (dispatch) => {
    dispatch(setNotifications(data));
};

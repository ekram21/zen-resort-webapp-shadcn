import * as actionTypes from './actionTypes';
import { Dispatch } from 'redux';

interface SELF_INFO {
    name: string;
    email: string;
    phone: string;
    uid: string;
    photo: string;
}

interface EachNotificationObject {
    title: string;
    content: string;
}
  
interface AllNotificationList {
    [key: string]: EachNotificationObject;
}

const setSelfInfo = (data: SELF_INFO) => {
  return {
    type: actionTypes.SET_SELF_INFO,
    data,
  };
};


const setNotifications = (data: AllNotificationList) => {
    return {
      type: actionTypes.SET_NOTIFICATIONS,
      data,
    };
};




export const onSetSelfInfo = (data: SELF_INFO) => (dispatch: Dispatch) => {
    dispatch(setSelfInfo(data));
};


export const onSetNotifications = (data: AllNotificationList) => (dispatch: Dispatch) => {
    dispatch(setNotifications(data));
};

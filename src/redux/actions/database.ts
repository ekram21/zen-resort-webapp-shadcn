import * as actionTypes from './actionTypes';


interface SELF_INFO {
    name        : string;
    email       : string;
    phone       : string;
    photo       : string;
}

interface EachNotificationObject {
    title: string;
    content: string;
}
  
interface AllNotificationList {
    [key: string]: EachNotificationObject;
}

export const setSelfInfo = (data: SELF_INFO) => {
    console.log('Setting SelfInfo in LocalDB: ', data);
    return {
        type: actionTypes.SET_SELF_INFO,
        data,
    };
};


export const setNotifications = (data: AllNotificationList) => {
    return {
      type: actionTypes.SET_NOTIFICATIONS,
      data,
    };
};

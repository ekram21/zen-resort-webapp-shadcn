import * as actionTypes from './actionTypes';
import { Dispatch } from 'redux';

const changeTheme = (theme:string) => {
  return {
    type: actionTypes.CHANGE_THEME,
    theme,
  };
};

const changeFont = (font:string) => {
  return {
    type: actionTypes.CHANGE_FONT,
    font,
  };
};

const forceTheme = (force_dark:string) => {
  return {
    type: actionTypes.FORCE_APPEARANCE,
    force_dark,
  };
};

const changeLanguage = (language:string) => {
  return {
    type: actionTypes.CHANGE_LANGUAGE,
    language,
  };
};

export const setIntro = (intro:boolean) => {
  return {
    type: actionTypes.SET_INTRO,
    intro,
  };
};













export const onChangeTheme = (theme:string) => (dispatch: Dispatch) => {
  dispatch(changeTheme(theme));
};

export const onForceTheme = (mode:string) => (dispatch: Dispatch) => {
  dispatch(forceTheme(mode));
};

export const onChangeFont = (font:string) => (dispatch: Dispatch) => {
  dispatch(changeFont(font));
};

export const onChangeLanguage = (language:string) => (dispatch: Dispatch) => {
  dispatch(changeLanguage(language));
};

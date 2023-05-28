import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action, ActionCreator, Dispatch } from 'redux';

import { store } from '../store';
import { TIngredientsActions } from '../actions/ingredients';
import { TOrderActions } from '../actions/order';
import { TOrdersActions } from '../actions/orders';
import { TPopupActions } from '../actions/popup';
import { TProfileActions } from '../actions/profile';

export type RootState = ReturnType<typeof store.getState>; 

export type TApplicationActions = 
  | TIngredientsActions
  | TOrderActions
  | TOrdersActions
  | TPopupActions
  | TProfileActions;

export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TApplicationActions>>; 

export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;


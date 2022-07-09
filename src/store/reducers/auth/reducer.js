import { SET_STATE } from './actions';

const initialState = {
  loading: false,
  error: null,
  userInfo: null,
  form: {}
};

export default function assessmentReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

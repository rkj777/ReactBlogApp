import { combineReducers } from 'redux';
import PostReducer from './reducerPost';

const rootReducer = combineReducers({
  posts: PostReducer
});

export default rootReducer;

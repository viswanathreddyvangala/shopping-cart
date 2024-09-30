import centeralReducer from './redux/reducers/main';
import { createStore } from 'redux';

const centralStore = createStore(centeralReducer);

export default centralStore;
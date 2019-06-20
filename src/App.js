import React from 'react';
import './App.css';
import reducers from './store/reducers/index';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import MainApp from './containers/MainApp/MainApp';


const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

const App = () => {
    return (
        <Provider store={store}>
            <MainApp/>
        </Provider>
    )
};

export default App;

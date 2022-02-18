import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// import App from './components/App'
// import reducers from './reducers'

//Thunk section
import App from './componentsThunk/App'
import reducers from './reducers/indexThunk'

const store = createStore(reducers, applyMiddleware(thunk))

ReactDom.render(
<Provider store={store}>
    <App/>
</Provider>,
document.querySelector('#root'))

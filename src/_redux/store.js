// import { createStore, applyMiddleware, compose } from "redux";

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composer(applyMiddleware(thunk)));

export default store;

// import thunk from "redux-thunk";
// import rootReducer from "./reducers";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: `root`,
//   storage: storage,
// };

// const pReducer = persistReducer(persistConfig, rootReducer);

// const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(pReducer, composer(applyMiddleware(thunk)));
// const persistor = persistStore(store);

// export { store, persistor };

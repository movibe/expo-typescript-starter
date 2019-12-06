import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore, StoreCreator } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { persistReducer, persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootEpic } from './rootEpic';
import rootReducer from './reducers';

const blackList = [ '' ];
const epicMiddleware = createEpicMiddleware();

const persistConfig = {
	blackList,
	key: 'root',
	storage: AsyncStorage
};

const middleware = [ epicMiddleware ];

const enhancers = __DEV__ ? composeWithDevTools({})(applyMiddleware(...middleware)) : applyMiddleware(...middleware);

const reducers = persistReducer(persistConfig, rootReducer);

export const configureStore = (_clean: boolean = false, epic: boolean = false): any => {
	const create: StoreCreator = createStore;

	const store = create(reducers, enhancers);
	const persister = persistStore(store);

	if (epic) epicMiddleware.run(rootEpic);

	// Clear Store
	if (_clean) persister.purge();

	return { persister, store };
};

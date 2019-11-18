import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink, split } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { onError } from 'apollo-link-error';
// import { withClientState } from 'apollo-link-state'
// import { initialState } from '../store/initialState'
// import alertResolver from '../store/resolvers/client/alert'
// import notificationResolver from '../store/resolvers/client/notification'
// import messageResolver from '../store/resolvers/client/message'
import { graphqlUrl, subscriptionUrl } from 'config';
import { AsyncStorage } from 'react-native';

export * from './firebase';
export * from './auth.service';

// Instance of a cache
const cache = new InMemoryCache();

// const stateLink = withClientState({
//   cache,
//   defaults: initialState,
//   resolvers: {
//     Mutation: {
//       ...alertResolver,
//       ...notificationResolver,
//       ...messageResolver
//     }
//   }
// })

// pass authentication header when exists
const authMiddleware = setContext(async (_req, { headers }) => {
	const token = await AsyncStorage.getItem('token');

	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : ''
		}
	};
});

// Set up subscription
const wsLink = new WebSocketLink({
	uri: subscriptionUrl,
	options: {
		reconnect: true
	}
});

// Set up http link
const httpLink = new HttpLink({
	uri: graphqlUrl
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
	// split based on operation type
	({ query }) => {
		const { kind, operation }: any = getMainDefinition(query);
		return kind === 'OperationDefinition' && operation === 'subscription';
	},
	wsLink,
	httpLink
);

//log errors to the console
const logErrors = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors)
		graphQLErrors.map(({ message, locations, path }) =>
			console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
		);
	if (networkError) console.log(`[Network error]: ${networkError}`);
});

// Apollo
export const client = new ApolloClient({
	link: ApolloLink.from([
		logErrors,
		// stateLink,
		authMiddleware,
		httpLink,
		link
	]),
	cache
});

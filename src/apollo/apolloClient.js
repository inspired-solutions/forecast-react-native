import ApolloClient from 'apollo-boost';
import { currencyQuery } from '../../src/apollo/queries';

export default client = new ApolloClient({
      uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql'
    });

export const fetchCurrency = async currency => {
  try {
    return await client.query({
			query: currencyQuery,
			variables: { currency }
		})
  }catch(e){
    return e;
  }
}
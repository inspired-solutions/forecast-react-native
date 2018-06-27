import gql from 'graphql-tag';

export const currencyQuery = gql`
  query currency($currency: String!) {
    rates(currency: $currency) {
      currency
    }
  }`;
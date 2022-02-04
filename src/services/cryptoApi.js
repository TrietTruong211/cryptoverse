import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '1d5e2fc23emsh6a2f4cbbfe989a3p135befjsndaac2a91652a'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

// A function for adding the header to the request
const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

// Creating api to fetch data from rapid API
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history/?timePeriod=${timePeriod}`)
        })
    })
})

// Redux create a hook for this api
export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi

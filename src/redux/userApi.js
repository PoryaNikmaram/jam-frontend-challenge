import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { gql } from '@apollo/client'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://188.121.106.177:4000/' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => gql`
        query {
          getUsers {
            id
            username
            email
            address
          }
        }
      `,
    }),
    createUser: builder.mutation({
      query: (body) => ({
        document: gql`
          mutation ($input: CreateUserInput!) {
            createUser(input: $input) {
              id
              username
              email
              address
            }
          }
        `,
        variables: {
          input: body,
        },
      }),
    }),
  }),
})

export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useGetUserQuery,
  useLoginQuery,
  useLogoutQuery,
} = userApi

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { gql } from '@apollo/client'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://188.121.106.177:4000' }),
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
    login: builder.mutation({
      query: ({ username, password }) => {
        // یک نکته چون پروسه لاگین کردن میوتیشن محسوب میشه فکر میکنم کد باید به شکل زیر باشه :
        // document: gql`
        //     mutation login($username: String!, $password: String!) {
        //       login(username: $username, password: $password) {
        //         token
        //         user {
        //           id
        //           username
        //           email
        //           address
        //         }
        //       }
        //     }
        //   `,
        // ولی چون بکند از کوئری استفاده کرده منم از کوئری استفاده کردم که فکر میکنم درست نباشه این قسمت  ممنون میشم یه راهنمایی بکنید
        return {
          document: gql`
            query login($username: String!, $password: String!) {
              login(username: $username, password: $password) {
                token
                user {
                  id
                  username
                  email
                  address
                }
              }
            }
          `,
          variables: {
            username,
            password,
          },
        }
      },
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
    updateUser: builder.mutation({
      query: (params) => {
        const id = params.id
        const input = params.body
        return {
          document: gql`
            mutation ($id: ID!, $input: UpdateUserInput!) {
              updateUser(id: $id, input: $input) {
                id
                username
                email
                address
              }
            }
          `,
          variables: {
            id,
            input,
          },
        }
      },
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        document: gql`
          mutation ($id: ID!) {
            deleteUser(id: $id) {
              id
            }
          }
        `,
        variables: {
          id,
        },
      }),
    }),
    getUser: builder.query({
      query: (id) => ({
        document: gql`
          query ($id: ID!) {
            getUser(id: $id) {
              id
              username
              email
              address
            }
          }
        `,
        variables: {
          id,
        },
      }),
    }),
    logout: builder.query({
      query: () => gql`
        query {
          logout {
            message
          }
        }
      `,
    }),
  }),
})
export const {
  useGetUsersQuery,
  useLoginMutation,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useGetUserQuery,
  useLogoutQuery,
} = userApi

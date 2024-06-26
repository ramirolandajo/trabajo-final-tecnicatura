import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../firebase/fbDatabase";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    endpoints: (builder) => ({
        getProfileImage: builder.query({
            query: (localId) => `profileImages/${localId}.json`,
        }),
        postProfileImage: builder.mutation({
            query: ({ localId, image }) => ({
                url: `profileImages/${localId}.json`,
                method: "PUT",
                body: {
                    image: image,
                },
            }),
        }),
        getUserData: builder.query({
            query: (localId) => `users.json?orderBy=%22localId%22&equalTo=%22${localId}%22`,
            transformResponse: (response) => {
                const userId = Object.keys(response)[0];
                return response[userId];
            }
        }),
        postUser: builder.mutation({
            query: ({ ...user }) => ({
                url: `users.json`,
                method: "POST",
                body: user
            })
        }),
        postUserFollowing: builder.mutation({
            query: ({ localId, newFollowing, listFollowing }) => ({
                url: `users/${localId}.json`,
                method: "PATCH",
                body: {
                    listFollowing: { ...listFollowing, newFollowing }
                }
            })
        }),
        postResenia: builder.mutation({
            query: ({...resenia}) => ({
                url: `resenias.json`,
                method: "POST",
                body: resenia
            })
        }),
        getResenias: builder.query({
            query: () => 'resenias.json'
        }),
        postSaveResenia: builder.mutation({
            query: ({localId, resenia}) => ({
                url: `savedResenias/${localId}.json`,
                method: "POST",
                body: resenia
            })
        }),
        getSavedResenias: builder.query({
            query: (localId) => `savedResenias/${localId}.json`
        }),
        getUsers: builder.query({
            query: () => `users.json`
        })
    })
});

export const { usePostProfileImageMutation, usePostUserMutation, usePostUserFollowingMutation, useGetUserDataQuery, usePostReseniaMutation, useGetReseniasQuery, useGetProfileImageQuery, usePostSaveReseniaMutation, useGetSavedReseniasQuery, useGetUsersQuery } = userApi;

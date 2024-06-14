import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {base_url} from "../firebase/fbDatabase";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({baseUrl: base_url}),
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
            query: (localId) => `users/${localId}.json`,
        }),
        postUser: builder.mutation({
            query: ({...user}) => ({
                url: `users.json`,
                method: "POST",
                body: user
            })
        }),
        postUserFollowing: builder.mutation(({
            query: ({localId, newFollowing, listFollowing}) => ({
                url: `users/${localId}json`,
                method: "PATCH",
                body: {
                    listFollowing: ({...listFollowing, newFollowing})
                }
            })
        }))
    })
})

export const {usePostProfileImageMutation, usePostUserMutation, usePostUserFollowing, useGetUserDataQuery} = userApi
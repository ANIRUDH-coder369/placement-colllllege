import { DELETE, GET, POST, UPDATE } from "@/types/APPLY"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const ApplyApi = createApi({
    reducerPath: "ApplyApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/Apply",
        credentials: 'include'
    }),
    endpoints: (builder) => {
        return {
            applyGet: builder.query<GET, void>({
                query: () => {
                    return {
                        url: "/read",
                        method: "GET"
                    }
                },
            }),
            applyAdd: builder.mutation<void, POST>({
                query: userData => {
                    return {
                        url: "/post",
                        method: "POST",
                        body: userData
                    }
                },
            }),
            applyUpdate: builder.mutation<void, UPDATE>({
                query: userData => {
                    return {
                        url: "/update/" + userData._id,
                        method: "PUT",
                        body: userData
                    }
                },
            }),
            applyDelete: builder.mutation<void, DELETE>({
                query: userData => {
                    return {
                        url: "/delete/" + userData._id,
                        method: "DELETE",
                    }
                },
            }),

        }
    }
})

export const { useApplyAddMutation, useApplyDeleteMutation, useApplyGetQuery, useApplyUpdateMutation } = ApplyApi

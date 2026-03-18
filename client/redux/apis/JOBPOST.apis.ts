import { JOBPOST_CREATE_REQUEST, JOBPOST_DELETE, JOBPOST_GET_RESPONSE, JOBPOST_UPDATE_REQUEST } from "@/types/JOBPOST"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const JOBPOSTApi = createApi({
    reducerPath: "JOBPOSTApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/job",
        credentials: "include"
    }),
    endpoints: (builder) => {
        return {
            jobGet: builder.query<JOBPOST_GET_RESPONSE, void>({
                query: () => {
                    return {
                        url: "/jobRead",
                        method: "GET"
                    }
                },
            }),
            JOBPOST_CREATE: builder.mutation<void, JOBPOST_CREATE_REQUEST>({
                query: userData => {
                    return {
                        url: "/jobPost",
                        method: "POST",
                        body: userData
                    }
                },
            }),
            jobpost_update: builder.mutation<void, JOBPOST_UPDATE_REQUEST>({
                query: userData => {
                    return {
                        url: "/jobUpdate/" + userData._id,
                        method: "PUT",
                        body: userData
                    }
                },
            }),
            jobpost_delete: builder.mutation<void, JOBPOST_DELETE>({
                query: userData => {
                    return {
                        url: "/jobDelete/" + userData._id,
                        method: "DELETE",
                    }
                },
            }),

        }
    }
})

export const { useJOBPOST_CREATEMutation, useJobGetQuery, useJobpost_updateMutation,
    useJobpost_deleteMutation
} = JOBPOSTApi


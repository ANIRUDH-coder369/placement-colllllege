import { ADMIN } from "@/types/Admin"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminAPi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/admin",
        credentials: "include"
    }),
    endpoints: (builder) => {
        return {
            getUsers: builder.query({
                query: () => {
                    return {
                        url: "/apiEndPoint",
                        method: "GET"
                    }
                },
            }),
            addAdmin: builder.mutation<void, ADMIN>({
                query: userData => {
                    return {
                        url: "/adminLogin",
                        method: "POST",
                        body: userData
                    }
                },
            }),

        }
    }
})

export const { useAddAdminMutation } = adminAPi

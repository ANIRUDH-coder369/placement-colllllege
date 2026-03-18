import { COMPANY_DELETE, COMPANY_GET, REGISTER_CCOMPANY_REQUEST } from "@/types/Register"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const registerApi = createApi({
    reducerPath: "registerApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/auth",
        credentials: "include"
    }),
    endpoints: (builder) => {
        return {
            getCompany: builder.query<COMPANY_GET, void>({
                query: () => {
                    return {
                        url: "/readCompany",
                        method: "GET"
                    }
                },
            }),
            registerCompany: builder.mutation<void, REGISTER_CCOMPANY_REQUEST>({
                query: userData => {
                    return {
                        url: "/registerCompany",
                        method: "POST",
                        body: userData
                    }
                },
            }),
            deleteComapany: builder.mutation<void, COMPANY_DELETE>({
                query: userData => {
                    return {
                        url: "/deleteCompany/" + userData._id,
                        method: "DELETE",
                    }
                },
            }),

        }
    }
})

export const { useRegisterCompanyMutation, useGetCompanyQuery, useDeleteComapanyMutation } = registerApi

import { STUDENT_DELETE_REQUEST, STUDENT_LOGIN, STUDENT_READ_REQUEST, STUDENT_REGISTER_REQUEST, STUDENT_UPDATE_REQUEST } from "@/types/Student"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const StudentApi = createApi({
    reducerPath: "StudentApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/student",
        credentials: "include"
    }),
    endpoints: (builder) => {
        return {
            getStudent: builder.query<STUDENT_READ_REQUEST, void>({
                query: () => {
                    return {
                        url: "/readTpo",
                        method: "GET"
                    }
                },
            }),
            Student_regsiter: builder.mutation<void, STUDENT_REGISTER_REQUEST>({
                query: userData => {
                    return {
                        url: "/registerTpo",
                        method: "POST",
                        body: userData
                    }
                },
            }),
            student_update: builder.mutation<void, STUDENT_UPDATE_REQUEST>({
                query: userData => {
                    return {
                        url: "/updateTpo/" + userData._id,
                        method: "PUT",
                        body: userData
                    }
                },
            }),
            student_delete: builder.mutation<void, STUDENT_DELETE_REQUEST>({
                query: userData => {
                    return {
                        url: "/deleteTpo/" + userData._id,
                        method: "DELETE",
                    }
                },
            }),
            student_login: builder.mutation<void, STUDENT_LOGIN>({
                query: userData => {
                    return {
                        url: "/studentLogin",
                        method: "POST",
                        body: userData
                    }
                },
            }),

        }
    }
})

export const { useStudent_regsiterMutation, useGetStudentQuery, useStudent_updateMutation, useStudent_deleteMutation, useStudent_loginMutation } = StudentApi

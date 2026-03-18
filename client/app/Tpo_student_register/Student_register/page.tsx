"use client"

import { useGetStudentQuery, useStudent_deleteMutation, useStudent_regsiterMutation, useStudent_updateMutation } from "@/redux/apis/Student"
import { STUDENT_DELETE_REQUEST, STUDENT_REGISTER_REQUEST } from "@/types/Student"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import z, { ZodType } from "zod"

const Student = () => {

    const [kite] = useStudent_regsiterMutation()
    const { data } = useGetStudentQuery()
    const [laptop] = useStudent_updateMutation()
    const [bag] = useStudent_deleteMutation()
    const router = useRouter()

    const [select, setselect] = useState<string | null>(null)

    const registerSchema = z.object({
        name: z.string().min(1),
        email: z.string().min(1),
        password: z.string().min(1)
    }) satisfies ZodType<STUDENT_REGISTER_REQUEST>

    const { handleSubmit, register, reset } = useForm<STUDENT_REGISTER_REQUEST>({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        },
        resolver: zodResolver(registerSchema)
    })

    const handleRegister = async (jack: STUDENT_REGISTER_REQUEST) => {
        try {

            if (select) {
                await laptop({ ...jack, _id: select }).unwrap()
                setselect(null)
            } else {
                await kite(jack).unwrap()
            }

            reset()

        } catch (error) {
            console.log(error)
        }
    }

    const handle_return_value = (item: any) => {
        reset({
            name: item.name,
            email: item.email,
            password: item.password
        })
        setselect(item._id)
    }

    const handleDelete = async (jack: STUDENT_DELETE_REQUEST) => {
        try {
            await bag(jack).unwrap()
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <div className="min-h-screen bg-gray-100 p-10">

            {/* FORM CARD */}

            <div className="bg-white shadow-lg rounded-xl p-8 w-100 mx-auto mb-10">

                <h2 className="text-2xl font-semibold text-center mb-6">
                    Student Registration
                </h2>

                <form
                    onSubmit={handleSubmit(handleRegister)}
                    className="flex flex-col gap-4"
                >

                    <input
                        {...register("name")}
                        placeholder="Name"
                        className="border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        {...register("email")}
                        placeholder="Email"
                        className="border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        {...register("password")}
                        placeholder="Password"
                        className="border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
                    />

                    {
                        select
                            ? <button className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600">
                                Update Student
                            </button>

                            : <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                                Add Student
                            </button>
                    }

                </form>

            </div>


            {/* STUDENT TABLE */}

            {
                data &&

                <div className="bg-white shadow-lg rounded-xl p-6 mb-10">

                    <h2 className="text-xl font-semibold mb-4">
                        Student List
                    </h2>

                    <table className="w-full border-collapse">

                        <thead>
                            <tr className="bg-gray-200 text-gray-700">
                                <th className="p-3 border">Name</th>
                                <th className="p-3 border">Email</th>
                                <th className="p-3 border">Password</th>
                                <th className="p-3 border">Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                data.result.map((item: any) => (

                                    <tr
                                        key={item._id}
                                        className="text-center hover:bg-gray-50"
                                    >

                                        <td className="p-3 border">
                                            {item.name}
                                        </td>

                                        <td className="p-3 border">
                                            {item.email}
                                        </td>

                                        <td className="p-3 border">
                                            {item.password}
                                        </td>

                                        <td className="p-3 border space-x-2">

                                            <button
                                                onClick={() => handle_return_value(item)}
                                                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                                            >
                                                Edit
                                            </button>

                                            <button
                                                onClick={() => handleDelete({ _id: item._id })}
                                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>

                                ))
                            }

                        </tbody>

                    </table>

                </div>
            }


            {/* NAVIGATION BUTTONS */}

            <div className="flex justify-center gap-6">

                <button
                    onClick={() =>
                        router.push("/Tpo_student_register/Student_register/Company")
                    }
                    className="bg-purple-500 text-white px-5 py-2 rounded-md hover:bg-purple-600"
                >
                    Company Management
                </button>

                <button
                    onClick={() =>
                        router.push("/Tpo_student_register/Student_register/Company/Job")
                    }
                    className="bg-indigo-500 text-white px-5 py-2 rounded-md hover:bg-indigo-600"
                >
                    Job Management
                </button>

            </div>

        </div>
    )
}

export default Student

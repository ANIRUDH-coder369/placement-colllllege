"use client"

import { useStudent_loginMutation } from "@/redux/apis/Student"
import { STUDENT_LOGIN } from "@/types/Student"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import z, { ZodType } from "zod"

const Login = () => {

    const [kite] = useStudent_loginMutation()
    const router = useRouter()

    const loginSchema = z.object({
        email: z.string().min(1),
        password: z.string().min(1),
    }) satisfies ZodType<STUDENT_LOGIN>

    const { handleSubmit, register } = useForm<STUDENT_LOGIN>({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: zodResolver(loginSchema)
    })

    const handleKite = async (data: STUDENT_LOGIN) => {
        try {
            await kite(data).unwrap()
            router.push("/Student/StudentShow_job")
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <div className="flex items-center justify-center min-h-screen bg-gray-100">

            <div className="bg-white p-8 rounded-xl shadow-lg w-87.5">

                <h2 className="text-2xl font-semibold text-center mb-6">
                    Student Login
                </h2>

                <form
                    onSubmit={handleSubmit(handleKite)}
                    className="flex flex-col gap-4"
                >

                    <input
                        type="email"
                        {...register("email")}
                        placeholder="Enter Email"
                        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        type="password"
                        {...register("password")}
                        placeholder="Enter Password"
                        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
                    >
                        Login
                    </button>

                </form>

            </div>

        </div>

    )
}

export default Login

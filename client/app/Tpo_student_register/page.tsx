"use client"

import { useAddAdminMutation } from "@/redux/apis/Admin.apis"
import { ADMIN } from "@/types/Admin"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import z, { ZodType } from "zod"

const LoginTpo = () => {

    const [admin] = useAddAdminMutation()
    const router = useRouter()

    const adminSchema = z.object({
        email: z.string().min(1),
        password: z.string().min(1)
    }) satisfies ZodType<ADMIN>

    const { handleSubmit, register, reset } = useForm<ADMIN>({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: zodResolver(adminSchema)
    })

    const handleLogin = async (jack: ADMIN) => {
        try {
            await admin(jack).unwrap()
            router.push("/Tpo_student_register/Student_register")
            reset()
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <div className="min-h-screen bg-gray-100 flex items-center justify-center">

            <div className="bg-white shadow-lg rounded-xl p-8 w-87.5">

                <h2 className="text-2xl font-semibold text-center mb-6 text-blue-600">
                    TPO Login
                </h2>

                <form
                    onSubmit={handleSubmit(handleLogin)}
                    className="flex flex-col gap-4"
                >

                    <input
                        {...register("email")}
                        placeholder="Email"
                        className="border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        {...register("password")}
                        placeholder="Password"
                        type="password"
                        className="border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
                    />

                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                    >
                        Login
                    </button>

                </form>

            </div>

        </div>
    )
}

export default LoginTpo

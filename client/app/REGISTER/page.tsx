"use client"

import { useRegisterCompanyMutation } from "@/redux/apis/auth.apis"
import { REGISTER_CCOMPANY_REQUEST } from "@/types/Register"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import z, { ZodType } from "zod"

const Register = () => {

    const [laptop] = useRegisterCompanyMutation()
    const router = useRouter()

    const registerCompany_Schema = z.object({
        name: z.string().min(1),
        email: z.string().min(1),
        address: z.string().min(1)
    }) satisfies ZodType<REGISTER_CCOMPANY_REQUEST>

    const { handleSubmit, reset, register } = useForm<REGISTER_CCOMPANY_REQUEST>({
        defaultValues: {
            name: '',
            email: "",
            address: ""
        },
        resolver: zodResolver(registerCompany_Schema)
    })

    const handleRegister = async (data: REGISTER_CCOMPANY_REQUEST) => {
        try {
            await laptop(data).unwrap()
            router.push("/REGISTER/JOBPOST")
            reset()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">

            <div className="bg-white p-8 rounded-xl shadow-lg w-87.5">

                <h2 className="text-2xl font-semibold text-center mb-6">
                    Register Company
                </h2>

                <form
                    onSubmit={handleSubmit(handleRegister)}
                    className="flex flex-col gap-4"
                >

                    <input
                        type="text"
                        {...register("name")}
                        placeholder="Enter Name"
                        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        type="text"
                        {...register("email")}
                        placeholder="Enter Email"
                        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        type="text"
                        {...register("address")}
                        placeholder="Enter Address"
                        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
                    >
                        Add Company
                    </button>

                </form>
            </div>

        </div>
    )
}

export default Register

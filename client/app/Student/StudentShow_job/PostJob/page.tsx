"use client"

import { useApplyAddMutation, useApplyDeleteMutation, useApplyGetQuery, useApplyUpdateMutation } from "@/redux/apis/APPLY.apis"
import { DELETE, POST } from "@/types/APPLY"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import z, { ZodType } from "zod"

const PostJob = () => {

    const [select, setSelect] = useState<string | null>(null)

    const [bag] = useApplyAddMutation()
    const { data } = useApplyGetQuery()
    const [laptop] = useApplyUpdateMutation()
    const [remove] = useApplyDeleteMutation()

    const applySchema = z.object({
        name: z.string().min(1),
        education: z.string().min(1),
        experience: z.string().min(1),
        done_project: z.string().min(1),
        skills: z.string().min(1)
    }) satisfies ZodType<POST>

    const { handleSubmit, register, reset } = useForm<POST>({
        defaultValues: {
            name: "",
            education: "",
            experience: "",
            done_project: "",
            skills: ""
        },
        resolver: zodResolver(applySchema)
    })

    const handleCreate = async (jack: POST) => {
        try {

            if (select) {
                await laptop({ ...jack, _id: select }).unwrap()
                setSelect(null)
            } else {
                await bag(jack).unwrap()
            }

            reset()

        } catch (error) {
            console.log(error)
        }
    }

    const handleReturn = (item: any) => {
        reset({
            name: item.name,
            education: item.education,
            experience: item.experience,
            done_project: item.done_project,
            skills: item.skills
        })
        setSelect(item._id)
    }

    const handleDelete = async (jack: DELETE) => {
        try {
            await remove(jack).unwrap()
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <div className="min-h-screen bg-gray-100 p-10">

            {/* FORM CARD */}

            <div className="bg-white shadow-lg rounded-xl p-8 w-100 mx-auto mb-10">

                <h2 className="text-2xl font-semibold text-center mb-6">
                    Apply For Job
                </h2>

                <form
                    onSubmit={handleSubmit(handleCreate)}
                    className="flex flex-col gap-4"
                >

                    <input
                        {...register("name")}
                        placeholder="Name"
                        className="border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        {...register("education")}
                        placeholder="Education"
                        className="border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        {...register("experience")}
                        placeholder="Experience"
                        className="border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        {...register("done_project")}
                        placeholder="Completed Projects"
                        className="border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        {...register("skills")}
                        placeholder="Skills"
                        className="border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
                    />

                    {
                        select
                            ? <button className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600">
                                Update
                            </button>
                            : <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                                Apply
                            </button>
                    }

                </form>

            </div>


            {/* TABLE */}

            {
                data &&

                <div className="bg-white shadow-lg rounded-xl p-6">

                    <h2 className="text-xl font-semibold mb-4">
                        Applied Candidates
                    </h2>

                    <table className="w-full border-collapse">

                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-3 border">Name</th>
                                <th className="p-3 border">Education</th>
                                <th className="p-3 border">Experience</th>
                                <th className="p-3 border">Projects</th>
                                <th className="p-3 border">Skills</th>
                                <th className="p-3 border">Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                data.result.map((item: any) => (

                                    <tr key={item._id} className="text-center hover:bg-gray-50">

                                        <td className="p-3 border">{item.name}</td>
                                        <td className="p-3 border">{item.education}</td>
                                        <td className="p-3 border">{item.experience}</td>
                                        <td className="p-3 border">{item.done_project}</td>
                                        <td className="p-3 border">{item.skills}</td>

                                        <td className="p-3 border space-x-2">

                                            <button
                                                onClick={() => handleReturn(item)}
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

        </div>
    )
}

export default PostJob

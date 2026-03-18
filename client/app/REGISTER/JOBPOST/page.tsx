"use client"

import { useApplyGetQuery } from "@/redux/apis/APPLY.apis"
import { useJobGetQuery, useJOBPOST_CREATEMutation, useJobpost_deleteMutation, useJobpost_updateMutation } from "@/redux/apis/JOBPOST.apis"
import { JOBPOST_CREATE_REQUEST, JOBPOST_DELETE } from "@/types/JOBPOST"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import z, { ZodType } from "zod"

const Jobpost = () => {

    const [job] = useJOBPOST_CREATEMutation()
    const { data } = useJobGetQuery()
    const [update] = useJobpost_updateMutation()
    const [kite] = useJobpost_deleteMutation()
    const { data: GetData } = useApplyGetQuery()

    const [select, setSelect] = useState<string | null>(null)

    const createSchema = z.object({
        title: z.string().min(1),
        desc: z.string().min(1),
        skills: z.string().min(1),
        experience: z.string().min(1)
    }) satisfies ZodType<JOBPOST_CREATE_REQUEST>

    const { handleSubmit, reset, register } = useForm<JOBPOST_CREATE_REQUEST>({
        defaultValues: {
            title: "",
            desc: "",
            skills: "",
            experience: ""
        },
        resolver: zodResolver(createSchema)
    })

    const handleCreate = async (jack: JOBPOST_CREATE_REQUEST) => {
        try {
            if (select) {
                await update({ ...jack, _id: select }).unwrap()
                setSelect(null)
            } else {
                await job(jack).unwrap()
            }
            reset()
        } catch (error) {
            console.log(error)
        }
    }

    const handleReset_value = (item: any) => {
        reset({
            title: item.title,
            desc: item.desc,
            skills: item.skills,
            experience: item.experience
        })
        setSelect(item._id)
    }

    const handleDelete = async (jack: JOBPOST_DELETE) => {
        try {
            await kite(jack).unwrap()
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <div className="p-10 bg-gray-100 min-h-screen">

            {/* FORM CARD */}

            <div className="bg-white p-8 rounded-xl shadow-md w-100 mx-auto mb-10">

                <h2 className="text-2xl font-semibold text-center mb-6">
                    Job Post Form
                </h2>

                <form
                    onSubmit={handleSubmit(handleCreate)}
                    className="flex flex-col gap-4"
                >

                    <input
                        {...register("title")}
                        placeholder="Title"
                        className="border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        {...register("desc")}
                        placeholder="Description"
                        className="border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        {...register("experience")}
                        placeholder="Experience"
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
                                Add Job
                            </button>
                    }

                </form>
            </div>


            {/* TABLE */}

            {
                data &&

                <div className="bg-white shadow-md rounded-lg p-6">

                    <table className="w-full border-collapse">

                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-3 border">Title</th>
                                <th className="p-3 border">Description</th>
                                <th className="p-3 border">Experience</th>
                                <th className="p-3 border">Skills</th>
                                <th className="p-3 border">Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                data.result.map((item: any) => (

                                    <tr key={item._id} className="text-center">

                                        <td className="p-3 border">{item.title}</td>
                                        <td className="p-3 border">{item.desc}</td>
                                        <td className="p-3 border">{item.experience}</td>
                                        <td className="p-3 border">{item.skills}</td>

                                        <td className="p-3 border space-x-2">

                                            <button
                                                onClick={() => handleReset_value(item)}
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
            {
                GetData &&

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
                                GetData.result.map((item: any) => (

                                    <tr key={item._id} className="text-center hover:bg-gray-50">

                                        <td className="p-3 border">{item.name}</td>
                                        <td className="p-3 border">{item.education}</td>
                                        <td className="p-3 border">{item.experience}</td>
                                        <td className="p-3 border">{item.done_project}</td>
                                        <td className="p-3 border">{item.skills}</td>

                                        <td className="p-3 border space-x-2">

                                            {/* <button
                                                onClick={() => handleReturn(item)}
                                                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                                            >
                                                Edit
                                            </button> */}

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

export default Jobpost

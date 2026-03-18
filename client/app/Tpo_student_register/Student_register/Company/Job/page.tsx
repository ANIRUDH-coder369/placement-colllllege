"use client"

import { useApplyGetQuery } from "@/redux/apis/APPLY.apis"
import { useJobGetQuery } from "@/redux/apis/JOBPOST.apis"

const Job = () => {

    const { data } = useJobGetQuery()
    const { data: GetData } = useApplyGetQuery()

    return (

        <div className="min-h-screen bg-gray-100 p-10 space-y-10">

            {/* JOB AVAILABLE */}

            {
                data &&

                <div className="bg-white shadow-lg rounded-xl p-6">

                    <h2 className="text-2xl font-semibold mb-6 text-blue-600">
                        Job Available
                    </h2>

                    <table className="w-full border-collapse">

                        <thead>
                            <tr className="bg-blue-100">
                                <th className="p-3 border">Title</th>
                                <th className="p-3 border">Description</th>
                                <th className="p-3 border">Experience</th>
                                <th className="p-3 border">Skills</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                data.result.map((item: any) => (

                                    <tr
                                        key={item._id}
                                        className="text-center hover:bg-gray-50"
                                    >

                                        <td className="p-3 border">{item.title}</td>
                                        <td className="p-3 border">{item.desc}</td>
                                        <td className="p-3 border">{item.experience}</td>
                                        <td className="p-3 border">{item.skills}</td>

                                    </tr>

                                ))
                            }

                        </tbody>

                    </table>

                </div>
            }


            {/* APPLIED CANDIDATES */}

            {
                GetData &&

                <div className="bg-white shadow-lg rounded-xl p-6">

                    <h2 className="text-2xl font-semibold mb-6 text-purple-600">
                        Applied Candidates
                    </h2>

                    <table className="w-full border-collapse">

                        <thead>
                            <tr className="bg-purple-100">
                                <th className="p-3 border">Name</th>
                                <th className="p-3 border">Education</th>
                                <th className="p-3 border">Experience</th>
                                <th className="p-3 border">Projects</th>
                                <th className="p-3 border">Skills</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                GetData.result.map((item: any) => (

                                    <tr
                                        key={item._id}
                                        className="text-center hover:bg-gray-50"
                                    >

                                        <td className="p-3 border">{item.name}</td>
                                        <td className="p-3 border">{item.education}</td>
                                        <td className="p-3 border">{item.experience}</td>
                                        <td className="p-3 border">{item.done_project}</td>
                                        <td className="p-3 border">{item.skills}</td>

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

export default Job

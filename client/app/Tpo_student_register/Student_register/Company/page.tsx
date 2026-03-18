"use client"

import { useDeleteComapanyMutation, useGetCompanyQuery } from "@/redux/apis/auth.apis"
import { COMPANY_DELETE } from "@/types/Register"

const Company = () => {

    const { data } = useGetCompanyQuery()
    const [laptop] = useDeleteComapanyMutation()

    const remove = async (jack: COMPANY_DELETE) => {
        try {
            await laptop(jack).unwrap()
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <div className="min-h-screen bg-gray-100 p-10">

            <h2 className="text-2xl font-semibold text-center mb-8">
                Company List
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                    data && data.result.map((item: any) => (

                        <div
                            key={item._id}
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
                        >

                            <h3 className="text-lg font-semibold mb-2">
                                {item.name}
                            </h3>

                            <p className="text-gray-600 mb-1">
                                📧 {item.email}
                            </p>

                            <p className="text-gray-600 mb-4">
                                📍 {item.address}
                            </p>

                            <button
                                onClick={() => remove({ _id: item._id })}
                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                            >
                                Delete
                            </button>

                        </div>

                    ))
                }

            </div>

        </div>

    )
}

export default Company

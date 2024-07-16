"use client"
import * as React from "react"
import { Check } from 'lucide-react'
import { features } from "@/constants"

const WhyChooseUs = () => {
    return (
        // <main className='w-full h-fit flex flex-col gap-20 mt-32 lg:mt-52'>
        //     <PageHeader leading={"Lifestyle"} secondary='Disorder' />
        //     <section className='my-10 lg:gap-52 gap-20 flex justify-center items-center  flex-col lg:flex-wrap lg:flex-row'>
        //         {tests.map((item: Test, idx: number) => {
        //             const view = item.label.startsWith("CBC") || item.label.startsWith("Infer") || item.label.startsWith("Aller") ? 40 : 80

        //             return (

        //                 <div key={idx + "testblock"} className='w-fit flex justify-center items-center p flex-col'>
        //                     <Tests width={view} height={view} src={item.img} label={item.label} />
        //                 </div>
        //             )
        //         })}
        //     </section >
        // </main >

        <main>
            <div className="bg-gray-100 py-16 lg:py-24">
                <div className="container mx-auto px-6 lg:px-20 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 leading-tight sm:text-4xl lg:text-5xl mb-12">
                        Why Choose Us?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                <Check className="h-12 w-12 text-red-600 mx-auto" />
                                <h3 className="mt-6 text-xl font-semibold text-gray-900">{feature.title}</h3>
                                <p className="mt-4 text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default WhyChooseUs
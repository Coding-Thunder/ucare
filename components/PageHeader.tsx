import React from 'react'

const PageHeader = ({ leading, secondary }: { leading: string, secondary: string }) => {
    return (
        <h1 className='text-3xl gap-5 lg:text-4xl lg:gap-10 w-fit mx-auto flex flex-col  justify-center items-center'>
            <span className='text-app-blue-1'>{leading} </span>
            <span className='bg-app-blue-1 text-white  px-6 py-4'>{secondary}</span>
        </h1>
    )
}

export default PageHeader
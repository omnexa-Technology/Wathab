import React from 'react'

export default async function NewsIdPage({ params }) {
    const { id } = await Promise.resolve(params || {})
    return (
        <div className="h-[100vh] w-full">
            <h1 className="m-24 text-8xl font-bold">news - {id}</h1>
        </div>
    )
}

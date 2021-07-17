import React from 'react'

function Card(props) {
    return (
        <div className="max-w-sm p-3 shadow-xl rounded-lg">
            <div className="flex items-center justify-between border-b pb-1">
                <span className="capitalize font-semibold text-gray-600">global</span>
                <span className="capitalize text-gray-600 text-sm">last updated:</span>
            </div>
            <div className="flex flex-col items-center justify-center">
                <span className="font-bold text-3xl text-blue-500">0</span>
                <span className="text-sm capitalize">confirmed</span>
            </div>
            <div className="flex justify-evenly">
                <div className="flex flex-col items-center justify-center">
                    <span className="font-bold text-2xl text-green-400">0</span>
                    <span className="text-sm capitalize text-center">recovery</span>
                </div>
                <div className="flex flex-col items-center justify-center border-l border-r px-5">
                    <span className="font-bold text-2xl text-gray-500">0</span>
                    <span className="text-sm capitalize text-center">critical</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <span className="font-bold text-2xl text-red-400">0</span>
                    <span className="text-sm capitalize text-center">deaths</span>
                </div>
            </div>
            
        </div>
    )
}

export default Card

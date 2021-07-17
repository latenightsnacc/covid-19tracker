import React from 'react'

function Card(props) {
    return (
        <div className="max-w-sm p-3 shadow-xl rounded-lg">
            <div className="flex justify-between border-b">
                <span>global</span>
                <span>last updated:</span>
            </div>
            <div className="flex flex-col items-center justify-center">
                <span className="font-bold text-2xl">0</span>
                <span className="">confirmed</span>
            </div>
            <div className="flex justify-evenly">
                <div className="flex flex-col items-center justify-center">
                    <span className="font-bold text-xl text-green-400">0</span>
                    <span className="">recovery</span>
                </div>
                <div className="flex flex-col items-center justify-center border-l border-r px-5">
                    <span className="font-bold text-xl text-blue-400">0</span>
                    <span className="">critical</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <span className="font-bold text-xl text-red-400">0</span>
                    <span className="">deaths</span>
                </div>
            </div>
            
        </div>
    )
}

export default Card

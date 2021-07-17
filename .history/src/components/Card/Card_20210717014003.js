import React from 'react'

function Card() {
    return (
        <div className="max-w-sm p-3 shadow-xl rounded-lg">
            <div className="flex justify-between border-b">
                <span>global</span>
                <span>last updated</span>
            </div>
            <div className="flex flex-col items-center justify-center">
                <span className="font-bold">0</span>
                <span className="">confirmed</span>
            </div>
            <div className="flex">
                <div className="flex flex-col items-center justify-center">
                    <span className="font-bold">0</span>
                    <span className="">recovery</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <span className="font-bold">0</span>
                    <span className="">recovery</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <span className="font-bold">0</span>
                    <span className="">recovery</span>
                </div>
            </div>
            
        </div>
    )
}

export default Card

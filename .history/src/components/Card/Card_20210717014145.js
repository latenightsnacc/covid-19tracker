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
            <div className="flex justify-evenly">
                <div className="flex flex-col items-center justify-center">
                    <span className="font-bold">0</span>
                    <span className="">recovery</span>
                </div>
                <div className="flex flex-col items-center justify-center border-l border-r p-x-3">
                    <span className="font-bold">0</span>
                    <span className="">critical</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <span className="font-bold">0</span>
                    <span className="">deaths</span>
                </div>
            </div>
            
        </div>
    )
}

export default Card

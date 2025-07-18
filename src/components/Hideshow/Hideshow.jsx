import React , { useState } from 'react'

const Hideshow = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    }
  return (
    <div>
        <div>
            <button 
            className="px-6 py-2 border-2 border-gray-500 bg-blue-600 text-black rounded hover:bg-blue-700"
            onClick={handleClick}
            >
                {isVisible ?'Hide' : 'Show'} Details
            </button>

            {isVisible && (
                <div className="mt-4 bg-gray-200 p-4 rounded">
                    <p>this is the showing component</p>
                </div>
            )}
        </div>
    </div>
  )
}

export default  Hideshow 

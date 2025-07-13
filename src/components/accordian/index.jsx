import {data} from "./data"
import React,{useState} from 'react'

const Accodian = () => {
 const [selected, setSelected] = useState(null)

 const handleSingleClick = (index) => {
    setSelected(index === selected ?null:index)
 }
    return <div>
     <div className="max-w-2xl mx-auto mt-10">
  {data && data.length > 0 ? (
    data.map((item, index) => (
      <div
        key={item.id}
        className="mb-4 rounded-lg border w-3xl border-gray-300 bg-amber-100 shadow-md transition-all duration-200"
      >
        <div
          className="flex justify-between items-center p-4 cursor-pointer hover:bg-amber-200"
          onClick={() => handleSingleClick(index)}
        >
          <h2 className="text-lg font-semibold text-gray-800">{item.question}</h2>
          <span className="text-xl font-bold text-gray-600">
            {selected === index ? '-' : '+'}
          </span>
        </div>
        {selected === index && (
          <div className="px-4 pb-4 text-gray-700">
            <p>{item.answer}</p>
          </div>
        )}
      </div>
    ))
  ) : (
    <div className="text-center text-red-500 font-medium">No Data Found</div>
  )}
</div>

    </div>
}

export default Accodian
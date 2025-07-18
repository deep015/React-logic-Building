import React, { useState } from 'react'

const TabSwitch = () => {

    const tabse =["Home", "About", "Contact"]

    const tabContentMap=
    {
    Home: "🏠 Welcome to the homepage!",
    About: "ℹ️ This is the about section.",
    Contact: "📞 Here is how you can contact us.",
}

    const [activeTab,setActiveTab] = useState("Home")
   
  return (
<div>
    <div>
        {tabse.map((tab)=>{
            return(
                <button
                key={tab}
                onClick={()=>setActiveTab(tab)}
                className={`px-4 py-2 rounded ${
                 activeTab === tab
                ? "bg-blue-500 text-black"
                : "bg-gray-100 text-gray-700"
                } transition duration-200`}
                >{tab}</button>
            )
        })}
    </div>
      <div className="p-4 border rounded text-amber-900 bg-gray-50 text-lg">
        {tabContentMap[activeTab]}
      </div>
</div>
  )
}

export default TabSwitch
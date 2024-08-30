import React, { useState } from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'

const Dashboard = () => {

    const [projects, setProjects] = useState([
        {
            id: "3984702348760324986",
            name: "Raat Name Du chokhe ghum jhoraay",
            key: "Cm",
            referance: "",
            customer: "Rajat Da",
            time: 2
        },
        {
            id: "4659w48765h94w756",
            name: "Desh Amar ghure",
            key: "Cm",
            referance: "https://google.com",
            customer: "MD Rana",
            time: 5
        },
        {
            id: "e598ge476p86ep987ht",
            name: "Tara Maa",
            key: "Cm",
            referance: "",
            customer: "Soumyjit Ghosh",
            time: 6
        }
    ])
  return (
    <Nav>
        <div className='mt-4'>
            <div className="grid sm:grid-cols-12 gap-4">
                <div className="p-4 rounded-lg bg-red-700 text-white col-span-3">
                    <h1 className="text-base font-bold">Total Due</h1>
                    <h1 className="text-3xl mt-1 relative right-1"><i className="bi bi-currency-rupee"></i>3,567</h1>
                </div>
                <div className="p-4 rounded-lg bg-blue-700 text-white col-span-3">
                    <h1 className="text-base font-bold">Active Projects</h1>
                    <h1 className="text-3xl mt-1">{projects.length}</h1>
                </div> 
                <div className="p-4 rounded-lg bg-slate-700 text-white col-span-3">
                    <h1 className="text-base font-bold">Total Customer</h1>
                    <h1 className="text-3xl mt-1">12</h1>
                </div>
            </div>

            <hr className='my-5 opacity-20'/>

            <div className="grid sm:grid-cols-12 gap-4">
            {
                projects.map((item, index)=>(
                    <div key={index} className={`p-4 rounded-lg bg-slate-700 text-white col-span-3 border ${(item.time<0)?`border-red-500`:`${(item.time<3)?`border-yellow-500`:`border-green-500`}`}`}>
                    <h1 className={`text-xs font-bold line-clamp-1 ${(item.time<0)?`text-red-500`:`${(item.time<3)?`text-yellow-500`:`text-green-500`}`}`}>{(item.time<0)?`${item.time * -1} Days Over`:`${item.time} Days left`}</h1>
                        <h1 className="text-lg font-bold line-clamp-1">{item.name}</h1>
                        <h1 className="text-sm mt-1 text-green-500 font-semibold">{item.customer}</h1>
                        <h1 className="text-base mt-1 font-semibold">Key: {item.key}</h1>
                        <div className='flex justify-between'>
                            <Link to={item.referance} className='bg-blue-600 rounded-lg p-2 px-5 mt-10'>Referance</Link>
                            <Link to="/" className='bg-black rounded-lg p-2 px-5 mt-10'>More</Link>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    </Nav>
  )
}

export default Dashboard
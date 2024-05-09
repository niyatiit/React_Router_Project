import React from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data,setData] = useState([])

    // useEffect(() =>{
    //     fetch('https://api.github.com/users/niyatiit')
    //     .then((resp) => resp.json())
    //     .then((data) =>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
    return (
        <>
            <div className=' p-5 m-2 text-center text-3xl'> Github Followers : {data.followers}
                <img className='relative left-[38%] p-5' src={data.avatar_url} alt='Git Picture' width={250} />
            </div>
        </>
    )
}

export default Github

export const githubInfoLoder = async () => {
    const responce = await fetch('https://api.github.com/users/niyatiit')
    return responce.json()
}
import React, { useState } from 'react'

const BgRemove = () => {
    const [image , setImage] = useState(null);
    const [bgremove, setBgremove] = useState(null);
    const handleRemove = () =>{
        const apiKey ="uyvgLYarnHPLgvzbTLqKwMhn"
        const url= "https://api.remove.bg/v1.0/removebg"
        const formData = new FormData()
        formData.append('image_file' , image, image.name)
        formData.append('size' , 'auto')
        fetch(url,{
            method:'POST',
            headers:{
                'x-api-key' : apiKey
            },
            body:formData
        }).then(res => res.blob()).then((blob) => {
          const reader = new FileReader()
          reader.onloadend = () => setBgremove(reader.result)
          reader.readAsDataURL(blob);
        }).catch(err => console.log(err))
    } 
  return (
    <div className='flex justify-center lg:flex-row  small sm:flex-col my-10 '>
      <div>
        <video autoPlay loop muted className='lg:max-w-[420px] max-w-[320px]  lg:mr-20  rounded' >
          <source src='video.mp4' type='video/mp4' />
        </video>
        <h1 className='lg:text-6xl font-bold py-2 text-4xl' >Remove Image</h1>
        <h1 className='lg:text-6xl font-semibold p-1 text-4xl  '>Background</h1>
        <h1 className='lg:text-xl py-2 text-yellow-400 p-1 font-bold  '>100% Automatically and free</h1>
       </div>
           <div className='shadow-2xl p-10 rounded-md '>
           <h1 className='text-black-700 text-xl font-bold tracking-wider '>Image Backgroung Remove</h1>
       <div className='my-10'>
       <input type="file" onChange={(e) => setImage(e.target.files[0])} />
       </div>
     <button onClick={handleRemove} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Remove</button>
     <div>{bgremove && (
      <img src={bgremove} alt="bg-remove" />
     )}</div>
     </div>
    </div>
  )
}

export default BgRemove

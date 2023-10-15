import React from 'react'
import Image from 'next/image'

const Achivement = () => {
    const data = [
        {
            id : 1,
            img : '/Achievement1.png',
            company : 'Generic Aadhaar',
            content : 'Arjun Deshpande - Founder & CEO at Generic Aadhaar(Funded By Mr Ratan Tata)'
        },
        {
            id : 2,
            img : '/Achivement2.png',
            company : 'Generic Aadhaar',
            content : 'Arjun Deshpande - Founder & CEO at Generic Aadhaar(Funded By Mr Ratan Tata)'
        },
        {
            id : 3,
            img : '/Achivement3.jpg',
            company : 'Generic Aadhaar',
            content : 'Arjun Deshpande - Founder & CEO at Generic Aadhaar(Funded By Mr Ratan Tata)'
        },
        {
            id : 4,
            img : '/Achivement4.jpg',
            company : 'Generic Aadhaar',
            content : 'Arjun Deshpande - Founder & CEO at Generic Aadhaar(Funded By Mr Ratan Tata)'
        }
    ]
  return (
    <div className='grid md:grid-cols-2 gird-cols-1 md:gap-16 gap-5 md:p-4 px-2 py-4 max-w-[1100px]'>
        {
            data.map((item)=>(
                <div key={item.id} className='px-4 py-8 bg-gray-100  border-gray-300 border-2'>
                    <Image src={item.img} className="w-full -z-50" width={400} height={300}  alt="These is a Image"/>
                    <p className='bg-gradientBackground text-white font-bold md:px-10 px-5 md:py-4 py-2 max-w-[250px] mx-auto rounded-full block relative text-center md:-mt-5 -mt-3 z-[100] mb-3'>{item.company}</p>
                    <p className='text-gray-800'>{item.content}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Achivement
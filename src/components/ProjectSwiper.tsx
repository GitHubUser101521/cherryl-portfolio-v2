import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import { projects } from '../utils/projects'

import 'swiper/swiper-bundle.css'
import { useEffect, useState } from 'react'

function ProjectSwiper() {
    const [ hover, setHover ] =  useState([ false, '' ])

    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <Swiper
            slidesPerView={windowWidth < 768 ? 1 : 3} 
            spaceBetween={30} 
            loop={true} 
            navigation={{
                prevEl: '.button-prev',
                nextEl: '.button-next',
            }}
            modules={[Pagination, Navigation]}
        >
        {
            projects.map(p => (
                <SwiperSlide 
                    className='border relative'
                    onMouseEnter={() => setHover([ true, p.name ])}
                    onMouseLeave={() => setHover([ false, '' ])}
                >
                    <div className='flex justify-center items-center'>
                        <div className={`${hover[0] && hover[1] === p.name ? '' : 'hidden'} absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full bg-black text-white`}>
                            <p className='font-bold text-md'>{ p.name }</p>
                            <p className='text-center text-[0.5rem]'>{ p.desc }</p>
                        </div>
                    </div>
                    <img src={p.imgUrl} alt={p.name} />

                    <a href={p.url} target='_blank'>
                        <div className='absolute bottom-2 right-2 p-1 bg-white rounded-full border'>
                            <img src="/open-link-logo.png" alt="Open" className='w-4'/>
                        </div>
                    </a>
                </SwiperSlide>
            ))
        }     
        </Swiper>
    )
}

export default ProjectSwiper
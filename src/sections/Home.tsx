import { useEffect } from "react"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { groupStagger } from "../utils/GSAPAnim"

gsap.registerPlugin(ScrollTrigger)

function Home() {

    useEffect(() => {
        const sectionHome = document.querySelectorAll('.section-home')

        groupStagger(sectionHome, 0.1)
    }, [])

    return (
        <div className="flex flex-col gap-12 md:gap-20 py-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
                <div className="relative w-1/2 md:w-1/3">
                    <div className="border aspect-square rounded-full flex justify-center items-center relative section-home">
                        <img src="/smiley-face.png" alt="Hi!" className="scale-125"/>
                    </div>

                    <div className="bg-slate-100 p-2 px-4 rounded-md absolute bottom-0 left-1/2 -translate-x-1/2 w-max md:w-3/4 text-center section-home">
                        Frond-end Developer
                    </div>
                </div>

                <div className="md:w-1/2 w-full">
                    <p className="italic section-home">Nice to meet you, I'm</p>
                    <h1 className="text-gradient-yp section-home">
                        Cherryl Callista 
                        <br />
                        <span className="text-gradient-yp section-home">Cheniago</span>
                    </h1>
                    <div className="mt-4 md:mt-8 md:text-xl section-home italic flex gap-2 items-center">
                        <img src="/location-logo.png" alt=">" className="w-8"/>
                        Based in <span className="font-bold">Jakarta, Indonesia</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
                <div className="flex flex-row lg:flex-col gap-8">
                    <div className="flex items-center gap-4 text-xl section-home">
                        <div className="rounded-full md:p-4 md:border">
                            <img src="/contact-logo.png" alt="Phone" className="filter invert w-6"/>
                        </div>

                        <p>+62 813 1777 9538</p>
                    </div>

                    <div className="flex items-center gap-4 section-home">
                        <div className="rounded-full md:p-4 md:border">
                            <img src="/email-logo.png" alt="Phone" className="w-6"/>
                        </div>

                        <a href="mailto:cherrylcallistacheniago@gmail.com">
                            <p className="text-xs lg:text-base">cherrylcallistacheniago@gmail.com</p>
                        </a>
                    </div>
                </div>

                <div className="lg:w-1/2">
                    <p className="italic section-home">
                        Sedang menjalani edukasi SMK jurusan RPL. Seorang bilingual, Bahasa dan <span className="font-bold">English</span>, dan sedang mempelajari <span className="font-bold">Mandarin</span> sebagai bahasa ketiga. Mencari kesempatan untuk mengasah keterampilan dan menerapkan pengetahuan RPL dalam proyek nyata.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home

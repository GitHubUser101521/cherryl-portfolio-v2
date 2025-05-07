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
        <div className="flex flex-col gap-20 py-10">
            <div className="flex items-center justify-between">
                <div className="relative w-1/3">
                    <div className="border aspect-square rounded-full flex justify-center items-center relative section-home">
                        <img src="/smiley-face.png" alt="Hi!" className="scale-125"/>
                    </div>

                    <div className="bg-slate-100 p-2 px-4 rounded-md absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 text-center section-home">
                        Frond-end Developer
                    </div>
                </div>

                <div className="w-1/2">
                    <p className="italic section-home">Nice to meet you, I'm</p>
                    <h1 className="text-gradient-yp section-home">
                        Cherryl Callista 
                        <br />
                        <span className="text-gradient-yp section-home">Cheniago</span>
                    </h1>
                    <p className="mt-8 text-xl section-home">{`> Based in `}<span className="font-bold ">Indonesia, Jakarta</span></p>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-4 text-xl section-home">
                        <div className="rounded-full p-4 border">
                            <img src="/contact-logo.png" alt="Phone" className="filter invert w-6"/>
                        </div>

                        <p>+62 813 1777 9538</p>
                    </div>

                    <div className="flex items-center gap-4 section-home">
                        <div className="rounded-full p-4 border">
                            <img src="/email-logo.png" alt="Phone" className="w-6"/>
                        </div>

                        <a href="mailto:cherrylcallistacheniago@gmail.com">
                            cherrylcallistacheniago@gmail.com
                        </a>
                    </div>
                </div>

                <div className="w-1/2">
                    <p className="italic section-home">
                        Sedang menjalani edukasi SMK jurusan RPL. Seorang bilingual, Bahasa dan <span className="font-bold">English</span>, dan sedang mempelajari <span className="font-bold">Mandarin</span> sebagai bahasa ketiga. Mencari kesempatan untuk mengasah keterampilan dan menerapkan pengetahuan RPL dalam proyek nyata.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home

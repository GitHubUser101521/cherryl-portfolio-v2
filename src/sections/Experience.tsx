import { useEffect } from "react"
import RightBorderCard from "../components/RightBorderCard"
import { capitalize } from "../utils/UtilFuction"
import { animScale, groupStagger } from "../utils/GSAPAnim"

function Experience() {
    const education = [
        {
            year: '2016 - 2022',
            title: 'SD',
            content: 'Dharma Budhi Bhakti'
        },
        {
            year: '2022 - 2025',
            title: 'SMP',
            content: 'Tri Ratna'
        },
        {
            year: '2025 - now',
            title: 'SMK',
            content: 'Tri Ratna'
        }
    ]

    const experience = [
        {
            year: '2024 - now',
            title: 'Anggota OSIS',
            content: 'OSIS SMK Tri Ratna'
        },
        {
            year: '2025 - now',
            title: 'Pengurus Vihara',
            content: 'Vihara Vaipulya'
        }
    ]

    const skills = [
        "css",
        "express",
        "github",
        "gsap",
        "html",
        "javascript",
        "react",
        "tailwind",
        "zustand"
    ]

    useEffect(() => {
        const sectionExperience = document.querySelectorAll('.section-experience')
        groupStagger(sectionExperience, 0.1)

        const skillsLogo = document.querySelectorAll('.skills-logo')
        skillsLogo.forEach(s => {
            s.addEventListener('mouseenter', () => {
                animScale(s, 1.2)
            })

            s.addEventListener('mouseleave', () => {
                animScale(s, 1)
            })
        })
    }, [])

    return (
        <div id="experience" className="py-40">
            <div className="flex">
                <div className="w-1/2">
                    <p className="section-desc section-experience">Education</p>
                    <br />
                    <div className="flex flex-col gap-6">
                    {
                        education.map(e => (
                            <RightBorderCard {...e} key={e.title}/>
                        ))
                    }
                    </div>
                </div>

                <div>
                    <p className="section-desc section-experience">Experience</p>
                    <br />
                    <div className="flex flex-col gap-6">
                    {
                        experience.map(e => (
                            <RightBorderCard {...e} key={e.title} />
                        ))
                    }
                    </div>
                </div>
            </div>

            <div className="flex gap-12 mt-20">
                <p className="section-desc section-experience">Skills</p>

                <div className="flex flex-wrap gap-4 border-l-4 pl-4 py-2 border-[#ffc653]">
                {
                    skills.map(s => (
                        <div className="flex flex-col justify-center items-center gap-2 section-experience skills-logo" key={s}>
                            <img src={`/skillsLogo/${s}.png`} className="w-8 aspect-square" />
                            <p className="text-pink">{ capitalize(s) }</p>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default Experience

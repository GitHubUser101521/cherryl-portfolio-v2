import ProjectSwiper from "../components/ProjectSwiper"
import { projects } from '../utils/projects'
import { Link } from 'react-router'

function Works() {
    return (
        <div id="works" className="py-40">
            <p className="section-desc">Recent Projects</p>

            <div className="grid grid-cols-2 gap-4 mt-4">
            {
                projects.slice(projects.length - 2, projects.length).map(p => (
                    <div className="flex flex-col gap-2" key={p.name}>
                        <img src={p.imgUrl} alt={p.name} className="border" />
                        
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-bold text-xl">{ p.name }</p>
                                <p className="text-xs">{ p.desc.slice(0, 50) }</p>
                            </div>

                            <a href={p.url} target="_blank">
                                <img src="/open-link-logo.png" alt="Open Link" className="w-4 mr-4"/>
                            </a>
                        </div>
                    </div>
                ))
            }
            </div>

            <div className="mt-20">
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <p className="section-desc">See More</p> <span className="font-bold">|</span> 
                        <p className="section-desc underline">
                            <Link to={'/projects'}>See All</Link>
                        </p>
                    </div>

                    <div className="flex gap-2">
                        <button className="button-prev swiper-btn">{`<`}</button>
                        <button className="button-next swiper-btn">{`>`}</button>
                    </div>
                </div>

                <div className="mt-4">
                    <ProjectSwiper />
                </div>
            </div>
        </div>
    )
}

export default Works

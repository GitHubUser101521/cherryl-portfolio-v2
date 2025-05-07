import { Link } from 'react-router'
import ContactComponent from '../components/ContactComponent'
import { projects } from '../utils/projects'

function AllProjects() {
    return (
        <div className="h-screen w-screen flex">
            <div className="w-1/4 gradient-yp p-20 flex flex-col justify-between fixed top-0 left-0 h-full">
                <Link to="/">
                    <p className="font-bold italic text-white text-2xl">{`< Go Back`}</p>
                </Link>

                <ContactComponent nameShown={true} />
            </div>

            <div className="ml-[25%] w-3/4 px-40 pt-20">
                <p className="section-desc">All Projects</p>

                <div className='mt-4 flex flex-col gap-4'>
                {
                    projects.map(p => (
                        <div className='flex gap-4 items-center border p-4 rounded-sm relative'>
                            <div className='w-1/4'>
                                <img src={p.imgUrl} className='border'/>
                            </div>

                            <div className='flex flex-col gap-2 w-3/4'>
                                <p className='font-bold text-xl'>{ p.name }</p>
                                <p className='break-words'>{ p.desc }</p>

                                <div className='flex gap-2'>
                                {
                                    p.tech.map(t => (
                                        <div className='border rounded-lg w-fit px-2 bg-slate-100'>
                                            { t }
                                        </div>
                                    ))
                                }
                                </div>
                            </div>

                            <div>
                                <img src="/open-link-logo.png" alt="Open" className='w-4 absolute top-4 right-4'/>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default AllProjects

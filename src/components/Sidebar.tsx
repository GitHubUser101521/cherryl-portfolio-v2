import { useEffect, useState } from 'react'
import { animateRotation, animateSlideIn } from '../utils/GSAPAnim'
import SidebarComponent from './SidebarComponent'

function Sidebar() {
    const [ menuOpen, setMenuOpen ] = useState(false)

    useEffect(() => {
        const sidebarLogo = document.querySelectorAll('.sidebar-logo')

        sidebarLogo.forEach(s => {
            s.addEventListener('mouseenter', () => {
                animateRotation(s, 15)
            })

            s.addEventListener('mouseleave', () => {
                animateRotation(s, 0)
            })
        })

        animateSlideIn('.text', 'left')
        animateSlideIn('.menu-logo', 'right')
    }, [])

    return (
        <>
            <div className='hidden md:flex'>
                <SidebarComponent setMenuOpen={setMenuOpen} />
            </div>

            <div className='sidebar-mobile'>
                <p className="text-3xl font-bold mt-2 text">
                    CCC
                    <span className="text-pink">.</span>
                </p>

                <div
                    onClick={() => setMenuOpen(true)}
                >
                    <img src="/menu-logo.png" alt="x" className={`w-6 relative z-10 menu-logo ${ menuOpen && 'hidden'}`}/>
                </div>

                {
                    menuOpen &&
                    <div className='fixed top-0 left-0 w-screen h-screen bg-white overflow-hidden'>
                        <SidebarComponent setMenuOpen={setMenuOpen} />
                        <img 
                            src="/close-logo.png" 
                            alt="x" className='w-6 fixed top-8 right-10 z-100' 
                            onClick={() => setMenuOpen(false)}
                        />
                    </div>
                }
            </div>
        </>
    )
}

export default Sidebar

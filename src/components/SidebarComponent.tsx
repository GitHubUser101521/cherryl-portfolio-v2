import { capitalize } from '../utils/UtilFuction'
import ContactComponent from './ContactComponent'

type SidebarComponentPropsType = {
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function SidebarComponent({ setMenuOpen }: SidebarComponentPropsType) {
    const sidebarLogo = [
        'home',
        'experience',
        'works',
        'contact'
    ]

    return (
        <div className="gradient-yp sidebar-container">
            <div className="flex flex-col gap-16">
                <p className="text-3xl">
                    CCC
                    <span className="text-pink">.</span>
                </p>
                <div className="flex flex-col gap-2">
                {
                    sidebarLogo.map(s => (
                        <a href={`#${s}`}>
                            <div 
                                className="flex items-center gap-4"
                                onClick={() => setMenuOpen(false)}
                            >
                                <div className="w-8">
                                    <img src={`/${s}-logo.png`} className='sidebar-logo'/>
                                </div>
                                <p className="text-2xl mt-2">{ capitalize(s) }</p>
                            </div>
                        </a>
                    ))
                }
                </div>
            </div>
            <div>
                <ContactComponent nameShown={false} />
                <p>
                    Design by <a href="https://www.figma.com/design/UDbdx6e6ZHpImAVB5oWNvQ/Portfolio%7C-Personal-Portfolio-%7C-5---Community-?node-id=1211-3647&t=E50ZMcWeqbKjuEZt-0" target="_blank" className="underline underline-offset-2">Fawzisayed</a>
                </p>
            </div>
        </div>
    )
}

export default SidebarComponent

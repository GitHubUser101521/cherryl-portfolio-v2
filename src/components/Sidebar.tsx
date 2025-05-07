import { capitalize } from '../utils/UtilFuction'
import ContactComponent from './ContactComponent'

function Sidebar() {
    const sidebarLogo = [
        'home',
        'experience',
        'works',
        'contact'
    ]

    return (
        <div className="w-1/4 h-full gradient-yp p-10 flex flex-col justify-between text-white font-bold fixed top-0 left-0">
            <div className="flex flex-col gap-16">
                <p className="text-3xl">
                    CCC
                    <span className="text-pink">.</span>
                </p>

                <div className="flex flex-col gap-2">
                {
                    sidebarLogo.map(s => (
                        <a href={`#${s}`}>
                            <div className="flex items-center gap-4">
                                <div className="w-8">
                                    <img src={`/${s}-logo.png`} />
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

export default Sidebar

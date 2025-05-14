import { useEffect } from "react"
import { capitalize } from "../utils/UtilFuction"
import { animScale } from "../utils/GSAPAnim"

type ContactComponentPropType = {
    nameShown: boolean
}

function ContactComponent({ nameShown }: ContactComponentPropType) {
    const contactLogo = [
        {
            name: 'github',
            url: 'https://github.com/GitHubUser101521'
        },
        {
            name: 'linkedin',
            url: ''
        },
        {
            name: 'instagram',
            url: 'https://www.instagram.com/cherry.cnc/'
        }
    ]

    useEffect(() => {
        const contactLogo = document.querySelectorAll('.contact-logo')

        contactLogo.forEach(c => {
            c.addEventListener('mouseenter', () => {
                animScale(c, 1.1)
            })

            c.addEventListener('mouseleave', () => {
                animScale(c, 1)
            })
        })
    }, [])

    return (
        <div className="flex flex-col gap-2 mb-4 w-fit">
        {
            contactLogo.map(c => (
                <a href={c.url} target="_blank" className="flex gap-4 items-center contact-logo" key={c.name} >
                    <div className="bg-white w-10 aspect-square rounded-full flex justify-center items-center text-black border">
                        <img src={`/${c.name}-logo.png`} alt={c.name} />
                    </div>

                    <p className={nameShown ? '' : 'hidden'}>{ capitalize(c.name) }</p>
                </a>
            ))
        }
        </div>
    )
}

export default ContactComponent

import { useEffect } from 'react'
import ContactComponent from '../components/ContactComponent'
import { groupStagger } from '../utils/GSAPAnim'

function Contact() {

    useEffect(() => {
        const sectionContact = document.querySelectorAll('.section-contact')
        groupStagger(sectionContact, 0.1)
    }, [])

    return (
        <div id="contact">
            <div className="py-40">
                <p className="section-desc mb-12 section-contact">Contact Me</p>
                <div className="flex flex-col gap-8">
                    <p className="text-gradient-yp section-contact">Let's Get in Touch</p>
                    <p className="opacity-65 section-contact">Sekolah Tri Ratna, Jl. Talib I No.35 37, RT.9/RW.7, Krukut, Taman Sari, Jakarta Barat, Jakarta 11140</p>
                    <div className="text-2xl font-bold section-contact">
                        <p>+62 813 1777 9538</p>
                        <p>cherrylcallistacheniago@gmail.com</p>
                    </div>
                </div>
                <div className="flex mt-20 section-contact">
                    <ContactComponent nameShown={true}/>
                </div>
            </div>
        </div>
    )
}

export default Contact

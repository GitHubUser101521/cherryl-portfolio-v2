import ContactComponent from '../components/ContactComponent'

function Contact() {
        return (
            <div id="contact">
                <div className="py-40">
                    <p className="section-desc mb-12">Contact Me</p>

                    <div className="flex flex-col gap-8">
                        <p className="text-gradient-yp">Let's Get in Touch</p>
                        <p className="opacity-65">Sekolah Tri Ratna, Jl. Talib I No.35 37, RT.9/RW.7, Krukut, Taman Sari, Jakarta Barat, Jakarta 11140</p>

                        <div className="text-2xl font-bold">
                            <p>+62 813 1777 9538</p>
                            <p>cherrylcallistacheniago@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex mt-20">
                        <ContactComponent nameShown={true}/>
                    </div>
                </div>
            </div>
        )
}

export default Contact

import { RiMailLine, RiMap2Line, RiPhoneLine } from "@remixicon/react"
import { CONTACT_INFO } from "../../Consts"

const Contact = () => {
    return (
        <section id="contact" className="container mx-auto w-full">
            <div className="my-20">
                <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12">Contact</h2>
                <p className="max-w-2xl text-lg mx-auto mb-12 text-center">{CONTACT_INFO.text}</p>

                <div className="flex flex-col lg:flex-row justify-around mx-4">

                    <div className="flex items-center mb-8 lg:mb-0">
                        <RiPhoneLine className="text-4xl mr-4" />
                        <div>
                            <p className="text-lg font-semibold">{CONTACT_INFO.phone.label}</p>
                            <p className="text-neutral-600">{CONTACT_INFO.phone.value}</p>
                        </div>
                    </div>

                    <div className="flex items-center mb-8 lg:mb-0">
                        <RiMailLine className="text-4xl mr-4" />
                        <div>
                            <p className="text-lg font-semibold">{CONTACT_INFO.email.label}</p>
                            <p className="text-neutral-600">{CONTACT_INFO.email.value}</p>
                        </div>
                    </div>

                    <div className="flex items-center mb-8 lg:mb-0">
                        <RiMap2Line className="text-4xl mr-4" />
                        <div>
                            <p className="text-lg font-semibold">{CONTACT_INFO.address.label}</p>
                            <p className="text-neutral-600">{CONTACT_INFO.address.value}</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact

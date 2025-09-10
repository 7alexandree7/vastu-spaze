import { SERVICES_CONTENT } from "../../Consts"

const Services = () => {
    return (
        <section id='services' className='container mx-auto w-full border-b-2'>
            <div className='my-20'>
                <h2 className='text-xl lg:text-3xl tracking-tight text-center uppercase mb-20'>
                    Our Home Renovation Services
                </h2>

                {console.log(0 % 2 === 0)}

                {SERVICES_CONTENT.map((service, index) => (
                    <div className="mb-12 mx-4 flex flex-col lg:flex-row" key={index}>

                        <div className={`lg:w1/2 mb-4 lg:mb-0 ${index % 2 === 0 ? '' : 'lg:order-2'}`}>
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>

                        <div className={`flex flex-col lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                            <h3 className="text-xl lg:text-2xl font-medium mb-2">{service.title}</h3>
                            <p className="mb-4 lg:tracking-wide text-lg lg:text-xl lg:leading-9">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services

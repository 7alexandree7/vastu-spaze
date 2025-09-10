import { HERO_CONTENT } from "../../Consts/index"

const Hero = () => {
    return (
        <section className="container w-full mx-auto">
            <div className="flex flex-col items-center mt-40">
                <h1 className="text-6xl lg:text-[10rem] uppercase font-bold mb-4">{HERO_CONTENT.title}</h1>
                <p className="lg:mt-6 text-sm md:text-xl mb-4 font-medium tracking-tighter">{HERO_CONTENT.subtitle}</p>
                <img
                    className="w-full lg:min-w-[800px] max-h-[65vh] p-4 object-contain rounded-4xl"
                    src={HERO_CONTENT.image}
                    alt="hero"
                />
            </div>
        </section>
    )
}

export default Hero

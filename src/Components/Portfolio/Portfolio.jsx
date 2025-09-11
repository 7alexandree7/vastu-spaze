import { PORTFOLIO_PROJECTS } from "../../Consts"

const Portfolio = () => {
  return (
    <section id="portfolio" className="container mx-auto w-full border-b-2">
      <div className="mb-20">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mt-20 mb-12">Portfolio</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PORTFOLIO_PROJECTS.map((project) => (

            <div key={project.id} className="group relative overflow-hidden rounded-3xl mx-4">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={project.image}
                alt={project.name} />

                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
                  <h3 className="mb-2 text-xl font-medium">{project.name}</h3>
                  <p className="mb-12 p-4">{project.description}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

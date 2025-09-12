import { REVIEWS } from "../../Consts/index"

const Reviews = () => {
    return (
        <section id="reviews" className="container mx-auto w-full border-b-2">
            <div className="my-20">
                <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12">Reviews</h2>
                <p className="mx-auto max-w-2xl text-lg text-center mb-12">{REVIEWS.text}</p>
                <div className="flex flex-wrap items-center justify-center lg:w-3/4 mx-auto">
                    {REVIEWS.reviews.map((review, index) => (
                        <div className="mt-10 flex flex-col  rounded-2xl border border-neutral-300 p-10 mx-2 max-w-xs" key={index}>
                            <p className="mb-4">{review.review}</p>

                            <div className="flex items-center mt-4">
                                <img className="w-12 h-12 rounded-full mr-4" src={review.image} alt={review.name} />
                                <div>
                                    <p className="font-sm font-bold">{review.name}</p>
                                    <p className="text-sm text-neutral-600">{review.title}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Reviews

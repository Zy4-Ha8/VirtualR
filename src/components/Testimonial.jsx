import { testimonials } from "../constants/index";
const Testimonial = () => {
  const testimonialsArray = testimonials;
  return (
    <div className="my-20 ">
      <h1 className=" mb-20 text-center text-3xl md:text-5xl lg:text-6xl">
        What People are saying
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-15">
        {testimonialsArray.map((person ,key) => (
          <div key={key} className="text-gray-400 bg-neutral-900 border border-neutral-800 rounded-2xl p-4 ">
            <p className="mb-4">{person.text}</p>
            <div className="flex gap-5">
              <div>
                <img
                  className="w-12 h-12 rounded-full"
                  src={person.image}
                  alt=""
                />
              </div>
              <div>
                <p>{person.user}</p>
                <p className="text-gray-600">{person.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

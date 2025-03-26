import { CircleCheck } from "lucide-react";
import { pricingOptions } from "../constants/index";
const pricingOptionArray = pricingOptions;
const Pricing = () => {
  return (
    <div className="my-10">
      <h1 className="text-4xl lg:text-6xl text-center">Pricing</h1>
      <div className=" my-10 grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pricingOptionArray.map((option, key ) => (
          <div key={key} className=" border border-neutral-500/50 p-10 rounded-2xl">
            <h1 className="text-4xl mb-5 ">{option.title}</h1>
            <h1 className="text-4xl mb-5 ">
              {option.price}
              <span className="text-lg text-neutral-400">/Month</span>
            </h1>

            <div className="flex flex-col gap-7">
              {option.features.map((feature ,key) => (
                <div key={key} className="flex gap-2">
                  <CircleCheck /> {feature}
                </div>
              ))}
            </div>
            <button className="text-2xl border border-orange-900 w-full p-2 rounded-lg cursor-pointer hover:bg-orange-900 duration-300 mt-20">
              <a href="#">Subscribe</a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

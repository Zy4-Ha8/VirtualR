import { features } from "../constants";
const FeatureSection = () => {
  const featuresArray = features;
  return (
    <div className="my-10">
      <div className="text-center">
        <span className="text-orange-500 text-sm font-medium uppercase py-1 px-2">
          Feature
        </span>
        <h1 className="text-2xl sm:text-5xl lg:text-6xl mt-10 ">
          Easily build{" "}
          <span className="bg-gradient-to-r bg-clip-text text-transparent from-orange-500 to-orange-700">
            your code
          </span>{" "}
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mx-5 border-b border-b-neutral-500/30">
        {featuresArray.map((feature ,key) => (
          <div key={key} className="my-10 flex gap-5">
            <div className="text-pink-800">{feature.icon}</div>
            <div>
              <h1 className="text-xl">{feature.text}</h1>
              <p className="text-md text-neutral-500 mt-10">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;

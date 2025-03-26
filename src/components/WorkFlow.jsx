import { checklistItems } from "../constants/index";
import img from "../assets/code.jpg";
import { CheckCircle2 } from "lucide-react";
const WorkFlow = () => {
  const checklistItemsArry = checklistItems;
  return (
    <div className="my-20">
      <h1 className="text-center text-3xl sm:text-5xl lg:text-6xl">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
          coding workflow.{" "}
        </span>
      </h1>
      <div className="flex flex-wrap my-10 ">
        <div className="w-full lg:w-1/2">
          <img sizes="100%" src={img} alt="" />
        </div>
        <div className="w-full lg:w-1/2 mt-12">
          {checklistItemsArry.map((item ,key) => (
            <div key={key} className="flex  mb-12">
              <div className=" mr-10 h-10 w-10 p-2 text-green-500">
                <CheckCircle2 />
              </div>
              <div>
                <h1 className="text-xl mt-1">{item.title}</h1>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;

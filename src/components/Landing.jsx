import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
const Landing = () => {
  return (
    <div className="  mt-30 flex flex-col justify-center items-center text-center gap-4 mx-5 ">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide">
        VirtualR build tools{" "}
        <span className="bg-linear-to-r from-orange-500 to-orange-700  bg-clip-text text-transparent">
          {" "}
          for developers
        </span>
      </h1>
      <p className="text-gray-500 mx-0 sm:mx-5 md:mx-10 lg:mx-20 text-lg mt-5">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex gap-4 mt-10 flex-col sm:flex-row">
        <a className=" text-lg py-2 px-4 rounded-md bg-linear-to-r from-orange-500 to-orange-800 cursor-pointer">
          Start for free
        </a>
        <a className="border-white border-1 py-2 p-4 rounded-md text-lg cursor-pointer ">
          Documention
        </a>
      </div>

      <div className="flex gap-5 my-10">
        <video
          autoPlay
          loop
          muted
          className=" w-1/2 rounded-lg border border-orange-500 shadow-sm shadow-orange-700"
        >
          <source src={video1} type="video/mp4" />
        </video>
        <video
          autoPlay
          loop
          muted
          className="  w-1/2 rounded-lg border border-orange-500 shadow-sm shadow-orange-700"
        >
          <source src={video2} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Landing;

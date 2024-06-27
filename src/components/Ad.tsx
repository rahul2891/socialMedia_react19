import Image from "next/image";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* TOP  */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ad</span>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* BOTTOM  */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/21937092/pexels-photo-21937092.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/9320042/pexels-photo-9320042.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            className="w-6 h-6 rounded-full object-cover"
            width={24}
            height={24}
          />
          <span className="text-blue-500 font-medium">
            Learn Content Writing
          </span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text=sm"}>
          {size === "sm"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            : size === "md"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatisomnis necessitatibus ullam animi debitis nemo! Rerum ex ducimus"
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatisomnis necessitatibus ullam animi debitis nemo! Rerum ex ducimussimilique est? Repellendus animi laudantium praesentium temporibuslaboriosam pariatur laborum minus debitis."}
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">Learn more</button>
      </div>
    </div>
  );
};

export default Ad;

import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/19059877/pexels-photo-19059877/free-photo-of-surfers-on-sea-coast-in-city.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Roshit</span>
        </div>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/15876209/pexels-photo-15876209/free-photo-of-top-view-of-sandy-beach.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          recusandae sint alias eos! Consectetur, dolores veniam, unde in
          possimus, quas perspiciatis eaque facilis eveniet error sunt rem eos.
          Cupiditate, harum!
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/like.png"
              className="cursor-pointer"
              alt=""
              width={16}
              height={16}
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Likes</span>{" "}
            </span>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              className="cursor-pointer"
              alt=""
              width={16}
              height={16}
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Comment</span>{" "}
            </span>
          </div>
        </div>
        <div className="">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/share.png"
              className="cursor-pointer"
              alt=""
              width={16}
              height={16}
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Share</span>{" "}
            </span>
          </div>
        </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;

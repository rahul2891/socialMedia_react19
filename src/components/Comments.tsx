import Image from "next/image";

const Comments = () => {
  return (
    <div className="">
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/24604763/pexels-photo-24604763/free-photo-of-a-train-traveling-over-a-bridge-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 object-cover rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* COMMENTS */}
      <div className="">
        {/* COMMENT */}
        <div className="flex gap-4 justify-between mt-6">
          {/* AVATAR  */}
          <Image
            src="https://images.pexels.com/photos/24604763/pexels-photo-24604763/free-photo-of-a-train-traveling-over-a-bridge-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 object-cover rounded-full"
          />
          {/* DESC  */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Shreem Kapoor</span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Veritatis voluptatem hic ab in officiis. Qui eum officiis, non
              magni voluptates, deserunt, ipsam eligendi enim quo iure cumque
              quas voluptate a?
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500">
                <div className="flex items-center gap-4">
                <Image
            src="/like.png"
            alt=""
            width={12}
            height={12}
            className="cursor-pointer"
          />
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">123 Likes</span>
                </div>
                <div className="">
                    Reply
                </div>
            </div>
          </div>
          {/* ICON  */}
          <div className="">
            <Image
              src="/more.png"
              alt=""
              className="w-4 h-4 cursor-pointer"
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;

import Image from "next/image";
import Link from "next/link";

const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP  */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-sm">
          See all
        </Link>
      </div>
      {/* USER  */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/9320042/pexels-photo-9320042.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            className="w-10 h-10 rounded-full object-cover"
            width={40}
            height={40}
          />
          <span className="font-semibold">Janvi Gupta</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt=""
            className="cursor-pointer"
            width={20}
            height={20}
          />
          <Image
            src="/reject.png"
            alt=""
            className="cursor-pointer"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/26201510/pexels-photo-26201510/free-photo-of-couple-on-a-beach-during-sunset.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            className="w-10 h-10 rounded-full object-cover"
            width={40}
            height={40}
          />
          <span className="font-semibold">Alpna Patel</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt=""
            className="cursor-pointer"
            width={20}
            height={20}
          />
          <Image
            src="/reject.png"
            alt=""
            className="cursor-pointer"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/25745076/pexels-photo-25745076/free-photo-of-side-view-of-a-young-woman-in-a-white-shirt-and-black-trousers-standing-on-a-dirt-road-in-the-countryside.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            className="w-10 h-10 rounded-full object-cover"
            width={40}
            height={40}
          />
          <span className="font-semibold">Ram Maheshwari</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt=""
            className="cursor-pointer"
            width={20}
            height={20}
          />
          <Image
            src="/reject.png"
            alt=""
            className="cursor-pointer"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;

import Image from "next/image"


const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-sm scrollbar-hide">
        <div className="flex gap-8 w-max">
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="https://images.pexels.com/photos/21852152/pexels-photo-21852152/free-photo-of-man-walking-with-chair-on-sea-shore-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="Story 1" width={80} height={80} className="w-20 h-20 rounded-full ring-2 object-cover" />
                <span className="font-medium">Rahul</span>
            </div>
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="https://images.pexels.com/photos/21852152/pexels-photo-21852152/free-photo-of-man-walking-with-chair-on-sea-shore-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="Story 1" width={80} height={80} className="w-20 h-20 rounded-full ring-2 object-cover" />
                <span className="font-medium">Rahul</span>
            </div>
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="https://images.pexels.com/photos/21852152/pexels-photo-21852152/free-photo-of-man-walking-with-chair-on-sea-shore-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="Story 1" width={80} height={80} className="w-20 h-20 rounded-full ring-2 object-cover" />
                <span className="font-medium">Rahul</span>
            </div>
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="https://images.pexels.com/photos/21852152/pexels-photo-21852152/free-photo-of-man-walking-with-chair-on-sea-shore-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="Story 1" width={80} height={80} className="w-20 h-20 rounded-full ring-2 object-cover" />
                <span className="font-medium">Rahul</span>
            </div>
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="https://images.pexels.com/photos/21852152/pexels-photo-21852152/free-photo-of-man-walking-with-chair-on-sea-shore-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="Story 1" width={80} height={80} className="w-20 h-20 rounded-full ring-2 object-cover" />
                <span className="font-medium">Rahul</span>
            </div>
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="https://images.pexels.com/photos/21852152/pexels-photo-21852152/free-photo-of-man-walking-with-chair-on-sea-shore-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="Story 1" width={80} height={80} className="w-20 h-20 rounded-full ring-2 object-cover" />
                <span className="font-medium">Rahul</span>
            </div>
        </div>
    </div>
  )
}

export default Stories
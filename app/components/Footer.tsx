import Link from "next/link"

export default function Footer(){
    return(
        <div className="w-full bg-slate-950 ">
            <div className="flex justify-center">
                <h1 className=" uppercase text-gray-500 font-bold text-2xl mt-28">wher to?</h1>
            </div>
            <ul className="text-gray-500 font-semibold flex justify-center space-x-10 mt-6">
                <li className=" hover:text-red-700">Outside</li>
                <li className=" hover:text-red-700">Interior</li>
                <li className=" hover:text-red-700">location</li>
                <li className=" hover:text-red-700">Video</li>
                <li className=" hover:text-red-700">Team</li>
                <li className=" hover:text-red-700">Enquire</li>
            </ul>
            <div className="text-gray-500 flex justify-between items-center mt-30 p-10">
                <div className="w-48 font-semibold text-sm">Branding and Marketing by <span className=" uppercase font-bold text-xl">Saddam hussain</span></div>
                <Link href="/" className="font-semibold hover:text-red-700">Back to top</Link>
                <div className="text-sm font-semibold">Check Out<span className="text-bold uppercase mx-1 hover:text-red-700">@saddam hussain</span></div>
            </div>
        </div>
    )
}
import Image from "next/image";

const Navbar=()=>{
    return(
        <div className="flex justify-between items-center px-[100px] ">
            <div className="text-[#0D2052] text-[14px] flex items-center justify-center text-center">
                <Image src="/Vector 1648.png" width={33} height={24} alt=""/>
                <h1 className="text-[24px] font-semibold text-center">BrandNav</h1>
            </div>
            <div className="flex py-1 px-1 gap-4">
                <select className="bg-[#F3F3F5] hover:text-[#0085FF] transition-colors">
                    <option>Products</option>
                </select>
                <p className="hover:text-[#0085FF] transition-colors">Blog</p>
                <p className="hover:text-[#0085FF] transition-colors">Pricing</p>
                <select className="bg-[#F3F3F5] hover:text-[#0085FF] transition-colors">
                    <option>Resources</option>
                </select>
            </div>
            <div className="flex gap-3">
                <button className="bg-white py-[11px] px-[24px] rounded-[8px]">Login</button>
                <button className="bg-[#287DFF] text-white px-[24px] py-[11px] rounded-[8px]">Start for free</button>
            </div>
        </div>
    )
}

export default Navbar;
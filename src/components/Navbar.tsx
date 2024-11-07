import Image from "next/image";

const Navbar=()=>{
    return(
        <div className="flex justify-between items-center lg:px-[100px] md:px-[50px] px-[40px] bg-gradient-to-r from-[#E6ECFA] to-[#F2F2FA] py-4">
            <div className="text-[#0D2052] text-[14px] flex items-center justify-center text-center">
                <Image src="/1001.svg" width={33} height={24} alt=""/>
                <h1 className="md:text-[24px] text-[20px] font-semibold text-center">BrandNav</h1>
            </div>
            <Image src="/nav.png" width={32} height={32} alt="" className="w-[32px] h-[32px] md:hidden" />
            <div className="hidden lg:flex py-1 px-1 gap-4">
                <select className="bg-inherit hover:text-[#0085FF] transition-colors">
                    <option>Products</option>
                </select>
                <p className="hover:text-[#0085FF] transition-colors">Blog</p>
                <p className="hover:text-[#0085FF] transition-colors">Pricing</p>
                <select className="bg-inherit hover:text-[#0085FF] transition-colors">
                    <option>Resources</option>
                </select>
            </div>
            <div className="md:flex  gap-3 hidden ">
                <button className="bg-white lg:py-[11px] lg:px-[24px] md:py-[9px] md:px-[20px] rounded-[8px]">Login</button>
                <button className="bg-[#287DFF] text-white lg:px-[24px] lg:py-[11px] md:px-[20px] md:py-[9px] rounded-[8px]">Start for free</button>
            </div>
        </div>
    )
}

export default Navbar;
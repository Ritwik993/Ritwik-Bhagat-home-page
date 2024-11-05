import Image from "next/image";

const Reason=()=>{
    return(
        <div className="flex md:flex-row flex-col justify-between items-center gap-6 ">
            <Image src="/image.svg" alt="" width={437} height={407}/>
            <div className="right md:mx-[0px] mx-[100px]">
                <Image src="/Frame 1000001728.svg" alt="" width={50} height={50}/>
                <h2 className="text-[#2F327D] font-semibold text-[26px] mb-[20px] md:mx-[0px] mx-[100px]">Enrich any CSV</h2>
                <p className="w-[490px] text-[16px] text-[#595B97]">BrandNav transforms your CSV files by adding valuable contact, firmographics, and technographics data. With just a few clicks, you can enhance your data with enriched information and unlock new insights and opportunities.</p>
            </div>
        </div>
    )
}

export default Reason;
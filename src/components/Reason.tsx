import Image from "next/image";

const Reason=()=>{
    return(
        <div className="flex md:flex-row flex-col justify-between items-center gap-6 md:px-0 px-[10px]">
            <Image src="/image.svg" alt="" width={437} height={407}/>
            <div className="right ">
                <Image src="/Frame 1000001728.svg" alt="" width={50} height={50} />
                <h2 className="text-[#2F327D] font-semibold text-[26px] mb-[20px]  text-left ">Enrich any CSV</h2>
                <p className="md:w-[490px] text-[16px] text-[#595B97] text-left">BrandNav transforms your CSV files by adding valuable contact, firmographics, and technographics data. With just a few clicks, you can enhance your data with enriched information and unlock new insights and opportunities.</p>
            </div>
        </div>
    )
}

export default Reason;
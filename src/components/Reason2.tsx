import Image from "next/image";

const Reason2=()=>{
    return(
        <div className="flex md:flex-row flex-col-reverse justify-between items-center gap-6 md:px-0 px-[10px]">
            <div className="right ">
                <Image src="/sync 1.svg" alt="" width={50} height={50}/>
                <h2 className="text-[#2F327D] font-semibold text-[26px] mb-[20px] text-left">Fresh data updates everyday</h2>
                <p className="md:w-[490px] text-[16px] text-[#595B97] text-left">BrandNav updates its data every day, providing the most recent and accurate information to its users. With a constant stream of new information, BrandNav ensures that users have access to the latest contact, firmographics, and technographics data for better decision-making. </p>
            </div>
            <Image src="/image2.svg" alt="" width={437} height={407}/>
        </div>
    )
}

export default Reason2;
import Image from "next/image"

const Card1=()=>{
    return(
        <div className="bg-white  rounded-[27px] rounded-b-none p-[20px] pt-[40px] pb-[30px] mb-[-10px] border-none z-10 mr-[8px]  ">
            <div className="imageConatiner px-[50px] py-[20px] rounded-[18px] border-[#D8DDEB] border-[1px]">
            <Image src="/Group 1000001904.svg" width={118} height={93}  className="w-[118px] h-[93px]"alt=""/>
            </div>
            <div className="textContainer mt-[20px]">
                <h1 className="text-[16px] text-[#1F1B2F] font-semibold">Screener Search</h1>
                <p className="text-[#758282] mb-[20px] text-[14px]">Build your list with advanced<br/> search filters</p>
            </div>
        </div>
    )
}

export default Card1;
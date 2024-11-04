import Image from "next/image"

const Card=()=>{
    return(
        <div className="bg-white rounded-[27px] p-[20px] shadow-md mb-[6px]">
            <div className="imageConatiner px-[50px] py-[20px] rounded-[18px] border-[#D8DDEB] border-[1px]">
            <Image src="/Group 1000001907.png" width={118} height={93} alt=""/>
            </div>
            <div className="textContainer mt-[20px]">
                <h1 className="text-[16px] text-[#1F1B2F] font-semibold">Enricher Lookup</h1>
                <p className="text-[#758282] mb-[20px] text-[14px]">Get verified contact<br/> information from Enricher</p>
            </div>
        </div>
    )
}

export default Card;
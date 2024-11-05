import Image from "next/image"

const GiftCard=()=>{
    return(
        <div className="bg-white rounded-[22px] flex flex-col justify-center items-center px-[40px] h-[750px]">
            <div className="flex flex-col justify-center items-center">
                <Image src="/gift.png" alt="" width={80} height={73} className="w-[80px] h-[73px]" />
                <p className="text-[#2F327D] font-medium text-[32px]">FREE</p>
                <p className="font-semibold text-[50px] text-[#2F327D]">$0</p>
                <button className="bg-[#0084FF] text-white rounded-[5px] px-[20px] py-[10px] mb-[30px]">Grab free leads</button>
                <div className="flex gap-2 mt-2 text-[#8A8A8A] items-center mb-[30px]">
                 <Image src="/uil_credit-card.png" className="w-[16px] h-[12px]" width={16} height={16} alt=""/>
                 <p>No credit card required | </p>
                 <Image src="/5 star review.png" alt="" className="w-[65px] h-[13px]" width={65} height={13}/>
                 <p>4.8/5 G2 Rating</p>
                </div>
            </div>
            <div>
                <div className="flex gap-3 py-[5px]">
                <Image src="/SUCCESS.png" width={17} height={17} alt=""  className="w-[17px] h-[17px]" />
                <p className="font-medium text-[14px] text-[#14199] ">All BrandNav features included</p>
                </div>
                <div className="flex gap-3 py-[5px]">
                <Image src="/SUCCESS.png" width={17} height={17} alt=""  className="w-[17px] h-[17px]" />
                <p className="font-medium text-[14px] text-[#14199]" >200 Screener credits per month</p>
                </div>
                <div className="flex gap-3 py-[5px]">
                <Image src="/SUCCESS.png" width={17} height={17} alt=""  className="w-[17px] h-[17px]" />
                <p className="font-medium text-[14px] text-[#14199]">25 Enricher credits per month</p>
                </div>
                <div className="flex gap-3 py-[5px]">
                <Image src="/SUCCESS.png" width={17} height={17} alt=""  className="w-[17px] h-[17px]" />
                <p className="font-medium text-[14px] text-[#14199]">Pinpoint ideal prospects</p>
                </div>
                <div className="flex gap-3 py-[5px]">
                <Image src="/SUCCESS.png" width={17} height={17} alt=""  className="w-[17px] h-[17px]" />
                <p className="font-medium text-[14px] text-[#14199]">Chat support with real humans</p>
                </div>
            </div>
            <div className="text-center mt-[80px] items-end justify-end " >
                <Image src="/img2.svg" alt="" width={202} height={35}/>
                <p className="text-[11px] text-[#2F327D] mt-[10px]">These people are already using BrandNav. <br/>When will YOU?</p>
            </div>
        </div>
    )
}

export default GiftCard;
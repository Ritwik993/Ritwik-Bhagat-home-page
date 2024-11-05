import Image from "next/image"

const ReviewCard=()=>{
    return(
        <div className="container flex flex-col md:p-[40px] p-[20px] bg-white md:w-[450px] w-[350px]">
            <div className="review flex justify-between items-center">
                <div className="left flex  items-center gap-4">
                    <Image src="/im1.png" width={50} height={50} className="w-[50px] h-[50px]" alt=""/>
                    <div>
                        <p className="text-[13px] text-[#696984]">Sai</p>
                        <p className="text-[13px] text-[#696984]">CEO, Sentry Ecom</p>
                    </div>
                </div>
                <div className="right">
                 <Image src="/5 star review.png" className="w-[100px] h-[20px]" width={100} height={20} alt=""/>  
                </div>
            </div>
            <div className="bottomText mt-[10px]">
                <p className="font-semibold text-[#2F327D] text-[17px]">“Super helpful tool for lead generation!"</p>
                <p className="text-[14px] text-[#808080] mt-[10px]">“BrandNav has been extremely useful in helping us find high quality leads for our agency. It’s the best tool I’ve used so far for scrapping leads. Would definitely recommend BrandNav to businesses looking for a lead gen tool.”</p>
            </div>
        </div>
    )
}

export default ReviewCard;
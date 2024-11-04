import Card from "@/components/Card";
import Card1 from "@/components/Card1";
import Reason from "@/components/Reason";
import Reason2 from "@/components/Reason2";
import Reason3 from "@/components/Reason3";
import Image from "next/image";

const Home=()=>{
  return(
    <div className="container">
      <div className="heading flex justify-center flex-col items-center text-center ">
        <h1 className=" text-[#0D2052] text-[56px] font-medium mb-[20px]">Weapons to grow <br/> your Business</h1>
        <div>
        <p className="text-[16px] text-[#666666] font-normal">Turbocharge your business growth.</p>
        <p className="text-[16px] text-[#666666] font-normal">Our products help ignite sales and entrepreneurship.</p>
        </div>
      <button className="text-white bg-[#0084FF] rounded-[12px] py-[16px] px-[52px] mt-[40px]">Start for free</button>
      <div className="flex gap-2 mt-2 text-[#8A8A8A] items-center">
        <Image src="/uil_credit-card.png" className="w-[16px] h-[12px]" width={16} height={16} alt=""/>
        <p>No credit card required | </p>
        <Image src="/5 star review.png" alt="" className="w-[65px] h-[13px]" width={65} height={13}/>
        <p>4.8/5 G2 Rating</p>
      </div>
        {/* <Image src="/tools.png" alt="" className="w-[1060px] h-[300px]" width={1060} height={300}/> */}
        <div className="flex gap-3 items-end">
          <Image src="/verifier card.svg" alt="" width={256} height={300}/>
          <Image src="/screener card.svg" alt="" width={248} height={200}/>
          <Image src="/blacklist shield card.svg" width={256} height={208} alt=""/>
          <Image src="/enricher card.svg" alt="" width={256} height={300} />
        </div>
        <p className="text-[#666666] mt-14">Modern companies are using <span className="font-semibold">BrandNav</span></p>
        <Image src="/testimonial section.svg" alt="" width={700} height={24} className="mt-[28px]"/>
        <div className="middle flex flex-col justify-center align-center  pt-[200px] pb-[40px]">
         <p className="text-[#2F327D] font-bold text-[32px]">Choose Your Weapon</p>
         <p className="text-[#595B97]">BrandNav is a multi-dimensional platform designed for revenue growth</p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col gap-2">

        <div className="middleContainer">
      <div className="flex gap-4 justify-center items-center">
          <Card1/>
          <Card/>
          <Card/>
          <Card/>
         </div>
         <div className="bg-white p-[20px]  border-none rounded-[27px] rounded-tl-none flex justify-between  shadow-md">
           <div className="pt-[40px]">
           <h1 className="font-semibold text-[#1F1B2F] text-[20px] pb-[10px]">The ultimate eCom leads database</h1>
            <p className="text-[#1F1B2F] text-[15px]">Discover untapped eCommerce brands with our<br/> high-quality unsaturated leads database.</p>
            <div className="flex  items-center gap-2 mt-[20px]">
              <button className="bg-[#0084FF] text-white py-[5px] px-[10px] rounded-[5px]">Try for free</button>
              <p className="text-[#269BCD]">Learn More &gt; </p>
            </div>
           </div>
           <div className="flex gap-1">
            <Image src="/Group 1000000815.png" width={131} height={198} alt=""/>
            <Image src="/Group 1000000816.png" width={127} height={120} alt=""/>
           </div>
          </div>

        </div>
      <Image src="/banner dark.png" alt="" width={1280} height={912} className="w-full mt-[20px]"/>
      <div className="text-center mt-[100px]">
        <h1 className="text-[#2F327D] font-bold text-[36px]">Why should you use BrandNav?</h1>
        <p>Optimize your workflow for faster results and higher revenue</p>
      </div>
        <div className="flex flex-col justify-center items-center"> 
        <Reason/>
        <Reason2/>
        <Reason3/>
        </div>
        <div className="text-center mt-[150px]">
        <p className="font-bold text-[36px] text-[#2F327D] text-center">Pinpoint your ideal customer with<br/> relevant data attributes</p>
        <p className="text-[#007DF2] font-semibold text-[24px] mt-[40px]">Screener attributes</p>
        </div>
        <div className="flex justify-between items-center px-[200px] w-full ">
          <div className="flex flex-col items-center justify-center">
            <Image src="/Group 1000001990.svg" width={70} height={70} alt=""/>
            <p className="text-[20px] font-semibold text-[#2F327D]">Financials</p>
          </div>
          <div className="text-center flex flex-col items-center justify-center">
            <Image src="/Group 1000001990.svg" width={70} height={70} alt=""/>
            <p className="text-[20px] font-semibold text-[#2F327D]">Company Name <br/>& Website</p>
          </div>
          <div className="text-center flex flex-col items-center justify-center">
            <Image src="/Group 1000001990.svg" width={70} height={70} alt=""/>
            <p className="text-[20px] font-semibold text-[#2F327D]">Company <br/>location </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src="/Group 1000001990.svg" width={70} height={70} alt=""/>
            <p className="text-[20px] font-semibold text-[#2F327D]">Country code </p>
          </div>
        </div>

        <div className="flex justify-between w-full items-center px-[350px] mt-[20px]">
          <div className="flex flex-col items-center justify-center">
            <Image src="/Group 1000001990.svg" width={70} height={70} alt=""/>
            <p className="text-[20px] font-semibold text-[#2F327D]">Country code </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src="/Group 1000001990.svg" width={70} height={70} alt=""/>
            <p className="text-[20px] font-semibold text-[#2F327D]">Country code </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src="/Group 1000001990.svg" width={70} height={70} alt=""/>
            <p className="text-[20px] font-semibold text-[#2F327D]">Country code </p>
          </div>
          </div>
      </div>
    </div>
  )
}
export default Home;
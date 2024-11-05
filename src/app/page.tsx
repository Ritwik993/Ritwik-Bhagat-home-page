import Card from "@/components/Card";
import Card1 from "@/components/Card1";
import GiftCard from "@/components/GiftCard";
import Reason from "@/components/Reason";
import Reason2 from "@/components/Reason2";
import Reason3 from "@/components/Reason3";
import ReviewCard from "@/components/ReviewCard";
import Image from "next/image";

const Home=()=>{
  return(
    <div className="container md:px-[50px] px-[40px]">
      <div className="heading lg:flex justify-center flex-col items-center lg:text-center">
        <h1 className=" text-[#0D2052] md:text-[56px] text-[42px] font-medium mb-[20px]">Weapons to grow <br/> your Business</h1>
        <div>
        <p className="text-[16px] text-[#666666] font-normal">Turbocharge your business growth.</p>
        <p className="text-[16px] text-[#666666] font-normal">Our products help ignite sales and entrepreneurship.</p>
        </div>
      <button className="text-white bg-[#0084FF] rounded-[12px] py-[16px] px-[52px] mt-[40px] w-full sm:w-auto ">Start for free</button>
      <div className="hidden md:flex gap-2 mt-2 text-[#8A8A8A] items-center">
        <Image src="/uil_credit-card.png" className="w-[16px] h-[12px]" width={16} height={16} alt=""/>
        <p>No credit card required | </p>
        <Image src="/5 star review.png" alt="" className="w-[65px] h-[13px]" width={65} height={13}/>
        <p>4.8/5 G2 Rating</p>
      </div>
        {/* <Image src="/tools.png" alt="" className="w-[1060px] h-[300px]" width={1060} height={300}/> */}
        <div className="flex flex-col md:flex-row items-center gap-3 md:items-end md:mt-0 mt-[40px]">
          <Image src="/verifier card.svg" alt="" width={256} height={300}/>
          <Image src="/screener card.svg" alt="" width={248} height={200}/>
          <Image src="/blacklist shield card.svg" width={256} height={208} alt=""/>
          <Image src="/enricher card.svg" alt="" width={256} height={300} />
        </div>
        <div className="text-center">

        <p className="text-[#666666] mt-14">Modern companies are using <span className="font-semibold">BrandNav</span></p>
        <Image src="/testimonial section.svg" alt="" width={700} height={24} className="mt-[28px] hidden md:block"/>
        <Image src="/t1.png" alt="" width={320} height={137} className="mt-[28px] block md:hidden mb-[20px]"/>
        </div>

        <div className="hidden middle md:flex flex-col justify-center align-center  pt-[200px] pb-[40px]">
         <p className="text-[#2F327D] font-bold text-[32px]">Choose Your Weapon</p>
         <p className="text-[#595B97]">BrandNav is a multi-dimensional platform designed for revenue growth</p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col gap-2">

        <div className="middleContainer">
      <div className="hidden md:flex gap-4 justify-center items-center">
          <Card1/>
          <Card/>
          <Card/>
          <Card/>
         </div>
         <div className="bg-white p-[20px] hidden  border-none rounded-[27px] rounded-tl-none md:flex justify-between  shadow-md">
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
      {/* <Image src="/banner dark.png" alt="" width={1280} height={912} className="w-full mt-[20px]"/> */}

      <div className="imageContainer relative w-full flex flex-col justify-center items-center ">
        <Image src="/bg1.png" alt="" width={1280} height={912} className="w-full md:h-[912px] h-[1102px]"/>
        <div className="absolute md:top-1/6 top-[100px] flex flex-col-reverse  md:flex-row justify-around items-center md:pl-[200px] md:pr-[100px] pl-[60px] pr-[50px] w-full">
          <div>
            <GiftCard/>
          </div>
          <div className="text-center">
            <p className="font-semibold md:text-[40px] text-[30px] text-white md:mb-[0px] mb-[20px]">Not convinced yet?<br className="hidden md:block"/>
               Take it for a <span className="text-[#49A7FF]">FREE</span> spin<br/>before committing</p>
          </div>
        </div>
      </div>






      <div className="md:text-center mt-[100px]">
        <h1 className="text-[#2F327D] font-bold md:text-[36px] text-[30px]">Why should you use BrandNav?</h1>
        <p>Optimize your workflow for faster results and higher revenue</p>
      </div>
        <div className="flex flex-col justify-center items-center"> 
        <Reason/>
        <Reason2/>
        <Reason3/>
        </div>
        <div className="md:text-center mt-[150px]">
        <p className="font-bold md:text-[36px] text-[20px] text-[#2F327D] text-center">Pinpoint your ideal customer with<br/> relevant data attributes</p>
        <p className="text-[#007DF2] font-semibold text-[24px] mt-[40px]">Screener attributes</p>
        </div>
        <div className="flex justify-between items-center px-[200px] w-full ">
          <div className="flex flex-col items-center justify-center">
            <Image src="/Group 1000001990.svg" width={70} height={70} alt=""/>
            <p className="text-[20px] font-semibold text-[#2F327D]">Financials</p>
          </div>
          <div className="text-center flex flex-col items-center justify-center">
            <Image src="/Group 1000001992.svg" width={70} height={70} alt=""/>
            <p className="text-[20px] font-semibold text-[#2F327D]">Company Name <br/>& Website</p>
          </div>
          <div className="text-center flex flex-col items-center justify-center">
            <Image src="/Group 1000001992 (1).svg" width={70} height={70} alt=""/>
            <p className="text-[20px] font-semibold text-[#2F327D]">Company <br/>location </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src="/3.svg" width={70} height={70} alt=""/>
            <p className="text-[20px] font-semibold text-[#2F327D]">Country code </p>
          </div>
        </div>

        <div className="flex justify-between w-full items-center px-[350px] mt-[20px]">
          <div className="flex flex-col items-center justify-center">
            <Image src="/4.svg" width={70} height={70} alt=""/>
            <p className="text-[20px] font-semibold text-[#2F327D]">Employee count</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src="/5.svg" width={70} height={70} alt=""/>
            <p className="text-[20px] font-semibold text-[#2F327D]">Industry </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src="/6.svg" width={70} height={70} alt=""/>
            <p className="text-[20px] font-semibold text-[#2F327D]">and 20+ more </p>
          </div>
          </div>
          
          <p className="text-[#007DF2] font-semibold text-[24px] mt-[40px] mb-[20px]">Enricher attributes</p>
          <div className="flex justify-between items-center px-[200px] w-full ">
          <div className="flex flex-col items-center justify-center">
            <Image src="/7.svg" width={70} height={70} alt=""/>
            <p className="text-[20px] font-semibold text-[#2F327D]">Phone</p>
          </div>
          <div className="text-center flex flex-col items-center justify-center">
            <Image src="/8.svg" width={70} height={70} alt=""/>
            <p className="text-[20px] font-semibold text-[#2F327D]">Email</p>
          </div>
          <div className="text-center flex flex-col items-center justify-center">
            <Image src="/9.svg" width={70} height={70} alt=""/>
            <p className="text-[20px] font-semibold text-[#2F327D]">Job title</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src="/10.svg" width={70} height={70} alt=""/>
            <p className="text-[20px] font-semibold text-[#2F327D]">Linkedin</p>
          </div>
        </div>


      <div className=" text-center">
      <p className="text-[#2F327D] font-bold text-[36px] mt-[250px]">Fix data accuracy problems<br/> with BrandNav</p>
      <div className="flex gap-5 mt-8">
      <div>
        <Image src="/11.png" width={439} height={426} alt="" className="w-[439px] h-[330px]"/>
        <p className="font-semibold text-[#F04148] text-[20px]">Before</p>
      </div>
      <div>
        <Image src="/12.png" width={439} height={426} alt="" className="w-[439px] h-[330px]"/>
        <p className="font-semibold text-[#F04148] text-[20px]">After</p>
      </div>
      </div>
      </div>

      <div className="flex flex-col text-center items-center justify-center mt-[200px] mb-[100px]">
      <p className="text-[#2F327D] font-bold text-[36px]">Who is using BrandNav?</p>
      <p className="text-[16px] text-[#595B97] mt-[15px] mb-[20px]">BrandNav has become irreplaceable tool for businesses</p>
      
      <div className="grid grid-cols-3 gap-x-8 gap-y-[100px] px-[100px]">
      <div className="text-center flex flex-col items-center justify-center">
        <Image src="/15.png" width={71} height={66} alt=""/>
        <p className="text-[#2F327D] font-semibold text-[20px] mt-[20px]">Sales & Marketing Teams</p>
        <p className="text-[16px] text-[#595B97]">Sales and marketing teams are using BrandNav to efficiently locate and verify prospect contact information and identify key decision-makers.</p>
      </div>
      <div className="text-center flex flex-col items-center justify-center">
        <Image src="/161.png" width={71} height={66} alt=""/>
        <p className="text-[#2F327D] font-semibold text-[20px] mt-[20px]">Software & IT Companies</p>
        <p className="text-[16px] text-[#595B97]">IT companies are using BrandNav to build lists for outreach, identify target organizations, and verify email addresses of leads to improve email deliverability.</p>
      </div>
      <div className="text-center flex flex-col items-center justify-center">
        <Image src="/171.png" width={71} height={66} alt=""/>
        <p className="text-[#2F327D] font-semibold text-[20px] mt-[20px]">Service Providers</p>
        <p className="text-[16px] text-[#595B97]">Service providers are using BrandNav  to locate accurate email addresses  build a list of contacts, and improve the efficiency of their sales process.</p>
      </div>
      <div className="text-center flex flex-col items-center justify-center">
        <Image src="/18.png" width={71} height={66} alt=""/>
        <p className="text-[#2F327D] font-semibold text-[20px] mt-[20px]">Recruiters</p>
        <p className="text-[16px] text-[#595B97]">Recruiters are using BrandNav to locate and verify the email addresses of job candidates, build a talent pool, and streamline their hiring process.</p>
      </div>
      <div className="text-center flex flex-col items-center justify-center">
        <Image src="/19.png" width={71} height={66} alt=""/>
        <p className="text-[#2F327D] font-semibold text-[20px] mt-[20px]">Backlinks Outreach</p>
        <p className="text-[16px] text-[#595B97]">SEO link builders are using BrandNav to locate and verify the email addresses of potential link partners, and build outreach lists for link-building purposes</p>
      </div>
      <div className="text-center flex flex-col items-center justify-center">
        <Image src="/20.svg" width={71} height={66} alt=""/>
        <p className="text-[#2F327D] font-semibold text-[20px] mt-[20px]">Investors</p>
        <p className="text-[16px] text-[#595B97]">Investors are using BrandNav to quickly find and verify contact information for key executives and decision-makers and streamline their workflow.</p>
      </div>
      
      </div>
      </div>

      </div>
      <div className="innerContainer bg-[#E1F1FE] w-full flex  items-center justify-center flex-col py-[60px]">
        <div className="text-center">
        <p className="text-[#2F327D] font-bold text-[36px]">Don’t just take our word for it</p>
        <div className="flex pt-[20px] gap-4 items-center">
          <p className="text-[#595B97] text-[20px] font-medium">Excellent</p>
          <Image src="/5 star review.png" className="w-[100px] h-[20px]" width={100} height={20} alt=""/>
          <p className="text-[#595B97] text-[20px] font-medium">4.8/5 G2 Ratings</p>
        </div>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-[40px] px-[100px]">
          <ReviewCard/>
          <ReviewCard/>
         </div>
      </div>
      <div className=" w-full flex  items-center justify-center flex-col py-[60px] ">
      <p className="text-[#2F327D] font-bold text-[36px]">Got a Question?<br/>
      Get Your Answers</p>
      <div className=" bg-white w-3/4 m-[100px] rounded-lg border-none shadow-lg">
    
       <div className="pl-[100px] pr-[20px] py-[20px] flex justify-between items-center border-none p-[40px]">
        <p className="text-[#616161] text-[16px] font-semibold">What is the purpose of email verifier?</p>
        <p className="w-[24px] h-[24px]  text-[#616161] text-[24px] font-semibold">+</p>
        </div>
        <hr className="border-0 h-[1px] bg-gray-300"/>


        <div className="pl-[100px] pr-[20px] py-[20px] flex justify-between items-center border-none p-[40px]">
        <p className="text-[#616161] text-[16px] font-semibold">What is the purpose of email verifier?</p>
        <p className="w-[24px] h-[24px]  text-[#616161] text-[24px] font-semibold">+</p>
        </div>
        <hr className="border-0 h-[1px] bg-gray-300"/>



        <div className="pl-[100px] pr-[20px] py-[20px] flex justify-between items-center border-none p-[40px]">
        <p className="text-[#616161] text-[16px] font-semibold">What is the purpose of email verifier?</p>
        <p className="w-[24px] h-[24px]  text-[#616161] text-[24px] font-semibold">+</p>
        </div>
        <hr className="border-0 h-[1px] bg-gray-300"/>



        <div className="pl-[100px] pr-[20px] py-[20px] flex justify-between items-center border-none p-[40px]">
        <p className="text-[#616161] text-[16px] font-semibold">What is the purpose of email verifier?</p>
        <p className="w-[24px] h-[24px]  text-[#616161] text-[24px] font-semibold">+</p>
        </div>
        <hr className="border-0 h-[1px] bg-gray-300"/>



        <div className="pl-[100px] pr-[20px] py-[20px] flex justify-between items-center border-none p-[40px]">
        <p className="text-[#616161] text-[16px] font-semibold">What is the purpose of email verifier?</p>
        <p className="w-[24px] h-[24px]  text-[#616161] text-[24px] font-semibold">+</p>
        </div>
        <hr className="border-0 h-[1px] bg-gray-300"/>




    

      </div>

      <div className="mx-[200px] relative flex items-center justify-center ">
      <Image 
        src="/bg2.png" 
        width={1080} 
        height={366} 
        alt="Background Image" 
        className="w-[1080px] h-[366px]" 
      />
    <div className="absolute flex flex-col items-center justify-center  top-16">
    <p className="font-bold text-[40px]   text-white">Want to see BrandNav in action?</p>
    <p className="text-[20px] font-semibold text-[#F2F2F2] mb-[20px] mt-[20px]">Try BrandNav for free today!</p>
    <button className="bg-[#0084FF] text-white rounded-[5px] px-[20px] py-[10px] ">Grab free leads</button>
    <div className="flex gap-2  text-white items-center mt-[20px]">
        <Image src="/im.png" className="w-[16px] h-[12px]" width={16} height={16} alt=""/>
        <p>No credit card required | </p>
        <Image src="/5 star review.png" alt="" className="w-[65px] h-[13px]" width={65} height={13}/>
        <p>4.8/5 G2 Rating</p>
      </div>
    </div>
   
    </div>
      </div>
    </div>
  )
}
export default Home;
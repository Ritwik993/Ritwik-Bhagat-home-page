import Image from "next/image";

const Footer=()=>{
    return(
       <div className="footer px-[100px] ">
         <div className="md:flex">
            <div className="flex-2 md:mr-[40px] mb-[20px]">
                <p className="font-semibold text-[18px] text-[#2F327D] mb-[30px]">BrandNav.io</p>
                <p className="text-[15px] text-[#212529] mb-[20px]">BrandNav is an Ecom Leads Database with tons of amazing filters. Now you can get access to stores with just a simple click.</p>
                <div className="flex gap-3">
                    <Image src="/f.png" width={24} height={24} className="w-[24px] h-[24px]" alt=""/>
                    <Image src="/t.png" width={24} height={24} className="w-[24px] h-[24px]" alt=""/>
                    <Image src="/i.png" width={24} height={24} className="w-[24px] h-[24px]" alt=""/>
                    <Image src="/g.png" width={24} height={24} className="w-[24px] h-[24px]" alt=""/>
                </div>
            </div>
            <div className="hidden md:block flex-1">
                <h1 className="text=[#212529] text-[16px] font-medium mb-[30px] ">Blog</h1>
                <p className="text-[#008EFF] text-[14px] cursor-pointer py-[5px]">All Blogs</p>
                <p className="text-[#008EFF] text-[14px] cursor-pointer py-[5px]">Cold Emailing</p>
            </div>
            <div className="hidden md:block flex-1">
            <h1 className="text=[#212529] text-[16px] font-medium mb-[30px] ">Documentation</h1>
                <p className="text-[#008EFF] text-[14px] cursor-pointer py-[5px]">Getting Started</p>
            </div>
            <div className="hidden md:block flex-1">
            <h1 className="text=[#212529] text-[16px] font-medium mb-[30px]">Resources</h1>
                <p className="text-[#008EFF] text-[14px] cursor-pointer py-[5px]">Latest Updates</p>
                <p className="text-[#008EFF] text-[14px] cursor-pointer py-[5px]">Roadmap</p>
                <p className="text-[#008EFF] text-[14px] cursor-pointer py-[5px]">About us</p>
                <p className="text-[#008EFF] text-[14px] cursor-pointer py-[5px]">Join us</p>
            </div>
            <div className="hidden md:block flex-1">
            <h1 className="text=[#212529] text-[16px] font-medium mb-[30px]">Legal</h1>
                <p className="text-[#008EFF] text-[14px] cursor-pointer py-[5px]">Terms & Conditions</p>
                <p className="text-[#008EFF] text-[14px] cursor-pointer py-[5px]">Privacy Policy</p>
                <p className="text-[#008EFF] text-[14px] cursor-pointer py-[5px]">Refund Policy</p>
                <p className="text-[#008EFF] text-[14px] cursor-pointer py-[5px]">Contact us</p>
            </div>

            <div className="md:hidden grid grid-cols-2">
            <div className="flex-1">
                <h1 className="text=[#212529] text-[16px] font-medium mb-[30px] ">Blog</h1>
                <p className="text-[#008EFF] text-[14px] cursor-pointer py-[5px]">All Blogs</p>
                <p className="text-[#008EFF] text-[14px] cursor-pointer py-[5px]">Cold Emailing</p>
            </div>
            <div className="flex-1">
            <h1 className="text=[#212529] text-[16px] font-medium mb-[30px] ">Documentation</h1>
                <p className="text-[#008EFF] text-[14px] cursor-pointer py-[5px]">Getting Started</p>
            </div>
            <div className="flex-1">
            <h1 className="text=[#212529] text-[16px] font-medium mb-[30px]">Resources</h1>
                <p className="text-[#008EFF] text-[14px] cursor-pointer py-[5px]">Latest Updates</p>
                <p className="text-[#008EFF] text-[14px] cursor-pointer py-[5px]">Roadmap</p>
                <p className="text-[#008EFF] text-[14px] cursor-pointer py-[5px]">About us</p>
                <p className="text-[#008EFF] text-[14px] cursor-pointer py-[5px]">Join us</p>
            </div>
            <div className="flex-1">
            <h1 className="text=[#212529] text-[16px] font-medium mb-[30px]">Legal</h1>
                <p className="text-[#008EFF] text-[14px] cursor-pointer py-[5px]">Terms & Conditions</p>
                <p className="text-[#008EFF] text-[14px] cursor-pointer py-[5px]">Privacy Policy</p>
                <p className="text-[#008EFF] text-[14px] cursor-pointer py-[5px]">Refund Policy</p>
                <p className="text-[#008EFF] text-[14px] cursor-pointer py-[5px]">Contact us</p>
            </div>

            </div>
        </div>

        
        <div className="text-center">
            <div className="m-[20px]">
            <hr className="border-0 bg-[#E3E2E5] h-[1px]" />
            </div>
            <p>© 2022 BrandNav. All rights reserved</p>
        </div>
       </div>
    )
}

export default Footer;
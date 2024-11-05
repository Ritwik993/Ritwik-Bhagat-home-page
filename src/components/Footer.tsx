import Image from "next/image";

const Footer=()=>{
    return(
       <div className="footer px-[100px]">
         <div className="flex">
            <div className="flex-2 mr-[40px]">
                <p className="font-semibold text-[18px] text-[#2F327D] mb-[40px]">BrandNav.io</p>
                <p className="text-[15px] text-[#212529] mb-[20px]">BrandNav is an Ecom Leads Database with tons of amazing filters. Now you can get access to stores with just a simple click.</p>
                <div className="flex gap-3">
                    <Image src="/f.png" width={24} height={24} className="w-[24px] h-[24px]" alt=""/>
                    <Image src="/t.png" width={24} height={24} className="w-[24px] h-[24px]" alt=""/>
                    <Image src="/i.png" width={24} height={24} className="w-[24px] h-[24px]" alt=""/>
                    <Image src="/g.png" width={24} height={24} className="w-[24px] h-[24px]" alt=""/>
                </div>
            </div>
            <div className="flex-1">
                <h1 className="text=[#212529] text-[16px] font-medium pb-[20px]">Blog</h1>
                <p className="text-[#008EFF] text-[14px]">All Blogs</p>
                <p className="text-[#008EFF] text-[14px]">Cold Emailing</p>
            </div>
            <div className="flex-1">
            <h1 className="text=[#212529] text-[16px] font-medium pb-[20px]">Documentation</h1>
                <p className="text-[#008EFF] text-[14px]">Getting Started</p>
            </div>
            <div className="flex-1">
            <h1 className="text=[#212529] text-[16px] font-medium pb-[20px]">Resources</h1>
                <p className="text-[#008EFF] text-[14px]">Latest Updates</p>
                <p className="text-[#008EFF] text-[14px]">Roadmap</p>
                <p className="text-[#008EFF] text-[14px]">About us</p>
                <p className="text-[#008EFF] text-[14px]">Join us</p>
            </div>
            <div className="flex-1">
            <h1 className="text=[#212529] text-[16px] font-medium pb-[20px]">Legal</h1>
                <p className="text-[#008EFF] text-[14px]">Terms & Conditions</p>
                <p className="text-[#008EFF] text-[14px]">Privacy Policy</p>
                <p className="text-[#008EFF] text-[14px]">Refund Policy</p>
                <p className="text-[#008EFF] text-[14px]">Contact us</p>
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
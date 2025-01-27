import Image from "next/image";

const Reason3=()=>{
    return(
        <div className="flex md:flex-row flex-col justify-between items-center gap-6 md:px-0 px-[10px]">
            <Image src="/image3.svg" alt="" width={437} height={407}/>
            <div className="right">
                <Image src="/filter (2) 1.svg" alt="" width={50} height={50}/>
                <h2 className="text-[#2F327D] font-semibold text-[26px] mb-[20px] text-left">Advanced search with 25+ unique filters</h2>
                <p className="md:w-[490px] text-[16px] text-[#595B97] text-left">BrandNav offers over 25+ filters to help users build highly segmented lists for better prospecting. With BrandNav, you can create highly targeted lists that are tailored to your specific needs, streamlining your workflow and maximizing your productivity.</p>
            </div>
        </div>
    )
}

export default Reason3;
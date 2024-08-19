import React from 'react'

function Category() {
  return (
    <div className="md:px-8 2xl:px-8 lg:flex lg:h-16 items-center max-w-[1024px] hidden headerBottom mx-auto box-content">
        <nav className="flex w-full relative lg:flex ps-3.5 xl:ps-5">
            <div className='cursor-pointer'>
                <a target="_self" className="relative inline-flex items-center px-3 py-3 text-sm font-normal xl:text-base text-heading xl:px-4 group-hover:text-black">
                    상의
                </a>
            </div>
            <div className='cursor-pointer'>
                <a target="_self" className="relative inline-flex items-center px-3 py-3 text-sm font-normal xl:text-base text-heading xl:px-4 group-hover:text-black">
                    아우터
                </a>
            </div>
            <div className='cursor-pointer'>
                <a target="_self" className="relative inline-flex items-center px-3 py-3 text-sm font-normal xl:text-base text-heading xl:px-4 group-hover:text-black">
                    바지
                </a>
            </div>
            <div className='cursor-pointer'>
                <a target="_self" className="relative inline-flex items-center px-3 py-3 text-sm font-normal xl:text-base text-heading xl:px-4 group-hover:text-black">
                    원피스/스커트
                </a>
            </div>
            <div className='cursor-pointer'>
                <a target="_self" className="relative inline-flex items-center px-3 py-3 text-sm font-normal xl:text-base text-heading xl:px-4 group-hover:text-black">
                    신발
                </a>
            </div>
            <div className='cursor-pointer'>
                <a target="_self" className="relative inline-flex items-center px-3 py-3 text-sm font-normal xl:text-base text-heading xl:px-4 group-hover:text-black">
                    가방
                </a>
            </div>
            <div className='cursor-pointer'>
                <a target="_self" className="relative inline-flex items-center px-3 py-3 text-sm font-normal xl:text-base text-heading xl:px-4 group-hover:text-black">
                    패션소품
                </a>
            </div>
            
        </nav>
    </div>
  )
}

export default Category
import { ChevronRight } from 'lucide-react'
import React from 'react'

const ProductPath = () => {
  return (
          <div className="hidden md:block pt-[58px] pl-[128px] text-sm text-gray-500 max-w-7xl mx-auto ">
        <div className="flex items-center gap-2 flex-wrap  h-[20px] w-[617px] ">
          {[
            "Home",
            "Jewellery",
            "Gifts",
            "Necklace",
            "Chains",
            "Shining Diva…",
          ].map((item) => (
            <React.Fragment key={item}>
              <span className='cursor-pointer'>{item}</span>
              <span className="text-gray-700">
                <ChevronRight size={16} strokeWidth={1} />
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
  )
}

export default ProductPath
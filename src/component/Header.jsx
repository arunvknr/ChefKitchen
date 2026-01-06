import { Search, ShoppingCart } from 'lucide-react'
import React from 'react'

const Header = ({
  today,
  cartCount,
  setSearchTerm,
  active,
  setActive,
  tabs,
  setShowOrders,
}) => {
  return (
     <div className="sticky top-0 z-30 bg-gray-800 px-6 pl-10 pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl h ">Chef Kitchen</h1>
                  <p className="text-sm text-gray-300">
                    {today.toLocaleDateString("en-US", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
    
                <div className="flex gap-5">
                  <div className="relative hidden sm:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" />
                    <input
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="h-14 pl-10 pr-4 w-60 rounded-xl bg-gray-800 border border-gray-600 outline-none p"
                      placeholder="Search food..."
                    />
                  </div>
    
                  <button
                    onClick={() => setShowOrders(true)}
                    className="relative bg-orange-500 rounded-xl px-4 py-2 flex items-center"
                  >
                    <div className="relative flex items-center justify-center">
                      <ShoppingCart size={38} />
    
                      {cartCount > 0 && (
                        <span
                          className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1
            bg-red-600 text-white text-xs font-bold
            flex items-center justify-center rounded-full"
                        >
                          {cartCount}
                        </span>
                      )}
                    </div>
                  </button>
                </div>
              </div>
              <div className="flex mt-6 space-x-10 border-b border-gray-600">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActive(tab.id)}
                    className={`pb-3 relative ${
                      active === tab.id ? "text-orange-400" : "text-white"
                    }`}
                  >
                    {tab.label}
                    {active === tab.id && (
                      <span className="absolute left-0 -bottom-px h-[3px] w-full bg-orange-400 rounded-full" />
                    )}
                  </button>
                ))}
              </div>
            </div>
  )
}

export default Header

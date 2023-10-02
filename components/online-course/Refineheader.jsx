import React from 'react'

export default function Refineheader() {
  return (
    <div className='col-md-12'>
            <div className="refineheader">
                <div className="row mb-5">
                    <div className="col-12 d-flex justify-content-between mb-3">
                         <button className='filter-refine'>
                         <i class="fa-solid fa-filter"></i>
                         Filter & Refine
                         </button>
                         <button className='reset'>
                         <i class="fa-solid fa-arrows-rotate"></i>
                         Reset
                         </button>
                    </div>
                    <div className="col-12 d-flex justify-content-end gap-2">
                        <button className='display-card'>
                        <i class="fa-solid fa-grip"></i>
                        Card
                        </button>
                        <button className='display-list'>
                        <i class="fa-solid fa-list"></i>
                        List
                        </button>
                        <button className='best-seller'>
                            Best Seller
                        </button>
                        <button className='newest'>Newest</button>
                        <button className='best-rated'>Best Rated</button>
                        <button className='price'>
                        <i class="fa-solid fa-arrow-up-wide-short"></i>
                        {/* <i class="fa-solid fa-arrow-up-short-wide"></i> */}
                            Price
                        </button>
                        <button className='cart'>
                        <i class="fa-solid fa-cart-shopping"></i>
                        </button>
                    </div>
                </div>
            </div>
    </div>
  )
}

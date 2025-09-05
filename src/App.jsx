import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { IoIosNotifications } from "react-icons/io";
import './App.css'
import Products from './Products';
import { CiHeart } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";


function App() {
  const [products,setProducts] = useState([])

useEffect(() => {
  fetch("auction.json")
  .then(res => res.json())
  .then(data => setProducts(data))
},[])

const [carts,setCart] = useState([]);

function handleCart(product){
  setCart([...carts,product])
}


function handleRemoveFromCart(id){
  let remainingCart = carts.filter(cart => cart.id !== id);
  setCart(remainingCart);
}
const [amount,setAmount] = useState(0)
function handleAmount(newAmount){
  setAmount(amount + newAmount);
}

function handleRemainingAmount(deductedAmount){
  setAmount(amount - deductedAmount);
}

  return (
    <>
      {/*Navbar start */}
    <div className="navbarMain">
      <div className="navbar bg-base-100 shadow-sm flex justify-between p-5">
  <div className="">
    <a className="btn btn-ghost text-3xl text-yellow-400"><span className='text-blue-600 text-2xl'>auction</span>Gallery</a>
  </div>

  <div className="navOptions flex gap-5 text-xl font-semibold">
    <p>Home</p>
    <p>Products</p>
    <p>Auction</p>
    <p>How to work</p>
  </div>

  <div className="flex justify-center items-center gap-5">

    <button ><IoIosNotifications className='text-3xl'/></button>

    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </div>
      {/* Navbar end  */}

      {/* banner section start */}
      <div className="bannerSec bg-[url('./assets/Banner.jpg')] w-[100%] h-[600px] bg-cover bg-no-repeat bg-center flex items-center ">

      <div className="bannerContent text-white ml-16 space-y-6">
        
        <h1 className='text-4xl font-bold'>Bid on Unique Items from Around<br />the World</h1>
        <p>Discover rare collectibles, luxury goods, and vintage<br/> treasures in our curated auctions</p>
      
          <button className="btn btn-neutral bg-white text-black font-bold rounded-sm">Find Auctions</button>
      
      </div>

      </div>
      {/* banner sectin end */}

      <div className="content flex justify-between p-30">
        <div className="leftContent mt-2">
          <Products products = {products} handleCart = {handleCart} handleAmount={handleAmount}></Products>
        </div>


        <div className="rightContent mt-5">
          <div className="card bg-blue-300  w-96">
  <div className="card-body items-center text-center">
    <div className='flex justify-center items-center gap-3'>
      <CiHeart className='text-2xl text-black'/>
      <h2 className='text-black text-xl font-bold'> Favourite Items</h2>
    </div>
  </div>
  <hr />
  
  <div className="cart">
    {
      (carts.length == 0) && <div className='mt-5 p-5 text-2xl'>
        <p className='text-center'> Nothing added</p>
      </div>
    }

    {
      carts.map(cart => 
      
      
      
        <div className="cartCard mt-5 flex justify-evenly bg-white p-5 m-5 rounded-lg">
          <div>
            <img className='w-20' src={cart.image} alt="" />
          </div>
          <div>
            <p className='font-bold text-xl'>{cart.title}</p>
            <div className='flex gap-4'>
              <p className='text-lg'>${cart.currentBidPrice}</p>
              <p className='text-lg'>Bids:{cart.bidsCount}</p>
            </div>
            <div className='flex items-center justify-center mt-3' onClick={() => {handleRemoveFromCart(cart.id);
                    handleRemainingAmount(cart.currentBidPrice);
            }}>
              <button className='text-3xl'>
              <CiCircleRemove />
            </button>
            </div>
          </div>
        </div>





      )
    }
  </div>





    <div className='text-center p-5'>
      <hr className=''/>
      <p className='text-gray-500 text-xl mt-2'>Total Bid amount: {amount}$</p>
    </div>

</div>
    
        </div>
      </div>
      

      {/* footer start */}

      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content  flex flex-col p-5">
  
    <div className="">
      <a className="btn btn-ghost text-3xl text-yellow-400"><span className='text-blue-600 text-2xl'>auction</span>Gallery</a>
    </div>

    <div className='flex text-lg font-semibold'>
      <p>Bid</p>
      <p>Win</p>
      <p>Own</p>
    </div>
    <div className='flex text-lg'>
      <p>Home</p>
      <p>Auction</p>
      <p>Categories</p>
      <p>How to work</p>
    </div>
    <div>
      <p className='text-2xl'>© 2025 AuctionHub. All rights reserved.</p>
    </div>

    
</footer>
      {/* footer end */}
    
    </>
  )
}

export default App

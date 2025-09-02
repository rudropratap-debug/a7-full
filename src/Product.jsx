import { CiHeart } from "react-icons/ci";
import { AiFillHeart } from 'react-icons/ai';
import { useEffect, useState } from 'react'

export default function Product({product,handleCart,handleAmount}){

  const [clicked, SetClicked] = useState(false);
    const handleButtonColor = () =>{
        SetClicked(true);
    }

    return(
        <tr className="text-2xl text-center space-x-5 border border-blue-300">
        <td className="p-5"><img className="w-20" src={product.image} alt="" /></td>
        <td colSpan={3}>{product.title}</td>
        <td className="p-5">{product.currentBidPrice}</td>
        <td className="p-5">{product.timeLeft}</td>
        <td className="p-5"><button onClick={() => {
          handleCart(product);
          handleAmount(product.currentBidPrice);
          handleButtonColor(false)
        }

        }>{clicked ? (
        <AiFillHeart size={25} color="red" />
    ) : (
        <CiHeart size={25} color="black" />
    )}
        </button></td>
      </tr>
    )
}
import Product from "./Product"
export default function Products({products,handleCart,handleAmount}){
    return(
        <div className="overflow-x-auto rounded-box border border-purple-300  rounded-xl">
  <table className="table shadow-lg">
    {/* head */}
    <thead className="text-2xl font-bold text-center border border-purple-300">
      <tr className="border border-blue-300">
        <th >Items</th>
        <th colSpan={3}></th>
        <th>Current Bids</th>
        <th>Time Left</th>
        <th>Bid Now </th>
      </tr>
    </thead>
    <tbody>
        {
            products.map(product => <Product product = {product} handleCart = {handleCart} handleAmount={handleAmount}></Product>)
        }
        
    </tbody>
  </table>
</div>
    )
}
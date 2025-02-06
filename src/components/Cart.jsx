import React, { useContext, useEffect } from "react";
import { storeContext } from "../Context/StoreData";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import { toast } from "keep-react";

const Cart = () => {
  const { cart, setCart } = useContext(storeContext);
  const { wishlist, setWishlist } = useContext(storeContext);

  const handleDeleteToCart = (item) => {
    const filterItem = cart.filter((menu) => menu._id !== item);
    setCart(filterItem);
  };

  const handleMoveToWishList = (item) => {
    const alreadyExist = wishlist.find((menu) => menu._id === item._id);
    if (alreadyExist) {
      return toast.error("Item already exist in wishlist");
    } else {
      setWishlist([...wishlist, item]);
      toast.success("Added Item in Wishlist");
    }
  };

  console.log("Cart section: ", cart);
  return (
    <div className="my-6">
      <h4 className="mb-2 pl-2">{cart.length} Item in Cart</h4>
      <div className="space-y-3">
        {cart?.map((item) => (
          <div
            key={item?._id}
            className="flex  items-center gap-6 bg-white shadow-xl border border-metal-100 rounded-xl p-3"
          >
            <div className="w-28 h-24 bg-[#dcdde1] rounded-lg">
              <img src={item?.image} />
            </div>
            <div className="w-full flex justify-between items-center space-y-2 pr-6">
              <div>
                <h3 className="text-xl font-semibold">{item?.name}</h3>
                <p className="text-metal-800">{item?.price} TK</p>
                <div>
                  <span className="text-metal-700 mr-2">{item?.rating}</span>
                  <Rating
                    initialRating={item?.rating}
                    readonly={true}
                    emptySymbol={<FaStar className="text-metal-500" />}
                    fullSymbol={<FaStar className="text-warning-500" />}
                  ></Rating>
                </div>
              </div>
              <div className="text-right text-[#CC3333] space-y-2">
                <p
                  onClick={() => handleDeleteToCart(item?._id)}
                  className="cursor-pointer"
                >
                  Remove
                </p>
                <p
                  onClick={() => handleMoveToWishList(item)}
                  className="cursor-pointer"
                >
                  Move to Wishlist
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;

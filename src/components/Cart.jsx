import React, { useContext } from "react";
import { storeContext } from "../Context/StoreData";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";

const Cart = () => {
  const { cart, setCart } = useContext(storeContext);

  console.log("Cart section: ", cart);
  return (
    <div className="my-6">
      <h4 className="mb-2">2 Courses in Cart</h4>
      <div>
        {cart?.map((item) => (
          <div
            key={item?._id}
            className="flex  items-center gap-6 bg-white shadow-xl border border-metal-100 rounded-xl p-3"
          >
            <div className="w-28 h-24 bg-[#dcdde1] rounded-lg">
              <img src={item?.image} />
            </div>
            <div>
              <h3>{item?.name}</h3>
              <p>{item?.price} TK</p>
              <div>
                {item?.rating}
                <Rating
                  initialRating={item?.rating}
                  readonly={true}
                  emptySymbol={<FaStar className="text-metal-500" />}
                  fullSymbol={<FaStar className="text-warning-500" />}
                ></Rating>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;

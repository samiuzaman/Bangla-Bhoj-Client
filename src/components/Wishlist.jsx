import { useContext } from "react";
import { storeContext } from "../Context/StoreData";
import { toast } from "keep-react";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";

const Wishlist = () => {
  const { cart, setCart } = useContext(storeContext);
  const { wishlist, setWishlist } = useContext(storeContext);

  const handleDeleteToWishlist = (item) => {
    const filterItem = wishlist.filter((menu) => menu._id !== item);
    console.log("Filter Item: ", filterItem);
    setWishlist(filterItem);
  };

  const handleAddToCart = (item) => {
    const alreadyExist = cart.find((menu) => menu._id === item._id);
    if (alreadyExist) {
      return toast.error("Item already exist in cart");
    } else {
      setCart([...cart, item]);
      toast.success("Added Item in Cart");
    }
  };

  return (
    <div className="my-6">
      <h4 className="mb-2 pl-2">{wishlist.length} Item in Wishlist</h4>
      <div className="space-y-3">
        {wishlist?.map((item) => (
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
                  onClick={() => handleDeleteToWishlist(item?._id)}
                  className="cursor-pointer"
                >
                  Remove
                </p>
                <p
                  onClick={() => handleAddToCart(item)}
                  className="cursor-pointer"
                >
                  Add to Cart
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;

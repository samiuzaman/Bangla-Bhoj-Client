import axios from "axios";
import Rating from "react-rating";
import { useContext, useEffect, useState } from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Button, toast } from "keep-react";
import { ShoppingCart } from "phosphor-react";
import { storeContext } from "../Context/StoreData";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const { cart, setCart } = useContext(storeContext);
  const { wishlist, setWishlist } = useContext(storeContext);
  useEffect(() => {
    fetchItemDetails();
  }, []);
  const fetchItemDetails = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/item/${id}`
    );
    setDetails(data);
  };
  const {
    _id,
    name,
    image,
    category,
    price,
    availability,
    rating,
    description,
  } = details;

  const handleAddToCart = (item) => {
    const alreadyExist = cart.find((menu) => menu._id === item._id);
    if (alreadyExist) {
      return toast.error("Item already exist in cart");
    } else {
      setCart([...cart, item]);
      toast.success("Added Item in Cart");
    }
  };
  const handleAddToWishList = (item) => {
    const alreadyExist = wishlist.find((menu) => menu._id === item._id);
    if (alreadyExist) {
      return toast.error("Item already exist in wishlist");
    } else {
      setWishlist([...wishlist, item]);
      toast.success("Added Item in Wishlist");
    }
  };

  return (
    <div className="w-11/12 lg:w-4/5 mx-auto py-10 ">
      <div className="flex flex-col lg:flex-row justify-around items-center gap-8">
        <div className="w-full lg:w-1/2 h-96 bg-[#dcdde1] rounded-lg">
          <img className="lg:max-w-lg h-full mx-auto" src={image} />
        </div>
        <div className="w-full lg:w-1/2 space-y-3">
          <h3 className="text-3xl font-semibold text-black">{name}</h3>
          <div>
            <Rating
              initialRating={rating}
              readonly={true}
              emptySymbol={<FaStar className="text-metal-500" />}
              fullSymbol={<FaStar className="text-warning-500" />}
            ></Rating>
          </div>
          <p className="text-metal-700">
            Price: <span className="font-medium">{price} TK</span>
          </p>
          <p className="text-metal-700">
            Category: <span className=" font-medium">{category}</span>
          </p>
          <p className="text-metal-700">
            Availability :
            <span
              className={`${
                availability ? "text-success-600" : "text-error-600"
              }`}
            >
              {availability === true ? " In stock" : " Out of stock"}
            </span>
          </p>
          <div className="space-x-2">
            {availability ? (
              <Button
                onClick={() => handleAddToCart(details)}
                className="bg-[#CC3333] "
              >
                <ShoppingCart size={18} className="mr-1.5" />
                Add to cart
              </Button>
            ) : (
              <Button disabled className=" disabled:bg-[#9b1e1e]">
                <ShoppingCart size={18} className="mr-1.5" />
                Add to cart
              </Button>
            )}
            <Button
              onClick={() => handleAddToWishList(details)}
              className="bg-[#CC3333]"
            >
              <FaRegHeart className="mr-1" />
              Add to Wishlist
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-8 space-y-6">
        <p className="bg-[#dcdde1] pl-2 py-2 text-[#ca2929]">Description</p>
        <p className="text-justify text-metal-700">{description}</p>
      </div>
    </div>
  );
};

export default Details;

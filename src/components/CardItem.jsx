import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "keep-react";
import { ShoppingCart } from "phosphor-react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CardItem = ({ data }) => {
  const { _id, name, image, price, rating, category, description } = data;
  return (
    <div>
      <Card className=" max-w-sm hover:shadow-xl transition">
        <Link to={`/details/${_id}`}>
          <CardHeader>
            <img
              className="w-full h-72 bg-[#dcdde1] transition-transform duration-200 hover:scale-110 overflow-hidden"
              src={image}
            />
          </CardHeader>
          <CardContent className="space-y-3">
            <CardTitle className="text-xl">{name}</CardTitle>
            <CardDescription className="text-metal-500">
              {description.substring(0, 92)}...
            </CardDescription>
          </CardContent>
        </Link>
        <CardFooter className="flex  justify-between items-center px-7 pb-5">
          <p className="text-error-500 font-medium">Price: {price} TK</p>
          <div className="flex justify-center items-center gap-3 ">
            <Button variant="softBg" shape="icon">
              <ShoppingCart size={16} />
            </Button>
            <Button variant="softBg" shape="icon">
              <FaRegHeart />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardItem;

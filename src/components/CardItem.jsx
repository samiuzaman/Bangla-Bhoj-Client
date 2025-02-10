import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "keep-react";

import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";

const CardItem = ({ data }) => {
  const { _id, name, image, price, rating, category, description } = data;
  return (
    <div>
      <Card className="h-full max-w-sm hover:shadow-xl transition">
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

            <p className="text-error-500 font-medium">Price: {price} TK</p>
          </CardContent>
        </Link>
      </Card>
    </div>
  );
};

export default CardItem;

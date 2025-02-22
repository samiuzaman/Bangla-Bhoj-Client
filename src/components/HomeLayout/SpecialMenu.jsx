import Title from "../Title";
import CardItem from "../CardItem";
import { useEffect, useState } from "react";
import axiox from "axios";

const SpecialMenu = () => {
  const [cardData, setCardData] = useState();
  useEffect(() => {
    fetchCardData();
  }, []);

  const fetchCardData = async () => {
    const { data } = await axiox.get(
      `${import.meta.env.VITE_API_URL}/special-menu`
    );
    setCardData(data);
  };

  return (
    <div className="w-11/12 xl:w-5/6 mx-auto ">
      <div className="pt-14">
        <Title
          title="Our Specials Menu"
          subTitel="Our Special Menu features the top-rated dishes, chosen by our happy customers. Don't miss out on these delicious favorite"
        ></Title>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mx-auto justify-items-center gap-5 py-10">
        {cardData?.map((data) => (
          <CardItem key={data._id} data={data}></CardItem>
        ))}
      </div>
    </div>
  );
};

export default SpecialMenu;

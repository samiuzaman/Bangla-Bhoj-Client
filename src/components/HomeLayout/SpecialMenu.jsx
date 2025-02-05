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
    const { data } = await axiox.get(`${import.meta.env.VITE_API_URL}/menus`);
    setCardData(data);
  };

  return (
    <div className="w-11/12 lg:w-5/6 mx-auto my-12">
      <div>
        <Title title="Our Specials Menu" subTitel="Sub Title"></Title>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto justify-items-center gap-8">
        {cardData?.map((data) => (
          <CardItem key={data._id} data={data}></CardItem>
        ))}
      </div>
    </div>
  );
};

export default SpecialMenu;

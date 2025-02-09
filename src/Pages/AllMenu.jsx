import axios from "axios";
import React, { useState, useEffect } from "react";
import CardItem from "../components/CardItem";

const AllMenu = () => {
  const [allMenu, setAllMenu] = useState([]);
  useEffect(() => {
    fetchAllMenu();
  }, [setAllMenu]);

  const fetchAllMenu = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/menus`);
    setAllMenu(data);
    console.log("Axios Data: ", data);
  };
  console.log("allMenu =>", allMenu);
  return (
    <div className="w-11/12 lg:w-5/6 mx-auto">
      <div>
        <h3> Search , filter, sort</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-10 justify-items-center">
        {allMenu?.map((menu) => (
          <CardItem key={menu?._id} data={menu}></CardItem>
        ))}
      </div>
    </div>
  );
};

export default AllMenu;

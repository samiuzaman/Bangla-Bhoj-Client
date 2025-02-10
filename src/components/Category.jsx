import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [categorys, setCategorys] = useState();
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/category`).then((res) => {
      setCategorys(res.data);
    });
  }, [setCategorys]);
  console.log(categorys);

  return (
    <div className="w-11/12 lg:w-4/5 mx-auto pt-16 space-y-5">
      <h2 className="text-center text-black font-bold text-3xl">Category</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5">
        {categorys?.map((category) => (
          <Link to={`/all-menu?category=${category?.category}`}>
            <div className="bg-white shadow-lg text-center py-3 cursor-pointer rounded-md hover:bg-[#CC3333] hover:text-white font-medium transition-transform">
              <span>{category.category}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;

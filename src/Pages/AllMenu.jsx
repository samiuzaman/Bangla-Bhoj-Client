import axios from "axios";
import React, { useState, useEffect } from "react";
import CardItem from "../components/CardItem";
import {
  InputIcon,
  Input,
  Button,
  Select,
  SelectAction,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
  Empty,
  EmptyImage,
  EmptyTitle,
  EmptyDescription,
} from "keep-react";
import { FaSearch } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const AllMenu = () => {
  const [allMenu, setAllMenu] = useState([]);
  const location = useLocation();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  console.log("Search value: ", search);
  useEffect(() => {
    fetchAllMenu();
  }, [setAllMenu, setSearch]);

  const fetchAllMenu = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/menus${location.search}`
    );
    setAllMenu(data);
    console.log("Axios Data: ", data);
  };
  const handleSearch = (value) => {
    setSearch(value);
    axios
      .get(`${import.meta.env.VITE_API_URL}/menus?search=${search}`)
      .then((res) => {
        setAllMenu(res.data);
      });
  };
  const handleSort = async (value) => {
    console.log("handle Sort: ", value);
    const allItem = [...allMenu];
    if (value === "highToLowPrice") {
      const sortByHighToLowPrice = allItem.sort((a, b) => b.price - a.price);
      setAllMenu(sortByHighToLowPrice);
    } else if (value === "lowToHighPrice") {
      const sortByLowToHighPrice = allItem.sort((a, b) => a.price - b.price);
      setAllMenu(sortByLowToHighPrice);
    } else if (value === "highToLowRating") {
      const sortByHighToLowRating = allItem.sort((a, b) => b.rating - a.rating);
      setAllMenu(sortByHighToLowRating);
    } else if (value === "lowToHighRating") {
      const sortByLowToHighRating = allItem.sort((a, b) => a.rating - b.rating);
      setAllMenu(sortByLowToHighRating);
    }
  };

  const handleReset = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/menus`);
    setAllMenu(data);
    navigate("/all-menu");
  };
  return (
    <div className="w-11/12 lg:w-5/6 mx-auto py-12">
      <Helmet>
        <title>All Menu| Bangla Bhoj</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="flex justify-center items-center gap-5 lg:gap-10">
        <fieldset className="relative w-64">
          <Input
            placeholder="Search"
            className="ps-11 focus:border-none"
            onChange={(event) => handleSearch(event.target.value)}
          />
          <InputIcon>
            <FaSearch size={19} color="#AFBACA" />
          </InputIcon>
        </fieldset>
        <div>
          <Select onValueChange={(e) => handleSort(e)}>
            <SelectAction className="w-48 border-none">
              <SelectValue placeholder="Sort by" />
            </SelectAction>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sort by</SelectLabel>
                <SelectItem value="highToLowPrice">
                  High to Low Price
                </SelectItem>
                <SelectItem value="lowToHighPrice">
                  Low to High Price
                </SelectItem>
                <SelectItem value="highToLowRating">
                  High To Low Rating
                </SelectItem>
                <SelectItem value="lowToHighRating">
                  Low To High Rating
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button
            onClick={() => handleReset()}
            variant="outline"
            className="border-[#CC3333] text-[#CC3333] hover:text-white hover:bg-error-600"
          >
            Reset
          </Button>
        </div>
      </div>
      {allMenu?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8 justify-items-center">
          {allMenu?.map((menu) => (
            <CardItem key={menu?._id} data={menu}></CardItem>
          ))}
        </div>
      ) : (
        <Empty classID="">
          <EmptyImage>
            <img
              src="https://staticmania.cdn.prismic.io/staticmania/499b23f3-41ed-4bc9-a9eb-43d13779d2f8_Property+1%3DSad+screen_+Property+2%3DSm.svg"
              height={234}
              width={350}
              alt="404"
            />
          </EmptyImage>
          <EmptyTitle className="mb-[14px] my-6 text-error-600 ">
            {location?.search.substring(10)} item is not available
          </EmptyTitle>
          <Link to="/">
            <Button color="secondary">Go to home</Button>
          </Link>
        </Empty>
      )}
    </div>
  );
};

export default AllMenu;

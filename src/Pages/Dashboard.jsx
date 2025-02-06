import {
  Buildings,
  Gear,
  ShieldWarning,
  ShoppingCart,
  User,
} from "phosphor-react";
import {
  Skeleton,
  SkeletonLine,
  Tabs,
  TabsContent,
  TabsItem,
  TabsList,
} from "keep-react";
import { FaRegHeart } from "react-icons/fa";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";

const Dashboard = () => {
  return (
    <div className="w-11/12 lg:w-4/5 mx-auto mt-6">
      <Tabs variant="underline" defaultValue="1" className="">
        <TabsList>
          <TabsItem value="1">
            <ShoppingCart size={16} />
            Cart
          </TabsItem>
          <TabsItem value="2">
            <FaRegHeart size={16} />
            WithList
          </TabsItem>
        </TabsList>
        <TabsContent value="1">
          <Cart></Cart>
        </TabsContent>
        <TabsContent value="2">
          <Wishlist></Wishlist>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;

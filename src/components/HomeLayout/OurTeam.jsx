import { useEffect, useState } from "react";
import Title from "../Title";
import axios from "axios";
import {
  Avatar,
  AvatarFallback,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "keep-react";

const OurTeam = () => {
  const [members, setMember] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/members`)
      .then((res) => setMember(res.data));
  }, []);
  return (
    <div className="bg-white pt-10 ">
      <div>
        <Title
          title="Top 3 Team Member"
          subTitel="Meet our top team members who bring expertise, creativity, and commitment to making Bangla Bhoj a place of exceptional taste and hospitality."
        ></Title>
      </div>
      <div className="w-11/12 lg:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center py-12 gap-6">
        {members?.map((member) => (
          <Card className="max-w-md">
            <CardContent>
              <CardHeader className="flex gap-4 items-center ">
                <Avatar>
                  <img src={member?.image} />
                </Avatar>
                <div>
                  <h4 className="text-xl font-medium text-metal-900">
                    {member?.name}
                  </h4>

                  <p className="font-medium  text-metal-800">{member?.role}</p>
                </div>
              </CardHeader>
              <CardDescription className="mt-4">
                {member?.description}
              </CardDescription>
            </CardContent>
          </Card>

          // <Card className="w-full h-full">
          //   <CardHeader className="h-72">
          //     <img className="w-full h-full" src={member?.image} />
          //   </CardHeader>
          //   <CardContent className="text-center">
          //     <h3 className="text-xl font-medium text-metal-900">{member?.name}</h3>
          //     <p className="text-metal-600">{member?.role}</p>
          //   </CardContent>
          // </Card>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;

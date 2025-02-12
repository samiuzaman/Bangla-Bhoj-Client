import { useEffect, useState } from "react";
import Title from "../Title";
import axios from "axios";
import { Card, CardContent, CardHeader } from "keep-react";

const OurTeam = () => {
  const [members, setMember] = useState([]);
  useEffect(() => {
    axios.get(`../../../public/member.json`).then((res) => setMember(res.data));
  }, []);
  return (
    <div className="w-11/12 lg:w-5/6 mx-auto">
      <div>
        <Title
          title="Our Team Member"
          subTitel="Our Special Menu features the top-rated dishes, chosen by our happy customers. Don't miss out on these delicious favorite"
        ></Title>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center py-12 gap-6">
        {members?.map((member) => (
          <Card className="w-full h-full">
            <CardHeader className="h-72">
              <img className="w-full h-full" src={member?.image} />
            </CardHeader>
            <CardContent className="text-center">
              <h3 className="text-xl font-medium text-metal-900">{member?.name}</h3>
              <p className="text-metal-600">{member?.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;

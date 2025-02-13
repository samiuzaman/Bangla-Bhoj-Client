import axios from "axios";
import { useEffect, useState } from "react";
import Title from "../Title";

const OurService = () => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/services`)
      .then((res) => setServiceData(res.data));
  }, [setServiceData]);
  console.log("Service Data => ", serviceData);
  return (
    <div className=" pt-12">
      <Title
        title="Our Service Section"
        subTitel=" We pride ourselves on offering a variety of services to elevate your dining experience."
      ></Title>
      <div className="w-11/12 lg:w-5/6 xl:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 mt-6">
        {serviceData?.map((service) => (
          <div className="bg-white hover:bg-[#FBB217] text-[#807f7f] hover:text-white flex flex-col border p-6 space-y-4 shadow-sm">
            <div className="flex flex-col justify-center items-center">
              <img className="w-12 h-12 " src={service?.icon} />
            </div>
            <h4 className=" text-xl font-bold text-center">{service?.title}</h4>
            <p className="">{service?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;

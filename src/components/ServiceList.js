import ServiceItem from "./ServiceItem";
import { FaShippingFast } from "react-icons/fa";
import { FaArrowRightArrowLeft, FaCheck } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import React from "react";

const ServiceList = () => {
  const services = [
    {
      name: "Quality Products",
      icon: <FaShippingFast className="text-sunGlow text-5xl" />,
    },
    {
      name: "Free Shipping",
      icon: <FaCheck className="text-sunGlow text-5xl" />,
    },
    {
      name: "14-Day Return",
      icon: <FaArrowRightArrowLeft className="text-sunGlow text-5xl" />,
    },
    {
      name: "24/7 Support",
      icon: <BiSolidPhoneCall className="text-sunGlow text-5xl" />,
    },
  ];

  const renderedServices = services.map((service) => {
    return (
      <React.Fragment key={service.name}>
        <ServiceItem service={service.name} icon={service.icon} />
      </React.Fragment>
    );
  });
  return <div className="__list">{renderedServices}</div>;
};

export default ServiceList;

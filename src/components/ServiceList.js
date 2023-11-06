import ServiceItem from "./ServiceItem";
import { FaShippingFast } from "react-icons/fa";
import { FaArrowRightArrowLeft, FaCheck } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import React from "react";

const ServiceList = () => {
  const iconClasses = "text-sunGlow text-5xl";
  const services = [
    {
      name: "Quality Products",
      icon: <FaShippingFast className={iconClasses} />,
    },
    {
      name: "Free Shipping",
      icon: <FaCheck className={iconClasses} />,
    },
    {
      name: "14-Day Return",
      icon: <FaArrowRightArrowLeft className={iconClasses} />,
    },
    {
      name: "24/7 Support",
      icon: <BiSolidPhoneCall className={iconClasses} />,
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

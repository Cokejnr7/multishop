const ServiceItem = ({ children, service, icon }) => {
  return (
    <div className="bg-white flex item__shadow items-center p-6 gap-x-4">
      {icon}
      <span className="text-marko  text-xl font-semibold">{service}</span>
    </div>
  );
};

export default ServiceItem;

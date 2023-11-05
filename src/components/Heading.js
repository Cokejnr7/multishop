const Heading = ({ name }) => {
  return (
    <div className="flex items-center gap-x-6">
      <h2 className="text-3xl font-bold text-marko sub__heading">{name}</h2>
      <span className="border-b-2 h-1 grow border-dashed "></span>
    </div>
  );
};

export default Heading;

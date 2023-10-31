import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <div className="bg-wildSand py-3">
        <ul className="flex gap-x-3">
          <li className="text-paleSky">About</li>
          <li className="text-paleSky">Contact</li>
          <li className="text-paleSky">Help</li>
          <li className="text-paleSky">FAQs</li>
        </ul>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;

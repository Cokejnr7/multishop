import Navbar from "./Navbar";
import Container from "./Container";
// GoTriangleDown

const Header = () => {
  return (
    <div>
      <div className="bg-wildSand py-3">
        <Container className="flex items-center justify-between">
          <ul className="flex gap-x-3">
            <li className="text-paleSky">About</li>
            <li className="text-paleSky">Contact</li>
            <li className="text-paleSky">Help</li>
            <li className="text-paleSky">FAQs</li>
          </ul>
          <span className="bg-white p-2">My Account</span>
        </Container>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;

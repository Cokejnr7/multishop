import Container from "./Container";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-marko mt-auto">
      <Container className="p-10 flex flex-wrap gap-y-10 justify-between">
        {/* address */}
        <div>
          <span className="font-semibold text-wildSand text-lg ">
            GET IN TOUCH
          </span>
          <div>
            <span className="block text-wildSand lg:max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium cum iusto tempore eius omnis aliquid quam magnam
              ducimus dolor.
            </span>
          </div>
        </div>

        <div>
          <span className="font-semibold text-wildSand text-lg">
            QUICK SHOP
          </span>
        </div>

        <div>
          <span className="font-semibold text-wildSand text-lg">
            MY ACCOUNT
          </span>
        </div>

        {/* newsletter */}
        <div>
          <span className="font-semibold text-wildSand text-lg">
            NEWSLETTER
          </span>
          <div>
            <span className="text-wildSand">
              Duo stet tempor ipsum sit amet magna ipsum tempor est
            </span>
          </div>
          <div className="flex flex-col gap-3 ">
            <span className="text-wildSand text-md font-semibold">
              FOLLOW US
            </span>
            {/* social links */}
            <ul className="flex gap-2">
              <li className="bg-sunGlow w-10 h-10  flex items-center justify-center">
                <FaTwitter className="text-marko" />
              </li>
              <li className="bg-sunGlow w-10  h-10   flex items-center justify-center">
                <FaFacebookF className="text-marko" />
              </li>
              <li className="bg-sunGlow w-10  h-10   flex items-center justify-center">
                <FaLinkedinIn className="text-marko" />
              </li>
              <li className="bg-sunGlow w-10  h-10   flex items-center justify-center">
                <FaInstagram className="text-marko" />
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Container className="p-3">
        <div className="w-full divider bg-paleSky"></div>
      </Container>
    </footer>
  );
};

export default Footer;

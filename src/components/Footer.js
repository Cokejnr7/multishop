import Container from "./Container";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Link from "./Link";

const Footer = () => {
  return (
    <footer className="bg-marko mt-auto">
      <Container className="pt-20 flex flex-col md:flex-row flex-wrap gap-y-10 justify-between">
        {/* address */}
        <div className="flex flex-col gap-y-6">
          <span className="font-semibold text-wildSand text-xl ">
            GET IN TOUCH
          </span>

          <div className="flex flex-col gap-y-6">
            <span className="block text-wildSand lg:max-w-md">
              No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et
              et dolor sed dolor. Rebum tempor no vero est magna amet no
            </span>

            <address className="flex flex-col gap-y-2 not-italic">
              <span className="flex gap-x-4 items-center">
                <FaLocationDot className="text-sunGlow" />
                <span className="text-wildSand">123 Street, New York, USA</span>
              </span>
              <span className="flex gap-x-4 items-center">
                <IoMdMail className="text-sunGlow" />
                <span className="text-wildSand">info@example.com</span>
              </span>
              <span className="flex gap-x-4 items-center">
                <FaPhone className="text-sunGlow" />
                <span className="text-wildSand">+012 345 67890</span>
              </span>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-y-6">
          <span className="font-semibold text-wildSand text-xl">
            QUICK SHOP
          </span>
          <ul className="flex flex-col gap-y-1">
            <li>
              <Link to="/" className="text-wildSand hover:text-paleSky">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="text-wildSand hover:text-paleSky">
                Our Shop
              </Link>
            </li>
            <li>
              <Link to="/cart" className="text-wildSand hover:text-paleSky">
                Shopping Cart
              </Link>
            </li>
            <li>
              <Link to="/checkout" className="text-wildSand hover:text-paleSky">
                Checkout
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-wildSand hover:text-paleSky">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-6">
          <span className="font-semibold text-wildSand text-xl">
            MY ACCOUNT
          </span>
          <ul className="flex flex-col gap-y-1">
            <li>
              <Link
                to="/account/login"
                className="text-wildSand hover:text-paleSky"
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link
                to="/account/register"
                className="text-wildSand hover:text-paleSky"
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>

        {/* newsletter */}
        <div className="flex flex-col gap-y-6">
          <span className="font-semibold text-wildSand text-xl">
            NEWSLETTER
          </span>
          <div className="flex flex-col gap-y-4">
            <span className="block text-wildSand max-w-xs">
              Duo stet tempor ipsum sit amet magna ipsum tempor est
            </span>
            <span className="flex">
              <input
                type="text"
                className="p-2 outline-none focus:border focus:border-butterMilk"
                placeholder="Your Email Address"
              />
              <button className="bg-sunGlow px-3 text-marko">Sign Up</button>
            </span>
          </div>
          <div className="flex flex-col gap-y-4 ">
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
      <Container className="p-6">
        <div className="w-full divider bg-paleSky"></div>

        <div>
          <span className="text-wildSand">
            © <span className="text-sunGlow">Domain</span>. All Rights Reserved.
            Designed by{" "}
            <a
              href="https://htmlcodex.com"
              className="text-sunGlow hover:text-corn hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              HTML Codex
            </a>
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

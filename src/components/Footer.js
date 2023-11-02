import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-marko mt-auto">
      <Container className="py-6 flex justify-between">
        {/* address */}
        <div>
          <span className="font-semibold text-wildSand text-lg">
            GET IN TOUCH
          </span>
          <div>
            <span className="text-wildSand">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium cum iusto tempore eius omnis aliquid quam magnam
              ducimus dolor.
            </span>
          </div>
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
          <div className="flex flex-col ">
            <span className="text-wildSand">FOLLOW US</span>
            {/* social links */}
            <div>socials</div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

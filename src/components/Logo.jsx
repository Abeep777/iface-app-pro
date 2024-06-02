import Tilt from "react-parallax-tilt";
import AppLogo from "./../assets/app-icon.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.8}
        glareColor="#ffffff"
        glarePosition="bottom"
        glareBorderRadius="20px"
        className="background-stripes parallax-effect"
        perspective={500}
      >
        <div className="inner-element">
          <img src={AppLogo} slt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;

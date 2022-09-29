import Image from "next/image";
import Link from "next/link";
import { GiWeightLiftingUp } from "react-icons/gi";

//interface FooterProps {}

const Footer = () => {
  return (
    <footer>
      <Link href="/">
        <h2>Home</h2>
      </Link>
      <a href="">
        <Image src="" alt="" />
        <GiWeightLiftingUp />
      </a>
    </footer>
  );
};

export default Footer;

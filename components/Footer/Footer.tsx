import Image from "next/image";
import Link from "next/link";
import { GiWeightLiftingUp } from "react-icons/gi";

interface FooterProps {
  title: string;
}

const Footer = ({ title }: FooterProps) => {
  return (
    <footer>
      <Link href="/">
        <h2>{title}</h2>
      </Link>
      <a href="">
        <Image src="" alt="" />
        <GiWeightLiftingUp />
      </a>
    </footer>
  );
};

export default Footer;

import Link from "next/link";
import { GiWeightLiftingUp } from "react-icons/gi";

interface NavbarProps {
  title: string;
}

const Navbar = ({ title }: NavbarProps) => {
  return (
    <nav>
      <h2>
        {title}
        <GiWeightLiftingUp />
      </h2>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/workouts">Workouts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

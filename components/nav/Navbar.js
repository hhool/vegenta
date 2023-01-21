import Image from "next/image";
import Link from "next/link";
import NavContainer from "./nav_container/navcontainer";
import { Discover } from "../../utils/data";
import Toggle from "./Toggle";
import { useSelector } from "react-redux";
const Navbar = ({ visit }) => {
  const { theme } = useSelector((state) => state);
  return (
    <>
    <div></div>
    </>
  );
};
export default Navbar;

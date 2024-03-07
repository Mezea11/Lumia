import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        |&nbsp;
        <Link to={"/"}>Home</Link> |&nbsp;
        <Link to={"/contact"}>Contact</Link> |&nbsp;
      </nav>
    </>
  );
}

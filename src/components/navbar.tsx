import { useState } from "react";
import "../App.css";
import Logo from "../assets/submit-success-check-mark-svgrepo-com.svg";
const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState<string>();
  const [isOpen, setOpen] = useState(false);
  const options = ["Option 1", "Option 2", "Option 3"];
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setOpen(false);
  };
  return (
    <div className="container">
      <nav>
        <div className="logo">
          <a href="#Home">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="links">
          <a style={{ color: "white", textDecoration: "none" }} href="#Home">
            Home
          </a>
          <a style={{ color: "white", textDecoration: "none" }} href="#Login">
            Login
          </a>
          <a style={{ color: "white", textDecoration: "none" }} href="#Pricing">
            Pricing
          </a>
        </div>
        <div className="dropdown" onClick={() => setOpen(!isOpen)}>
          {selectedOption ? selectedOption : "DropDown >"}
          {isOpen && (
            <ul>
              {options.map((option) => (
                <li
                  style={{ margin: "2px" }}
                  key={option}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

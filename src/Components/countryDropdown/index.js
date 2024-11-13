import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";

const CountryDropdown = () => {
  return (
    <>
      <Button className="countryDrop">
        <div className="info d-flex flex-column">
          <span className="label">Tu Ubicacion</span>
          <span className="name">Chile</span>
        </div>
        <span className="ml-auto"><FaAngleDown/></span>
      </Button>
    </>
  );
};

export default CountryDropdown;

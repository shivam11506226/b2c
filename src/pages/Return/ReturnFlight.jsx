import React from "react";
import { useNavigate } from "react-router";
function ReturnFlight() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    // Redirect to the "/returnResult" path
    navigate("/booking");
  };
  return (
    <div>
      <h1>return flight</h1>
      <button
        // type="submit"
        path=""
        className="search"
        justifyContent="center"
        onClick={handleButtonClick}
      >
        Search
      </button>
    </div>
  );
}

export default ReturnFlight;

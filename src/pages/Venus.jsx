import React from "react";
import venus1 from "../images/venus-1.png";
import venus2 from "../images/venus-2.png";
import venus3 from "../images/venus-3.png";
import venusOval from "../images/venusOval.png"
import Planet from "../components/Planet";

function Venus() {
  return (
    <>
      <Planet
        name="VENUS"
        info="Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight."
        image1={venus1}
        image2={venus2}
        image3={venus3}
        image4={venusOval}
        time="243 DAYS"
        revolution="224.7 DAYS"
        radius="6,051.8 KM"
        temp="471°C"
        color="#EDA249"
      />
    </>
  );
}

export default Venus;

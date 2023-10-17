import "./app.css";
import { Swiper, SwiperSlide } from "swiper/react";


import Eletrica1 from "../../assets/predio1.jpg";
import Eletrica2 from "../../assets/predio2.jpg";
import Eletrica3 from "../../assets/predio3.jpg";
import Eletrica4 from "../../assets/predio4.jpg";

const data = [
  {
    id: "1",
    image: <img src={Eletrica1} alt="eletrica1" className="slide-item" />,
  },
  {
    id: "2",
    image: <img src={Eletrica2} alt="eletrica2" className="slide-item" />,
  },
  {
    id: "3",
    image: <img src={Eletrica3} alt="eletrica3" className="slide-item" />,
  },
  {
    id: "4",
    image: <img src={Eletrica4} alt="eletrica4" className="slide-item" />,
  },
];

function Slide3() {
  return (
    <div className="container">

      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>{item.image}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slide3;

import { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';
import Image from "next/image";

import Lola from "../../public/static/lola.png";
import Straight from "../../public/icon/Straight.svg";

const Testimonials = () => {
  // State to keep track of the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Example data (replace with your dynamic data)
  const data = [
    { image: Lola, fullname: 'LOLA WILLIAMS', title: 'Rurkland Global Services has been an invaluable partner in our exploration projects. Their commitment to environmental sustainability and attention to safety have exceeded our expectations. Every step of the way, they kept us informed and involved, making the entire process smooth and efficient. We look forward to many more successful projects together.'},
    { image: Lola, fullname: 'LOLA WILLIAMS', title: 'Rurkland Global Services has been an invaluable partner in our exploration projects. Their commitment to environmental sustainability and attention to safety have exceeded our expectations. Every step of the way, they kept us informed and involved, making the entire process smooth and efficient. We look forward to many more successful projects together.'},
    { image: Lola, fullname: 'LOLA WILLIAMS', title: 'Rurkland Global Services has been an invaluable partner in our exploration projects. Their commitment to environmental sustainability and attention to safety have exceeded our expectations. Every step of the way, they kept us informed and involved, making the entire process smooth and efficient. We look forward to many more successful projects together.'}
  ];

  // Number of items to show per view
  const itemsPerView = 1;

  // Calculate maximum index based on the total number of items
  const maxIndex = Math.max(0, Math.ceil(data.length / itemsPerView) - 1);

  // Automatically go to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
    }, 5000); // 5000ms = 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <div className={styles.carouselContainer}>

      <div className={styles.partners_header}>
        <p className={styles.partners_par}>TESTIMONIALS</p>
        <h4 className={styles.banner_h4}>Hear What Our Customers <br /> Say</h4>
        <Image src={Straight} alt="" className={styles.spiral_img} />
      </div>

      <div className={styles.carouselContainerInner}>
        <div className={styles.carousel} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {data.map((item, index) => (
            <div key={index} className={styles.carouselItem}>
              <div className={styles.imageWrapper}>
                <p className={styles.imageText}>{item.title}</p>
                <Image src={item.image} alt={item.title} className={styles.carouselImage} />
                <h2 className={styles.imageText2}>{item.fullname}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;




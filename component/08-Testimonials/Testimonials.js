import { useState } from 'react';
import styles from './Testimonials.module.css';
import Image from "next/image";

import Lola from "../../public/static/lola.PNG";
import LeftArrow from "../../public/icon/test-left-arrow.svg";
import RightArrow from "../../public/icon/test-right-arrow.svg";

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

  // Navigation Handlers
  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  return (
    <div className={styles.carouselContainer}>

      <div className={styles.partners_header}>
        <p className={styles.partners_par}>TESTIMONIALS</p>
        <h4 className={styles.banner_h4}>Hear What Our Customers <br /> Say</h4>
      </div>

      <div className={styles.carouselContainerInner}>
        <button className={`${styles.navButton} ${styles.navButtonLeft}`} onClick={goPrev}>
          <Image src={LeftArrow} className={styles.arrow_img} alt="Previous" />
        </button>

        <div className={styles.carousel}>
          {data
            .slice(currentIndex * itemsPerView, currentIndex * itemsPerView + itemsPerView)
            .map((item, index) => (
              <div key={index} className={styles.carouselItem}>
                <div className={styles.imageWrapper}>
                  {/* Title at the top */}
                  <p className={styles.imageText}>{item.title}</p>
                  {/* Image below the title */}
                  <Image src={item.image} alt={item.title} className={styles.carouselImage} />
                  <h2 className={styles.imageText2}>{item.fullname}</h2>
                </div>
              </div>
            ))}
        </div>

        <button className={`${styles.navButton} ${styles.navButtonRight}`} onClick={goNext}>
          <Image src={RightArrow} className={styles.arrow_img} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;

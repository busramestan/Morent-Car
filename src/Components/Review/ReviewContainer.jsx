"use client";
import React, {useState} from "react";
import styles from "./ReviewContainer.module.scss";
import ReviewCard from "../ReviewCard/ReviewCard";

const AllReviewsData = [
  {
    id: 1,
    name: "Alex Stanton",
    job: "CEO at Bukalapark",
    date: "21 July 2022",
    rating: 4,
    review:
      "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    profilePic:
      "https://s3-alpha-sig.figma.com/img/9b76/706a/6ff04d2c5ee05f69f07eda85ba8c1846?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dUIVBCNTtVNG9lj-vKCwyKnjrFHNJfxRBEXt7zlm5c0-~EXLIWdLPGWjokYkk1fW4adfrbsnd9NfFXBNQf31E4KJbGbdXC7CljPdJmW-UQTAWSYXeSekDmjVVs4dwfCSIAzLEaCqvN82oND4M1t2cvU~aFU7y4D7MU4h~h6itjEbvDpgzZdlyvsYCw~JTVPsIKGjVKsZGmF9p9Eedzibuf7X7mQkyXrYnHl4X6INB4PIetboVgKk81pnCo4eTSZSnM8BA2EVgpqibazLjw2BMRcBbKY-ThBHxTNIlZgN0eSSUjCRwPVajLRSkCpfyO1VaT27OAhBVkKfNwpqLeASJA__",
  },

  {
    id: 2,
    name: "Skaylar Dias",
    job: "CEO at Amazon",
    date: "20 July 2022",
    rating: 4,
    review:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    profilePic:
      "https://s3-alpha-sig.figma.com/img/1f59/2390/d69545d7cf9ff5be12e2248ebf54993a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vrmo94G0IpJtyjbrUMt58RaTCCk8nzgMBSR-5hTiJZfXVcgOfnXLLFXY2oQC-CQLwYvvPqBirzrarRGmvfDDIp1d6wKfCQC5xTc4iolKsXPQWVsA2JA1HecWUQq11iuqYNmzgENOfPZEPUu3eLMjQajyRtUnX91OPbdqnCwTSCbRv1qoG6D2qbDybmQBhbmpCKsRJfnNpNVQIjy9ptceYL2oZx-y0vZRyp8lu9t73t2PObOdgEe-YUQ9~MqDxD6DDYfEMdctl~Mvy1IpLBd-lP2saKGguel8J0GBQ2c238HSV5DJbZMnsTEmptrTacLRsk5Hz9cyVpgJEZ5cMynidA__",
  },
  {
    id: 3,
    name: "Skaylar Dias",
    job: "CEO at Amazon",
    date: "20 July 2022",
    rating: 3,
    review:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    profilePic:
      "https://s3-alpha-sig.figma.com/img/1f59/2390/d69545d7cf9ff5be12e2248ebf54993a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vrmo94G0IpJtyjbrUMt58RaTCCk8nzgMBSR-5hTiJZfXVcgOfnXLLFXY2oQC-CQLwYvvPqBirzrarRGmvfDDIp1d6wKfCQC5xTc4iolKsXPQWVsA2JA1HecWUQq11iuqYNmzgENOfPZEPUu3eLMjQajyRtUnX91OPbdqnCwTSCbRv1qoG6D2qbDybmQBhbmpCKsRJfnNpNVQIjy9ptceYL2oZx-y0vZRyp8lu9t73t2PObOdgEe-YUQ9~MqDxD6DDYfEMdctl~Mvy1IpLBd-lP2saKGguel8J0GBQ2c238HSV5DJbZMnsTEmptrTacLRsk5Hz9cyVpgJEZ5cMynidA__",
  },
  { id: 4,
    name: "Alex Stanton",
    job: "CEO at Bukalapark",
    date: "21 July 2022",
    rating: 5,
    review:
      "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    profilePic:
      "https://s3-alpha-sig.figma.com/img/9b76/706a/6ff04d2c5ee05f69f07eda85ba8c1846?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dUIVBCNTtVNG9lj-vKCwyKnjrFHNJfxRBEXt7zlm5c0-~EXLIWdLPGWjokYkk1fW4adfrbsnd9NfFXBNQf31E4KJbGbdXC7CljPdJmW-UQTAWSYXeSekDmjVVs4dwfCSIAzLEaCqvN82oND4M1t2cvU~aFU7y4D7MU4h~h6itjEbvDpgzZdlyvsYCw~JTVPsIKGjVKsZGmF9p9Eedzibuf7X7mQkyXrYnHl4X6INB4PIetboVgKk81pnCo4eTSZSnM8BA2EVgpqibazLjw2BMRcBbKY-ThBHxTNIlZgN0eSSUjCRwPVajLRSkCpfyO1VaT27OAhBVkKfNwpqLeASJA__",
  }
];

const ReviewContainer = () => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);

  }

const showingReviews = showAll ? AllReviewsData : AllReviewsData.slice(0, 2);

  return (
    <div className={styles.revContainer}>
      <div className={styles.revHeading}>
        <span>Reviews</span>
        <div>{AllReviewsData.length}</div>
      </div>
      {showingReviews.map((review) => (
        <ReviewCard
          key={review.id}
          name={review.name}
          job={review.job}
          date={review.date}
          rating={review.rating}
          review={review.review}
          profilePic={review.profilePic}
        />
      ))} 
      <button onClick={handleShowAll} className={styles.revButton}>{showAll ? "Show Less △ " : "Show All ▽"} </button>


      
    </div>
  );
};

export default ReviewContainer;

import "@fortawesome/fontawesome-free/css/all.min.css"
import styles from "./ReviewCard.module.scss";

const ReviewCard = ({ name, profilePic, job, date, review, rating  }) => {

  const generateStars = (rating) => {
    const fullStars = Math.floor(rating); 
    const halfStar = rating % 1 >= 0.5; 
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); 

    const stars = [];
    for (let i = 0; i < fullStars; i++) stars.push(<i key={`full-${i}`} className="fa-solid fa-star"></i>);
    if (halfStar) stars.push(<i key="half" className="fa-solid fa-star-half-alt"></i>);
    for (let i = 0; i < emptyStars; i++) stars.push(<i key={`empty-${i}`} className="fa-regular fa-star"></i>);

    return stars;
  };

  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewCardStatus}>
        <img
          className={styles.profilePic}
          src={profilePic}
          alt={`${name} photo`}
        />
        <div className={styles.statusBox}>
          <div className={styles.status}>
            <div className={styles.nameJob}>
              <span className={styles.name}>{name}</span>
              <span className={styles.job}>{job}</span>
            </div>
            <div className={styles.ratingDiv}>
            <span className={styles.date}>{date}</span>
              <span className={styles.rating}>{generateStars(rating)}</span>
            </div>
          </div>
          <div className={styles.review}>{review}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

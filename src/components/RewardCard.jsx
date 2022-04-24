import React from "react";

function RewardCard({ icon, title, text, image, bg }) {
  return (
    <div className={`reward-card reward-card--${bg}`}>
      <img className="reward-card__icon" src={icon} alt="Icon" />
      <div className="reward-card__title heading-4">{title}</div>
      <div className="reward-card__text">{text}</div>
      <img src={image} alt="Reward screen" className="reward-card__image" />
    </div>
  );
}

export default RewardCard;

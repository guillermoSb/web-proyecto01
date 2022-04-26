import React from "react";
import PropTypes from "prop-types";

function Card({ title, footerTitle, footerSubtitle, img, variant = 1 }) {
  return (
    <div className="card">
      <div className="card__title">{title}</div>
      <div className="card__footer flex align-center">
        <img
          src={img}
          className={`card__image ${variant === 2 ? "card__image--big" : ""}`}
        />
        {variant == 1 ? (
          <div className="card__text">
            <div className="card__footer-title">{footerTitle}</div>
            <div className="card__footer-subtitle">{footerSubtitle}</div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  footerTitle: PropTypes.string.isRequired,
  footerSubtitle: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  variant: PropTypes.number,
};

export default Card;

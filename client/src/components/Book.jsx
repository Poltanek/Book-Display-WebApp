import React from 'react';
import "./styles/styles.css"

const Book = ({ title, price, image, sale, rating }) => (
  <div className="col mb-5">
    <div className="card h-100">
      {sale && <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>}
      <img className="card-img-top" src={image} alt={title} />
      <div className="card-body p-4">
        <div className="text-center">
          <h5 className="fw-bolder">{title}</h5>
          {rating && (
            <div className="d-flex justify-content-center small text-warning mb-2">
              {Array.from({ length: rating }, (_, i) => <div key={i} className="bi-star-fill"></div>)}
            </div>
          )}
          {price}
        </div>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
      </div>
    </div>
  </div>
);

export default Book;

import React, { useEffect } from "react";

const LoadImages = () => {
  useEffect(() => {
    const imagesToLoad = document.querySelectorAll("img[data-src]");
    const loadImages = (image) => {
      image.setAttribute("src", image.getAttribute("data-src"));
      image.onload = () => {
        image.removeAttribute("data-src");
      };
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          loadImages(img);
          observer.unobserve(img);
        }
      });
    });

    imagesToLoad.forEach((img) => {
      imageObserver.observe(img);
    });

    return () => {
      if (imagesToLoad && imageObserver) {
        imagesToLoad.forEach((img) => {
          imageObserver.unobserve(img);
        });
      }
    };
  }, []);

  return (
    <div>
      <img
        data-src="https://via.placeholder.com/300"
        alt="Placeholder"
        style={{ width: "300px", height: "300px" }}
      />
      <img
        data-src="https://via.placeholder.com/400"
        alt="Placeholder"
        style={{ width: "400px", height: "400px" }}
      />
      <img
        data-src="https://via.placeholder.com/500"
        alt="Placeholder"
        style={{ width: "500px", height: "500px" }}
      />
    </div>
  );
};

export default LoadImages;

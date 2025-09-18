import React, { useEffect, useRef, useState } from "react";
import "../../styles/reels.css";
import axios from "axios";
import { Link } from "react-router";

export default function Reels() {
  const videoRefs = useRef([]);
  const [videos, setVideos] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/food", {
        withCredentials: true,
      });
      console.log(response.data.foodItems);
      setVideos(response.data.foodItems);
    } catch (error) {
      console.error("Error fetching food:", error);
    }
  };

  // 👉 API call on mount
  useEffect(() => {
    getData();
  }, []);

  // 👉 Run observer only when videos are loaded
  useEffect(() => {
    if (!videos || videos.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video
              .play()
              .catch((err) => console.error("Autoplay blocked:", err));
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.7 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, [videos]); // 👈 dependency me videos

  return (
    <div className="reels-container">
      {videos?.map((item, index) => (
        <div className="reel" key={item._id}>
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={item.video} // ✅ backend se aa raha hai
            className="reel-video"
            muted
            playsInline
            loop
          />
          <div className="reel-overlay">
            <p className="reel-description">{item.description}</p>
            <Link
              to={`/food-partner/${item.foodPartner}`}
              className="reel-button"
            >
              Visit Store
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

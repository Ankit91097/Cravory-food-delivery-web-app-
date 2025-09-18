import React, { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { useParams } from "react-router";
import axios from "axios";
import "../../styles/profile.css";

export default function BusinessProfile() {
  const [videos, setVideos] = useState([]);
  const [profile, setProfile] = useState(null);
  const { id } = useParams();

  const foodPartnerData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/food-partner/${id}`,
        { withCredentials: true }
      );
      const profileData = response.data.foodPartner;
      setProfile(profileData);
      setVideos(response.data.foodPartner.foodItems || []);
    } catch (error) {
      console.error("Error fetching partner data:", error);
    }
  };

  console.log(videos);

  useEffect(() => {
    foodPartnerData();
  }, [id]);

  return (
    <div className="partner-profile">
      {/* Profile Card */}
      <div className="profile-card">
        <div className="profile-top">
          <div className="avatar"></div>
          <div className="profile-info">
            <h3 className="partner-name">{profile?.name}</h3>
            <p className="partner-address">
              <MapPin size={14} /> {profile?.address}
            </p>
          </div>
        </div>
        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-value">{profile?.totalMeals || 0}</span>
            <span className="stat-label">Total Meals</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{profile?.customersServed || 0}</span>
            <span className="stat-label">Customers Served</span>
          </div>
        </div>
      </div>

      {/* Video Grid */}
      <div className="video-grid">
        {videos.length > 0 ? (
          videos.map((item, idx) => (
            <div key={idx} className="video-item">
              <video
                src={item.video}
                className="video-thumb"
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className="play-overlay">▶</div>
            </div>
          ))
        ) : (
          <p className="no-videos">No specials uploaded yet.</p>
        )}
      </div>
    </div>
  );
}

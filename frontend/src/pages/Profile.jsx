import React, { useEffect, useState } from 'react';
import './Profile.css';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    country: '',
    photoURL: ''
  });
  const [image, setImage] = useState(null);

  // Fetch saved profile from backend (MongoDB)
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get('/api/user/profile'); // your backend route
        setProfile(data);
      } catch (err) {
        console.error('Failed to load profile:', err.message);
      }
    };
    fetchProfile();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Handle image file
  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setProfile({ ...profile, photoURL: URL.createObjectURL(file) });
  };

  // Submit updated profile
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (let key in profile) {
      formData.append(key, profile[key]);
    }
    if (image) {
      formData.append('image', image);
    }

    try {
      await axios.put('/api/user/profile', formData); // update endpoint
      alert('Profile saved successfully!');
    } catch (err) {
      console.error('Save failed:', err);
    }
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <h2>My Profile</h2>
        <form className="profile-form" onSubmit={handleSubmit}>
          <input type="text" name="name" value={profile.name} onChange={handleChange} placeholder="Full Name" />
          <input type="email" name="email" value={profile.email} onChange={handleChange} placeholder="Email" />
          <input type="text" name="phone" value={profile.phone} onChange={handleChange} placeholder="Phone Number" />
          <input type="text" name="address" value={profile.address} onChange={handleChange} placeholder="Address" />
          <input type="text" name="country" value={profile.country} onChange={handleChange} placeholder="Country" />
          <input type="file" onChange={handleImage} />
          {profile.photoURL && (
            <div className="profile-avatar">
              <img src={profile.photoURL} alt="Avatar" />
            </div>
          )}
          <button type="submit">Save Profile</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;

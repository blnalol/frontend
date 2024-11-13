import React, { useState } from 'react';
import './RegisterStepTwo.css'; // Link to the CSS file
import { useNavigate } from 'react-router-dom';

function RegisterStepTwo() {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  // Handle file input change
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + images.length > 5) {
      alert("You can only upload a maximum of 5 images.");
      return;
    }

    // Filter out non-image files and files larger than 500 KB
    const validImages = files.filter(file =>
      (file.type === "image/jpeg" || file.type === "image/png") &&
      file.size <= 500 * 1024 // 500 KB size limit
    );

    if (validImages.length === 0) {
      alert("Only JPEG or PNG images with a size of 500KB or less are allowed.");
    }

    setImages(prevImages => [...prevImages, ...validImages]);
  };

  // Remove an image from the list
  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(images); // Handle image submission here
    alert('User registered successfully!');
    navigate('/'); // Navigate to the desired page after submission
  };

  return (
    <div className="register-step-two-container">
      <div className="register-card">
        <h2>Upload User Photos</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/jpeg, image/png"
            multiple
            className="file-input"
          />
          <div className="image-preview-container">
            {images.map((image, index) => (
              <div key={index} className="image-preview">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Preview ${index + 1}`}
                  className="preview-image"
                />
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeImage(index)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <button type="submit" className="btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterStepTwo;

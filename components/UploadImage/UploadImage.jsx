import React, { useRef, useState } from 'react';
import { API_HOST } from '../../utils/utils';
import axios from 'axios';
import classes from './UploadImage.module.css'

const UploadImage = ({ event_id }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);
  const [imageKey, setImageKey] = useState('');

  const [imageUrl, setImageUrl] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedImage(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      alert('Please select an image to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage); // Append the base64 image here
    formData.append('event_id', event_id);

    try {
      setIsUploading(true);
      const response = await axios.post(`${API_HOST}/api/upload/image`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setImageUrl(response.data.img);

      setIsUploading(false);
    } catch (error) {
      console.error('Error uploading image:', error);
      setIsUploading(false);
    }
  };

  const handlePopImage = async () => {
    try {
      // Replace with the actual event ID you want to pop the image from
      const eventId = { event_id: event_id };

      const response = await axios.post(`${API_HOST}/api/pop/image`, JSON.stringify(eventId), {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        const poppedImage = response.data.poppedImage;
        alert('Poped image done');
      } else {
        // Handle errors
        console.error('Error popping image:', response.data.error);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error:', error);
    }
  };

  return (
    <div className={classes.uploadImage}>
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
          ref={fileInputRef}
        />
        <button onClick={handlePopImage} className={classes.btn}>Pop Last Event Image</button>
        <button onClick={() => fileInputRef.current.click()} disabled={isUploading} className={classes.btn}>
          Select from Device
        </button>
        {selectedImage && (
          <div>
            <p>Selected Image:</p>
            <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%' }} />
          </div>
        )}
        <button onClick={handleUpload} disabled={isUploading} className={classes.btn}>
          {isUploading ? 'Uploading...' : 'Upload Image'}
        </button>
        {/* <input type="text" onChange={(e) => setImageKey(e.target.value)} value={imageKey}></input>
      <button onClick={handleGetImage}>Get image url</button> */}
        <div>
          {/* {imageUrl} */}
          {imageUrl ? <img src={imageUrl}></img> : null}
        </div>
      </div>
    </div>
  );
};

export default UploadImage;

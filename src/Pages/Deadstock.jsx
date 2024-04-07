import React from 'react';
import Check from './Check';
import BackgroundImage from '../assets/Background.jpg'; // Import the background image

const backgroundStyle = {
  backgroundImage: `url(${BackgroundImage})`, // Apply the background image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
};

export default function Deadstock() {
  return (
    <div style={backgroundStyle}> {/* Apply background style here */}
      <Check />
    </div>
  );
}

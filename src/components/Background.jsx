// src/components/BackgroundVideo.jsx
export default function BackgroundVideo() {
    return (
      <div className="background-video-wrapper">
        <video autoPlay muted loop playsInline className="background-video">
          <source src="/videos/your_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
  
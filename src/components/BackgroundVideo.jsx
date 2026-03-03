export default function BackgroundVideo({ bgVideo, mobileBackground, onLoadedData }) {
  return (
    <>
      {/* Mobile Background Image - Hidden on desktop */}
      {mobileBackground && (
        <div
          className="md:hidden fixed inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${mobileBackground})` }}
        />
      )}

      {/* Desktop Background Video - Hidden on mobile */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={mobileBackground}
        onLoadedData={onLoadedData}
        className="hidden md:block fixed inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>


    </>
  );
}

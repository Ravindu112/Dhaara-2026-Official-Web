export default function BackgroundVideo({ bgVideo, onLoadedData }) {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={onLoadedData}
        className="fixed inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      
    </>
  );
}

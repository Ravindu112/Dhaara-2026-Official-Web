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
      
      {/* Fixed Dark Overlay */}
      <div className="fixed inset-0 backdrop-blur-md bg-slate-900/10" />
    </>
  );
}

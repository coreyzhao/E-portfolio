const GlassTabs = ({ className }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-0 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      
      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">Sunset</h6>

        <div className="flex items-center justify-between">
          <div className="body-2 text-n-13">(GMT-5) - 5:03pm</div>
        </div>
      </div>
    </div>
  );
};

export default GlassTabs;

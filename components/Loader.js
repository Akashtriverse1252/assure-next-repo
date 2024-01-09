import LogoDNA from "./svg-components/LogoDNA";

const Loader = (isLoading) => {
  console.log("is loading is comming", isLoading);
  return (
    <>
      <div className={`main_loader ${isLoading? "loaded": ""}`}>
        <div className="main_loader_sec"></div>
        <div className="main_loader_sec">
          <LogoDNA />
        </div>
        <div className="main_loader_sec"></div>
      </div>
    </>
  );
};

export default Loader;

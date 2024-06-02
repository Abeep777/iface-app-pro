const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputimage"
          src={imageUrl}
          alt="images"
          width="500px"
          height="auto"
        />
        {box.map((item, index) => (
          <div
            key={index}
            className={"bounding-box-" + index}
            style={{
              top: item.topRow,
              right: item.rightCol,
              bottom: item.bottomRow,
              left: item.leftCol,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FaceRecognition;

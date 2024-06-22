import Gif from "../../assets/loading1.gif";

const Loading = ({ height = 200 }) => {
  return (
    <div className=" flex flex-col justify-center text-center col-span-4 items-center">
      <img style={{ height: `${height}px` }} src={Gif} />
    </div>
  );
};

export default Loading;

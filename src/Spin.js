import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";

const Spin = () => {
  const spinner = useSelector((state) => state.appReducer.loading);
  return (
    <div className="loader-styles">
      <Loader
        type="TailSpin"
        height={100}
        width={100}
        color="grey"
        visible={spinner}
      />
    </div>
  );
};

export default Spin;

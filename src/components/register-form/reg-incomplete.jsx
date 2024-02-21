import Lottie from "lottie-react";
import cross from "../../assets/denied.json";


const ReginComplete = () => {
  return (
    <div className="verify-title">
      <h1>
        Registeration Could'nt be completed at this moment.
        <Lottie
          animationData={cross}
          style={{
            height: "100px",
            width: "100px",
          }}
          loop={1}
        />
      </h1>
      <h3>If the problem persits.<a href="/#contact"> Click here </a> to contact event coordinator. </h3>
    </div>
  );
};

export default ReginComplete;
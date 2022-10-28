import PulseLoader from "react-spinners/PulseLoader";

import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={classes.spinner}>
      <PulseLoader
      //   color="green"
      //   loading={true}
      //   cssOverride={override}
      //   size={150}
      //   aria-label="Loading Spinner"
      //   data-testid="loader"
      />
    </div>
  );
};

export default LoadingSpinner;

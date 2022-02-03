import React from 'react';
import Loader from "react-loader-spinner";
import s from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={s.loaderBox}>
      <Loader
        type="Oval"  //Audio Bars BallTriangle Circles Grid Oval Puff Rings TailSpin ThreeDots Hearts
        color="#FAD34F"
        height={160}
        width={160}
        timeout={5000} // ms
      />
    </div>
  );
};

export default Spinner;
import React, { useEffect, useState } from "react";
import useWindowResize from "./useWindowResize";
import useForm from "./useForm";

export default function DemoHook() {
  //   const [size, setSize] = useState({ width: 0, height: 0 });
  //   useEffect(() => {
  //     window.addEventListener("resize", handleResize);
  //   }, []);
  //   const handleResize = () => {
  //     const { innerWidth, innerHeight } = window;
  //     console.log(innerWidth, innerHeight);
  //     setSize({
  //       width: innerWidth,
  //       height: innerHeight,
  //     });
  //   };

  const [width, height] = useWindowResize();

  const { values, errors, handleChange, handleBlur } = useForm({
    username: "",
  });

  return (
    // <div>
    //   {width > 500 ? (
    //     <p>Width lon hon 500</p>
    //   ) : (
    //     <p>Wudth nho hon hoac bang 500</p>
    //   )}
    // </div>
    <>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          name="username"
          className="form-control"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.username ? (
          <div className="alert alert-danger">{errors.username}</div>
        ) : null}
      </div>
    </>
  );
}

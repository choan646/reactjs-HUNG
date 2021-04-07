import React from "react";
import { useSelector, useDispatch } from "react-redux";

//Lay state tu store thi su dung useSelector
//Day action vao store thi su dung useDispatch

export default function DemoRedux() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const color = useSelector((state) => state.color);

  const tangBienDem = () => {
    //De thay doi state trong store ta can goi toi 1 action
    const action = { type: "TANG_BIEN_DEM" };
    dispatch(action);
  };
  const giamBienDem = () => {
    const action = { type: "GIAM_BIEN_DEM" };
    dispatch(action);
  };
  const changeColor = (evt) => {
    const action = {
      type: "CHANGE_COLOR",
      payload: evt.target.value,
    };
    dispatch(action);
  };
  return (
    <div>
      <h3>Demo Redux</h3>
      <p>Count : {count}</p>
      <button onClick={tangBienDem}>Tang Bien Dem</button>
      <button onClick={giamBienDem}>Giam Bien Dem</button>

      <h3>Demo Color</h3>
      <p>Color : {color}</p>
      <select value={color} onChange={changeColor}>
        <option value="black">BLACK</option>
        <option value="red">RED</option>
        <option value="blue">BLUE</option>
        <option value="green">GREEN</option>
      </select>
    </div>
  );
}

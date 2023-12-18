import { TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setNumber } from "../context/Number";

export default function Number() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.number.number);

  return (
    <div>
      <Typography>Today's Number</Typography>
      <TextField
        variant="outlined"
        type="number"
        value={number}
        onChange={(e) => dispatch(setNumber(e.target.value))}
      />
    </div>
  );
}

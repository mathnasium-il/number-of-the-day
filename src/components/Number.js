import { Box, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setNumber } from "../context/Number";
import { makeStyles } from "tss-react/mui";
import { useEffect } from "react";

const useStyles = makeStyles()(() => {
  return {
    textField: {
      width: 200,
    },
    resize: {
      fontSize: 48,
    },
  };
});

export default function Number() {
  const number = useSelector((state) => state.number.number);
  const { classes } = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    const notd = localStorage.getItem("NOTD");
    if (notd) dispatch(setNumber(JSON.parse(notd)));
  }, [dispatch]);

  return (
    <div>
      <Box className="flex-row" sx={{ alignItems: "center", gap: 2 }}>
        <Typography variant="h4">Today's Number of the Day is</Typography>
        <TextField
          variant="outlined"
          type="number"
          value={number}
          onChange={(e) => {
            const value =
              e.target.value > 1000000
                ? 1000000
                : e.target.value < 1
                ? 1
                : Math.round(e.target.value);
            dispatch(setNumber(value));
            localStorage.setItem("NOTD", JSON.stringify(value));
          }}
          InputProps={{
            classes: {
              input: classes.resize,
            },
          }}
          className={classes.textField}
        />
      </Box>
    </div>
  );
}

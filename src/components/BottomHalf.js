import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getFactors, getPrimeFactorization } from "../utils/Helpers";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    answer: {
      fontFamily: "avenir_nextregular",
    },
  };
});

export default function BottomHalf() {
  const { classes } = useStyles();
  const number = useSelector((state) => state.number.number);
  return (
    <Box className="flex-col" gap={2}>
      {/* Squared & Square Root Between */}
      <Box className="flex-row-space">
        {/* Squared */}
        <Box className="flex-row-start">
          <Typography variant="h5">Squared:</Typography>
          <Typography variant="h5" className={classes.answer}>
            {Math.pow(number, 2)}
          </Typography>
        </Box>

        {/* Squared Root Between */}
        <Typography variant="h5" className={classes.answer}>
          √{number} is{" "}
          {Math.floor(Math.sqrt(number)) === Math.ceil(Math.sqrt(number))
            ? Math.sqrt(number)
            : `between ${Math.floor(Math.sqrt(number))} and ${Math.ceil(
                Math.sqrt(number)
              )}`}
          .
        </Typography>
      </Box>

      {/* Factors */}
      <Box className="flex-row-start">
        <Typography variant="h5">Factors:</Typography>
        <Typography variant="h5" className={classes.answer}>
          {getFactors(number)}
        </Typography>
      </Box>

      {/* Multiples */}
      <Box className="flex-row-start">
        <Typography variant="h5">Multiples:</Typography>
        <Typography variant="h5" className={classes.answer}>
          {number}, {number * 2}, {number * 3}, {number * 4}, {number * 5}
        </Typography>
      </Box>

      {/* Prime Factorization */}
      <Box className="flex-row-start" alignItems="baseline">
        <Typography variant="h5">Prime Factorization:</Typography>
        {getPrimeFactorization(number).map((el, i) => (
          <Typography
            variant="h5"
            className={classes.answer}
            key={i}
            display="inline-block"
          >
            {el[0]}
            {el[1] > 1 && <sup>{el[1]}</sup>}
            {i !== getPrimeFactorization(number).length - 1 && "×"}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

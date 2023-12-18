import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getFactors, getPrimeFactorization } from "../utils/Helpers";

export default function BottomHalf() {
  const number = useSelector((state) => state.number.number);
  return (
    <Box>
      {/* Squared & Square Root Between */}
      <Box className="flex-row-space">
        <Typography>Squared {Math.pow(number, 2)}</Typography>
        <Typography>
          √{number} is{" "}
          {Math.floor(Math.sqrt(number)) === Math.ceil(Math.sqrt(number))
            ? number
            : `between ${Math.floor(Math.sqrt(number))} and ${Math.ceil(
                Math.sqrt(number)
              )}`}
        </Typography>
      </Box>

      {/* Factors */}
      <Typography>Factors: {getFactors(number)}</Typography>

      {/* Multiples */}
      <Typography>
        Multiples: {number}, {number * 2}, {number * 3}, {number * 4},{" "}
        {number * 5}
      </Typography>

      {/* Prime Factorization */}
      <Typography component="div">
        Prime Factorization:{" "}
        {getPrimeFactorization(number).map((el, i) => (
          <Typography key={i} display="inline-block">
            {el[0]}
            {el[1] > 1 && <sup>{el[1]}</sup>}
            {i !== getPrimeFactorization(number).length - 1 && "×"}
          </Typography>
        ))}
      </Typography>
    </Box>
  );
}

import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getExpandedForm, getWordForm } from "../utils/Helpers";

export default function TopHalf() {
  const number = useSelector((state) => state.number.number);
  return (
    <Box>
      <Typography>Word Form: {getWordForm(number).toLowerCase()}</Typography>
      <Typography>Expanded Form: {getExpandedForm(number)}</Typography>
      <Box className="flex-row-space">
        <Typography>Double: {number * 2}</Typography>
        <Typography>
          Half: {number % 2 === 0 ? number / 2 : `${Math.floor(number / 2)} ½`}
        </Typography>
        <Typography>
          Quarter:{" "}
          {number % 4 === 1
            ? `${Math.floor(number / 4)} ¼`
            : number % 4 === 2
            ? `${Math.floor(number / 4)} ½`
            : number % 4 === 3
            ? `${Math.floor(number / 4)} ¾`
            : number / 4}
        </Typography>
      </Box>
      <Box className="flex-row-space">
        <Box>
          <Typography component="div" display="inline-flex">
            {number} is{" "}
            <Typography bgcolor={number < 10 ? "secondary.main" : ""}>
              {"<"}
            </Typography>{" "}
            /{" "}
            <Typography bgcolor={number > 10 ? "secondary.main" : ""}>
              {">"}
            </Typography>
            10 by {Math.abs(number - 10)}.
          </Typography>
        </Box>

        <Box>
          <Typography component="div" display="inline-flex">
            {number} is{" "}
            <Typography bgcolor={number < 100 ? "secondary.main" : ""}>
              {"<"}
            </Typography>{" "}
            /{" "}
            <Typography bgcolor={number > 100 ? "secondary.main" : ""}>
              {">"}
            </Typography>
            100 by {Math.abs(number - 100)}.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

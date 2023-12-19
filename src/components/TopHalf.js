import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getExpandedForm, getWordForm } from "../utils/Helpers";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    answer: {
      fontFamily: "avenir_nextregular",
    },
  };
});

export default function TopHalf() {
  const { classes } = useStyles();
  const number = useSelector((state) => state.number.number);
  return (
    <Box className="flex-col" gap={2}>
      {/* Word Form */}
      <Box className="flex-row-start">
        <Typography variant="h5">Word Form:</Typography>
        <Typography variant="h5" className={classes.answer}>
          {getWordForm(number).toLowerCase()}
        </Typography>
      </Box>

      {/* Expanded Form */}
      <Box className="flex-row-start">
        <Typography variant="h5">Expanded Form:</Typography>
        <Typography variant="h5" className={classes.answer}>
          {getExpandedForm(number)}
        </Typography>
      </Box>

      {/* Double, Half, and Quarter */}
      <Box className="flex-row-space">
        {/* Double */}
        <Box className="flex-row-start">
          <Typography variant="h5">Double:</Typography>
          <Typography variant="h5" className={classes.answer}>
            {number * 2}
          </Typography>
        </Box>

        {/* Half */}
        <Box className="flex-row-start">
          <Typography variant="h5">Half:</Typography>
          <Typography variant="h5" className={classes.answer}>
            {number % 2 === 0
              ? number / 2
              : `${
                  Math.floor(number / 2) > 0 ? Math.floor(number / 2) + " " : ""
                }½`}
          </Typography>
        </Box>

        {/* Quarter */}
        <Box className="flex-row-start">
          <Typography variant="h5">Quarter:</Typography>
          <Typography variant="h5" className={classes.answer}>
            {number % 4 === 1
              ? `${Math.floor(number / 4) > 0 ? Math.floor(number / 4) + " " : ""}¼`
              : number % 4 === 2
              ? `${Math.floor(number / 4) > 0 ? Math.floor(number / 4) + " " : ""}½`
              : number % 4 === 3
              ? `${Math.floor(number / 4) > 0 ? Math.floor(number / 4) + " " : ""}¾`
              : number / 4}
          </Typography>
        </Box>
      </Box>

      {/* Comparing to 10 and 100 */}
      <Box className="flex-row-space">
        {/* < / > 10 */}
        <Box className="flex-row-start" alignItems="center">
          <Typography variant="h5" className={classes.answer}>
            {number} is
          </Typography>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: 20,
              border: number < 10 && "2px dashed #ef3e33",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" className={classes.answer} sx={{ p: 2 }}>
              {"<"}
            </Typography>
          </Box>
          <Typography variant="h5" className={classes.answer}>
            {" "}
            /{" "}
          </Typography>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: 20,
              border: number > 10 && "2px dashed #ef3e33",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" className={classes.answer} sx={{ p: 2 }}>
              {">"}
            </Typography>
          </Box>
          <Typography variant="h5" className={classes.answer}>
            10 by {Math.abs(number - 10)}.
          </Typography>
        </Box>

        {/* < / > 100 */}
        <Box className="flex-row-start" alignItems="center">
          <Typography variant="h5" className={classes.answer}>
            {number} is
          </Typography>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: 20,
              border: number < 100 && "2px dashed #ef3e33",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" className={classes.answer} sx={{ p: 2 }}>
              {"<"}
            </Typography>
          </Box>
          <Typography variant="h5" className={classes.answer}>
            {" "}
            /{" "}
          </Typography>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: 20,
              border: number > 100 && "2px dashed #ef3e33",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" className={classes.answer} sx={{ p: 2 }}>
              {">"}
            </Typography>
          </Box>
          <Typography variant="h5" className={classes.answer}>
            100 by {Math.abs(number - 100)}.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

import { Box, Typography } from "@mui/material";
import { format } from "date-fns";
import { useEffect, useState } from "react";

export default function Time() {
  const [time, setTime] = useState(new Date());

  // Time
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h3" sx={{ userSelect: "none" }}>
        {format(time, "h:mm a")}
      </Typography>
    </Box>
  );
}

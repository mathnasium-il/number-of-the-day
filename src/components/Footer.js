import { GitHub } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

export default function Footer() {
  return (
    <Box>
      <Box sx={{ bgcolor: "secondary.main", width: "100%", height: 5 }} />
      <Box sx={{ bgcolor: "black", width: "100%", height: 20 }} />
      <Box
        sx={{
          bgcolor: "primary.main",
          height: 100,
          textAlign: "center",
          width: "100%",
        }}
      >
        <IconButton
          href="https://github.com/mathnasium-il/number-of-the-day"
          variant="outlined"
          color="quaternary"
        >
          <GitHub />
        </IconButton>
      </Box>
    </Box>
  );
}

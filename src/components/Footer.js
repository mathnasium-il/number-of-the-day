import { GitHub } from "@mui/icons-material";
import { Box } from "@mui/material";
import { CustomButton } from "./CustomComponents";

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
        <CustomButton
          variant="outlined"
          color="quaternary"
          startIcon={<GitHub />}
        >
          View on GitHub
        </CustomButton>
      </Box>
    </Box>
  );
}

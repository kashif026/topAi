import { Box, Typography, Button, Stack } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import StarIcon from "@mui/icons-material/Star";
import FolderIcon from "@mui/icons-material/Folder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const FreeAccount = () => {
  return (
    <Box
      sx={{
        mt: { xs: 4, md: 6 },
        px: { xs: 2.5, sm: 3, md: 5 },
        py: { xs: 3, sm: 4, md: 5 },
        borderRadius: { xs: "16px", md: "20px" },
        backgroundColor: "#F9FAFB",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", md: "center" },
        gap: { xs: 3, md: 4 },
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* LEFT SIDE */}
      <Box sx={{ width: "100%", flex: 1 }}>
        {/* Title */}
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 1.5 }}
          sx={{ alignItems: "center", flexWrap: "wrap" }}
        >
          <RocketLaunchIcon
            sx={{
              fontSize: {
                xs: 26,
                sm: 30,
                md: 32,
              },
            }}
          />

          <Typography
            sx={{
              fontSize: {
                xs: "20px",
                sm: "24px",
                md: "28px",
              },
              fontWeight: 700,
              color: "#16A34A",
              lineHeight: 1.3,
            }}
          >
            Get your FREE account now
          </Typography>
        </Stack>

        {/* Features */}
        <Stack
          spacing={{ xs: 1.5, sm: 2 }}
          sx={{
            mt: { xs: 2.5, md: 3 },
          }}
        >
          <Stack direction="row"  spacing={1.5} sx={{alignItems : "center"}}>
            <StarIcon
              sx={{
                color: "#F59E0B",
                fontSize: { xs: 20, sm: 22 },
              }}
            />

            <Typography
              sx={{
                fontSize: {
                  xs: "14px",
                  sm: "15px",
                  md: "16px",
                },
                color: "#111827",
                lineHeight: 1.5,
              }}
            >
              Personalized recommendations
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1.5} sx={{alignItems : "center"}}>
            <FolderIcon
              sx={{
                color: "#2563EB",
                fontSize: { xs: 20, sm: 22 },
              }}
            />

            <Typography
              sx={{
                fontSize: {
                  xs: "14px",
                  sm: "15px",
                  md: "16px",
                },
                color: "#111827",
                lineHeight: 1.5,
              }}
            >
              Custom collections
            </Typography>
          </Stack>

          <Stack direction="row"  spacing={1.5} sx={{alignItems : "center"}}>
            <BookmarkIcon
              sx={{
                color: "#16A34A",
                fontSize: { xs: 20, sm: 22 },
              }}
            />

            <Typography
              sx={{
                fontSize: {
                  xs: "14px",
                  sm: "15px",
                  md: "16px",
                },
                color: "#111827",
                lineHeight: 1.5,
              }}
            >
              Save favorites
            </Typography>
          </Stack>
        </Stack>
      </Box>

      {/* RIGHT SIDE */}
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "auto",
          },
          display: "flex",
          flexDirection: "column",
          alignItems: {
            xs: "stretch",
            md: "flex-end",
          },
          gap: 2,
        }}
      >
        {/* Button */}
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{
            backgroundColor: "#16A34A",
            px: { xs: 3, sm: 4 },
            py: 1.5,
            borderRadius: "8px",
            textTransform: "none",
            fontWeight: 600,
            fontSize: {
              xs: "13px",
              sm: "14px",
            },
            width: {
              xs: "100%",
              sm: "fit-content",
            },
            minWidth: {
              sm: "220px",
            },
            whiteSpace: "nowrap",

            "&:hover": {
              backgroundColor: "#15803D",
            },
          }}
        >
          CREATE MY ACCOUNT
        </Button>

        {/* Sign in */}
        <Typography
          sx={{
            fontSize: {
              xs: "13px",
              sm: "14px",
            },
            color: "#6B7280",
            textAlign: {
              xs: "center",
              md: "right",
            },
          }}
        >
          Already a member?{" "}
          <Box
            component="span"
            sx={{
              color: "#2563EB",
              cursor: "pointer",
              fontWeight: 500,
            }}
          >
            Sign in
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default FreeAccount;

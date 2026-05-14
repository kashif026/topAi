import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  useMediaQuery,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";

import { styled, useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const Search = styled("div")(() => ({
  position: "relative",
  borderRadius: 14,
  backgroundColor: "#f4f4f5",
  width: "100%",
  maxWidth: 420,
  border: "1px solid #e4e4e7",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  color: "#71717a",
}));

const navItems = [
  {
    label: "Tools",
    items: ["AI Tools", "Trending Tools", "Newest Tools"],
  },
  {
    label: "Categories",
    items: ["Writing", "Coding", "Design", "Marketing"],
  },
  {
    label: "Top 100",
    items: ["Top Free", "Top Paid", "Most Popular"],
  },
  {
    label: "Submit Tool",
    items: ["Submit AI Tool", "Guidelines"],
  },
  {
    label: "Community",
    items: ["Discord", "Blog", "Updates"],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // dropdown state
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpenMenu = (
    event: React.MouseEvent<HTMLButtonElement>,
    label: string
  ) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(label);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 280, pt: 2 }}>
      <Box sx={{ px: 3, pb: 2, display: "flex", gap: 1 }}>
        <AutoAwesomeIcon sx={{ color: "#6d28d9" }} />
        <Typography sx={{fontWeight : 800}}>TopAI</Typography>
      </Box>

      <Divider />

      <List>
        {navItems.map((item) => (
          <ListItemButton key={item.label}>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #e4e4e7",
          color: "#18181b",
        }}
      >
        <Toolbar sx={{ minHeight: 74, justifyContent: "space-between" }}>
          {/* LEFT */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <AutoAwesomeIcon sx={{ color: "#7c3aed", fontSize: 30 }} />
              <Typography  sx={{fontWeight:900,fontSize:'1.35rem'}}>
                TopAI
              </Typography>
            </Box>

            {!isMobile && (
  <Search>
    <SearchIconWrapper>
      <SearchIcon sx={{ fontSize: 20 }} />
    </SearchIconWrapper>

    <InputBase
      placeholder="Search AI tools, categories, workflows..."
      sx={{
        width: "100%",
        pl: 5,
        pr: 2,
        py: 1.2,
        fontSize: 14,
        color: "#18181b",

        "& input::placeholder": {
          color: "#a1a1aa",
          opacity: 1,
        },
      }}
    />
  </Search>
)}
          </Box>

          {/* DESKTOP NAV */}
          {!isMobile ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {navItems.map((item) => (
                <Box key={item.label}>
                  <Button
                    onClick={(e) => handleOpenMenu(e, item.label)}
                    endIcon={<KeyboardArrowDownIcon />}
                    sx={{
                      textTransform: "none",
                      fontWeight: 600,
                      color: "#18181b",
                      borderRadius: 3,
                      px: 1.8,
                      "&:hover": { backgroundColor: "#f4f4f5" },
                    }}
                  >
                    {item.label}
                  </Button>

                  {/* DROPDOWN MENU */}
                  <Menu
                    anchorEl={anchorEl}
                    open={activeMenu === item.label}
                    onClose={handleCloseMenu}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    {item.items.map((sub) => (
                      <MenuItem
                        key={sub}
                        onClick={handleCloseMenu}
                        sx={{ fontSize: 14 }}
                      >
                        {sub}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ))}

              <Button
                variant="contained"
                sx={{
                  ml: 1,
                  textTransform: "none",
                  borderRadius: 3,
                  background: "linear-gradient(135deg, #7c3aed, #9333ea)",
                }}
              >
                Sign In
              </Button>

              <Avatar sx={{ ml: 1, bgcolor: "#18181b" }}>AI</Avatar>
            </Box>
          ) : (
            <IconButton onClick={handleDrawerToggle}>
              <AutoAwesomeIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
}
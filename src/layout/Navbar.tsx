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
  Stack,
} from "@mui/material";

import { styled, useTheme } from "@mui/material/styles";

import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import InputBase from "@mui/material/InputBase";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { COLORS } from "../constants/color";

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
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box
      sx={{
        width: {
          xs: 260,
          sm: 300,
        },
        pt: 2,
      }}
    >
      {/* LOGO */}
      <Stack
        direction="row"
        
        spacing={1}
        sx={{
          px: 3,
          pb: 2,
          alignItems: "center",
        }}
      >
        <AutoAwesomeIcon sx={{ color: "#6d28d9" }} />

        <Typography
          sx={{
            fontWeight: 800,
            fontSize: {
              xs: "1.1rem",
              sm: "1.2rem",
            },
          }}
        >
          TopAI
        </Typography>
      </Stack>

      <Divider />

      {/* MOBILE SEARCH */}
      <Box
        sx={{
          px: 2,
          py: 2,
        }}
      >
        <Search>
          <SearchIconWrapper>
            <SearchIcon sx={{ fontSize: 20 }} />
          </SearchIconWrapper>

          <InputBase
            placeholder="Search AI tools..."
            sx={{
              width: "100%",
              pl: 5,
              pr: 2,
              py: 1.1,
              fontSize: {
                xs: 13,
                sm: 14,
              },

              "& input::placeholder": {
                color: "#a1a1aa",
                opacity: 1,
              },
            }}
          />
        </Search>
      </Box>

      <Divider />

      {/* NAV ITEMS */}
      <List>
        {navItems.map((item) => (
          <ListItemButton key={item.label}>
            <ListItemText
              primary={item.label}
              // primaryTypographyProps={{
              //   fontSize: {
              //     xs: "14px",
              //     sm: "15px",
              //   },
              //   fontWeight: 500,
              // }}
            />
          </ListItemButton>
        ))}
      </List>

      <Divider />

      {/* MOBILE CTA */}
      <Box
        sx={{
          p: 2,
        }}
      >
        <Button
          fullWidth
          variant="contained"
          sx={{
            textTransform: "none",
            borderRadius: 3,
            py: 1.2,
            background:
              "linear-gradient(135deg, #7c3aed, #9333ea)",
          }}
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          // backgroundColor: "rgba(255,255,255,0.88)",
          bgcolor: 'background.default',
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #e4e4e7",
          color: "#18181b",
        }}
      >
        <Toolbar
          sx={{
            minHeight: {
              xs: 64,
              md: 74,
            },
            justifyContent: "space-between",
            px: {
              xs: 2,
              sm: 3,
              md: 4,
            },
          }}
        >
          {/* LEFT */}
          <Stack
            direction="row"
           
            spacing={{
              xs: 1.5,
              md: 4,
            }}
            sx={{
              minWidth: 0,
              flex: 1,
              alignItems: "center",
            }}
          >
            {/* LOGO */}
            <Stack
              direction="row"
              
              spacing={1}
              sx={{
                flexShrink: 0,
                 alignItems: "center",
              }}
            >
              <AutoAwesomeIcon
                sx={{
                  color: COLORS.green.main,
                  fontSize: {
                    xs: 26,
                    md: 30,
                  },
                }}
              />

              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: {
                    xs: "1.1rem",
                    sm: "1.2rem",
                    md: "1.35rem",
                  },
                  lineHeight: 1,
                }}
              >
                TopAI
              </Typography>
            </Stack>

            {/* DESKTOP SEARCH */}
            {!isMobile && (
              <Box
                sx={{
                  flex: 1,
                  maxWidth: 420,
                }}
              >
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
                      fontSize: {
                        sm: 13,
                        md: 14,
                      },
                      color: "#18181b",

                      "& input::placeholder": {
                        color: "#a1a1aa",
                        opacity: 1,
                      },
                    }}
                  />
                </Search>
              </Box>
            )}
          </Stack>

          {/* DESKTOP NAV */}
          {!isMobile ? (
            <Stack
              direction="row"
             sx={{ alignItems: "center",}}
              spacing={{
                sm: 0.5,
                md: 1,
              }}
            >
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
                      px: {
                        sm: 1.2,
                        md: 1.8,
                      },
                      fontSize: {
                        sm: "13px",
                        md: "14px",
                      },

                      "&:hover": {
                        backgroundColor: "#f4f4f5",
                      },
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
                        sx={{
                          fontSize: {
                            sm: 13,
                            md: 14,
                          },
                        }}
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
                  px: {
                    sm: 2,
                    md: 2.5,
                  },
                  background:
                    COLORS.green.main,
                }}
              >
                Sign In
              </Button>

              <Avatar
                sx={{
                  ml: 1,
                  bgcolor: COLORS.green.main,
                  width: {
                    sm: 34,
                    md: 40,
                  },
                  height: {
                    sm: 34,
                    md: 40,
                  },
                  fontSize: {
                    sm: "0.8rem",
                    md: "0.9rem",
                  },
                }}
              >
                AI
              </Avatar>
            </Stack>
          ) : (
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                ml: 1,
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        {drawer}
      </Drawer>
    </>
  );
}
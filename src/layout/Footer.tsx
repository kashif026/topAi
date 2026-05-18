import { Link as RouterLink } from "react-router-dom";
import { ArrowRight, Language, Email, Twitter } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Link as MuiLink,
} from "@mui/material";
import { COLORS } from "../constants/color";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        backgroundColor: COLORS.blue.light,
        pt: 8,
        pb: 4,
        px: 4,
        mt: "auto",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6} sx={{ mb: 8 }}>

          {/* Brand & Newsletter */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>

              <MuiLink
                component={RouterLink}
                to="/"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  width: "fit-content",
                  textDecoration: "none",
                }}
              >
                <Box
                  sx={{
                    background: `linear-gradient(to top right, ${COLORS.green.main}, #126f14)`,
                    width: 34,
                    height: 34,
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    color: "#fff",
                    fontSize: 18,
                    boxShadow: 2,
                  }}
                >
                  T
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    letterSpacing: "-0.5px",
                    color: "text.primary",
                  }}
                >
                  TopAI.
                  <Box component="span" sx={{ color: COLORS.green.main }}>
                    Tools
                  </Box>
                </Typography>
              </MuiLink>

              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.8,
                  maxWidth: 380,
                }}
              >
                The internet's largest and most frequently updated AI directory.
                Discover, review, and leverage the best artificial intelligence
                software for your workflows.
              </Typography>

              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, mb: 1.5 }}
                >
                  Join our weekly AI newsletter
                </Typography>

                <Box
                  component="form"
                  sx={{
                    display: "flex",
                    maxWidth: 380,
                  }}
                >
                  <TextField
                    type="email"
                    placeholder="Enter your email"
                    size="small"
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "10px 0 0 10px",
                        backgroundColor: "rgba(255,255,255,0.05)",
                      },
                    }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    
                    sx={{
                      minWidth: 56,
                      borderRadius: "0 10px 10px 0",
                      boxShadow: "none",
                      bgcolor:COLORS.green.main,
                    }}
                  >
                    <ArrowRight sx={{ fontSize: 18 }} />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Reusable Column */}
          {[
            {
              title: "Directory",
              links: [
                { label: "All Categories", to: "/categories" },
                { label: "Submit a Tool", to: "/submit" },
                { label: "Recently Added", to: "/new" },
                { label: "Exclusive Deals", to: "/deals" },
              ],
            },
            {
              title: "Resources",
              links: [
                { label: "AI Blog", to: "/blog" },
                { label: "AI Glossary", to: "/glossary" },
                { label: "How-to Guides", to: "/guides" },
                { label: "Data API", to: "/api" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About Us", to: "/about" },
                { label: "Contact", to: "/contact" },
                { label: "Privacy Policy", to: "/privacy" },
                { label: "Terms of Service", to: "/terms" },
              ],
            },
          ].map((section, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3, lg: 2 }} key={index} >
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {section.title}
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                  {section.links.map((link, i) => (
                    <MuiLink
                      key={i}
                      component={RouterLink}
                      to={link.to}
                      sx={{
                        color: "text.secondary",
                        fontSize: 14,
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          color: "primary.main",
                          transform: "translateX(4px)",
                        },
                      }}
                    >
                      {link.label}
                    </MuiLink>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            pt: 4,
            borderTop: "1px solid",
            borderColor: "divider",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" sx={{ color: "text.disabled" }}>
            &copy; {new Date().getFullYear()} TopAI Tools.
          </Typography>

          <Box sx={{ display: "flex", gap: 1 }}>
            {[Twitter, Language, Email].map((Icon, i) => (
              <IconButton
                key={i}
                sx={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                <Icon sx={{ fontSize: 16 }} />
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
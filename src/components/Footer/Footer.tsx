import React from "react";
import { Box, Grid, Typography, Button, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";

export default function Footer() {
  const listOrganisation = [
    "About Us",
    "Partners",
    "Faire un don anonyme",
    "let’shelp@gmail.com",
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        padding: "24px",
      }}
    >
      <Grid container spacing={2} sx={{ height: "100%" }}>
        <Grid item xs={4} sx={{ height: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              width: "100%",
              gap: "24px",
            }}
          >
            <Box sx={{}}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "32px",
                  letterSpacing: "-0.42px",
                }}
              >
                Get involved
              </Typography>
              <Typography
                sx={{
                  color: "var(--body, #666)",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "28px",
                }}
              >
                Let's Help Association, devoted to compassion and social impact,
                is committed to providing meaningful assistance to communities.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                width: "100%",
                gap: "16px",
              }}
            >
              <PrimaryButton label="Faire un don"></PrimaryButton>
              <SecondaryButton label="Nous joindre"></SecondaryButton>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={4} sx={{ height: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "32px",
                  letterSpacing: "-0.42px",
                }}
              >
                Get in touch
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <IconButton>
                  <FacebookIcon />
                </IconButton>
                <IconButton>
                  <TwitterIcon />
                </IconButton>
                <IconButton>
                  <InstagramIcon />
                </IconButton>
                <IconButton>
                  <LinkedInIcon />
                </IconButton>
              </Box>
              <Typography
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "16px",
                }}
              >
                Let’s Help Association
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={4} sx={{ height: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Box>
              <Typography variant="h6" gutterBottom>
                Organisation
              </Typography>
              {listOrganisation.map((title, index) => (
                <Typography
                  key={index}
                  sx={{
                    color: "var(--body, #666)",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "28px",
                  }}
                >
                  {title}
                </Typography>
              ))}

            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

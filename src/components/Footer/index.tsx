import { CatchingPokemon } from "@mui/icons-material";
import { Box, Typography, Container, Link, Stack } from "@mui/material";
import FooterLinks from "./links";

export default function Footer() {
  return (
    <Box borderTop={"1px solid #252525"}>
      <Container maxWidth="lg" sx={{ my: "4rem" }}>
        <Stack
          direction={"row"}
          spacing={10}
          display={"flex"}
          flexDirection={"row"}
        >
          <Box color={"white"}>
            <CatchingPokemon />
            <Typography color={"#7d7d7d"}>
              {" "}
              Deskree is a cloud platform that simplifies and optimizes backend
              development and infrastructure management for businesses and
              developers.{" "}
            </Typography>
          </Box>
          <FooterLinks header="Products" items={["BaaS", "ION", "Atomic"]}/>
          <FooterLinks header="Solutions" items={["Enterprise", "Accelerate"]}/>
          <FooterLinks header="Resources" items={["About", "Blog", "Brand Guidlines", "Privacy", "Terms", "Whistleblower", "Trust Center"]}/>
          <FooterLinks header="Contact" items={["Support", "Investors", "Partnerships", "Twitter", "LinkedIn", "Discord", "GitHub", "YouTube"]}/>
        </Stack>
        <Typography color={"#8a8a8e"}>© Copyright 2024, Deskree Technologies</Typography>
      </Container>
    </Box>
  );
}

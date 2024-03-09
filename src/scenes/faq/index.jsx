import {
  Box,
  useTheme,
  AccordionSummary,
  Accordion,
  AccordionDetails,
  Typography,
} from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { ExpandMore } from "@mui/icons-material";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subTitle="Frequently Asked Questions page" />
      <Accordion defaultExpanded >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography colors={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion defaultExpanded >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography colors={colors.greenAccent[500]} variant="h5">
            New Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion defaultExpanded >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography colors={colors.greenAccent[500]} variant="h5">
            Very Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion defaultExpanded >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography colors={colors.greenAccent[500]} variant="h5">
            The Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography colors={colors.greenAccent[500]} variant="h5">
            very very Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography colors={colors.greenAccent[500]} variant="h5">
            Most Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </Box>
  );
};

export default FAQ;

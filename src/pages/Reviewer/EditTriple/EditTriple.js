import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Grid } from "@mui/material";

import {
  PageHeader,
  Button,
  Modal,
  PopoverGrid,
  ConfirmationModal,
  TrippleCollapsed,
} from "components";

import EvidenceModalContent from "./components/EvidenceModalContent";

import TripleForm from "./components/TripleForm";

import {
  Section,
  Box,
  BodyText,
  BodyTextLight,
  ActionBox,
  HighlightText,
  TripleCollapseContainer,
} from "assets/styles/main.styles";

// Dummy popover data

function createData(curie, subcurie, prefferedLabel) {
  return { curie, subcurie, prefferedLabel };
}

const rows = [
  createData("SWISSPROT-GRN_HUMAN", "GSK3 beta", "SWISSPROT-GRN_HUMAN"),
  createData("HGNC:4601", "GSK3 beta", "HGNC:4601"),
  createData("SWISSPROT-GRN_HUMAN 2", "GSK3 beta", "SWISSPROT-GRN_HUMAN 2"),
];

// Dummy popover data end

// Dummy Triple Data
const dummyTripleData = [1];

const EditTriple = () => {
  const navigate = useNavigate();
  // Modal
  const [openModal, setOpenModal] = useState(false);

  const [openModalConfirm, setOpenModalConfirm] = useState(false);

  const handleClickOpenConfirm = () => {
    setOpenModalConfirm(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleCloseConfirm = () => {
    setOpenModalConfirm(false);
  };

  //Alert

  // PopoverGrid
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <PageHeader subText="Modify Triple" pageTitleText="234567" />
      <Section>
        <Box bordered>
          <BodyText>
            This skew talks about the main mechanism{" "}
            <HighlightText
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            >
              Alzhiemers disease
            </HighlightText>
            . Phosphorylation of Glycogen synthase kinase 3 beta at Theronine,
            668 increases the degradation of amyloid precursor protein and GSK3
            beta also phosphorylates tau protein in intact cells.
          </BodyText>
          <BodyTextLight>
            Sergio CM, Ronaldo CA, Exp Brain Res, 2022 March 2. dol:10,
            1007/a0021 - 0022. Online ahead print, PMID - 234678 Review.
          </BodyTextLight>
          {/* Popover grid compnent  */}
          <PopoverGrid
            anchorEl={anchorEl}
            handlePopoverClose={handlePopoverClose}
            data={rows}
          />
        </Box>
      </Section>
      <Section>
        {dummyTripleData.length > 1 ? (
          dummyTripleData.map((item) => (
            <TrippleCollapsed
              key={item}
              chipContent={[
                { labelKey: "Protein", labelValue: "GSK3BB" },
                {
                  labelKey: "protein_modification",
                  labelValue: "Phosphorylationn",
                },
                { labelKey: " Amino_acid", labelValue: "Threoninee" },
                { labelKey: "Protein", labelValue: "GSK3B" },
                {
                  labelKey: "protein_modification",
                  labelValue: "Phosphorylation",
                },
              ]}
            >
              <TripleCollapseContainer>
                <TripleForm />
              </TripleCollapseContainer>
            </TrippleCollapsed>
          ))
        ) : (
          <TripleForm />
        )}

        <ActionBox>
          <Grid
            container
            spacing={0}
            alignItems="center"
            justifyContent="flex-end"
          >
            <Grid item xs={6} textAlign="right">
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="flex-end"
              >
                <Grid item xs={3} textAlign="right">
                  <Button
                    btnText="Cancel"
                    variant="outlined"
                    onClick={() => navigate("/triple-view")}
                  />
                </Grid>
                <Grid item xs={3} textAlign="right">
                  <Button
                    btnText="Commit"
                    variant="contained"
                    onClick={handleClickOpenConfirm}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ActionBox>
      </Section>
      {/* Add Evidence  */}
      <Modal
        size="sm"
        open={openModal}
        close={handleClose}
        title="Provide Evidence"
        children={<EvidenceModalContent handleClose={handleClose} />}
      />

      <ConfirmationModal
        openModal={openModalConfirm}
        handleClose={handleCloseConfirm}
        title="Confirm Commit"
        subtitle={"Are you sure you want to confirm commit ?"}
        btnText="Commit"
      />
    </div>
  );
};

export default EditTriple;

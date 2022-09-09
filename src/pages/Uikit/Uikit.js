import React, { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import { Button as MuiButton } from "@mui/material";

import Input from "components/Input";
import Dropdown from "components/Dropdown";
import Button from "components/Button";
import IconButton from "components/IconButton";
import Card from "components/Card/Card";
import Header from "components/Header";
import Footer from "components/Footer";
import PointBanner from "components/PointBanner";
import PageHeader from "components/PageHeader";
import Tag from "components/Tag";
import Alert from "components/Alert";
import Chip from "components/Chip";

import TripleHistoryTable from "../Contributor/components/TripleHistoryTable/TripleHistoryTable";

import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import AddIcon from "@mui/icons-material/Add";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Tooltip from "components/Tooltip";

import ButtonGroup from "components/ButtonGroup";
import TrippleCollapsed from "components/TrippleCollapsed";
import SearchWithIcon from "components/SearchWithIcon";
// import ExtendableSubjectType from 'components/ExtendableSubjectType';
import ExtendableSubjectTypeForm from "components/ExtendableSubjectTypeForm/ExtendableSubjectTypeForm";
import { MultiFormContainer } from "assets/styles/main.styles";

import { Modal } from "components";

import AutoComplete from "components/AutoComplete";

import { BarGraphChart, PieChart, RadialChart } from "components/Charts";

const radialData = [{ name: "Overall Satisfaction", value: 85 }];
const dataBar = [
  {
    name: "5 Jun",
    uv: 4000,
    pv: 10,
    amt: 20,
  },
  {
    name: "6 Jun",
    uv: 3000,
    pv: 20,
    amt: 10,
  },
  {
    name: "7 Jun",
    uv: 2000,
    pv: 30,
    amt: 26,
  },
  {
    name: "8 Jun",
    uv: 2780,
    pv: 34,
    amt: 30,
  },
  {
    name: "9 Jun",
    uv: 1890,
    pv: 20,
    amt: 40,
  },
  {
    name: "10 Jun",
    uv: 2390,
    pv: 40,
    amt: 15,
  },
  {
    name: "11 Jun",
    uv: 3490,
    pv: 15,
    amt: 20,
  },
];

const Uikit = () => {
  const [age, setAge] = React.useState("");
  const [multipleSubjectTypes, setMultipleSubjectTypes] = React.useState([
    {
      id: 0, // todo: use unique id. eg uuid library
      selectedValue: "",
      options: ["Option one for el one", "Option two for el two"],
    },
  ]);

  const onAddToLeftOfSubjectType = (element) => {
    console.log("element to add to", element);
    const newData = [...multipleSubjectTypes];
    // todo: Add constrain to only element to the left
    newData.unshift({
      id: element.id + 1,
      selectedValue: "",
      options: element.options,
    });
    setMultipleSubjectTypes(newData);
  };

  const onAddToRightOfSubjectType = (element) => {
    console.log("element to add to", element);
    const newData = [...multipleSubjectTypes];
    newData.push({
      id: element.id + 1,
      selectedValue: "",
      options: element.options,
    });
    setMultipleSubjectTypes(newData);
  };

  const onRemoveFromMultipleSubjectType = (elementId) => {
    if (multipleSubjectTypes.length <= 1) return;
    const filteredList = multipleSubjectTypes.filter(
      (item) => item.id !== elementId
    );
    setMultipleSubjectTypes(filteredList);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // MODAL

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // PIE CHART

  // FOR STATIC PURPOSE I HAVE ADDED TWO ARRAYS . DURING IMPLEMENTATION YOU CAN CREATE
  // A SINGLE STATE FOR PIE DATA AND REPLACE THE DATA BASED ON EACH ITEM CLICKED. NO NEED FOR CONDITIIONAL DATA REPLACEMENT.

  // HERE I HAVE USED ID AS UNIQUE IDENTIFIER , YOU CAN REPLACE THAT TO WHATEVER YOU NEED.

  // FIRST LEVEL DATA
  const dataPie = [
    { id: 1, name: "Group A", value: 2400, fill: "#0088FE" },
    { id: 2, name: "Group B", value: 4567, fill: "#00C49F" },
    { id: 3, name: "Group C", value: 1398, fill: "#FFBB28" },
    { id: 4, name: "Group D", value: 9800, fill: "#FF8042" },
    { id: 5, name: "Group E", value: 3908, fill: "#00C49F" },
    { id: 6, name: "Group F", value: 4800, fill: "#FF8042" },
  ];

  // SECOND LEVEL DATA
  const dataPie2 = [
    { name: "Group A 1", value: 1400, fill: "#0088FE" },
    { name: "Group A 2", value: 6567, fill: "#0088FE" },
    { name: "Group A 3", value: 4398, fill: "#0088FE" },
    { name: "Group A 4", value: 5800, fill: "#0088FE" },
    { name: "Group A 5", value: 10800, fill: "#0088FE" },
  ];

  const [levelId, setLevelId] = useState(null);

  const handleChartLevel = (id) => {
    setLevelId(id);
  };

  // PIE CHART END

  return (
    <div style={{ marginTop: 20 }}>
      <div>
        <Box
          sx={{
            flexGrow: 1,
            p: 4,
            border: "1px dashed grey",
            marginBottom: 2,
            borderRadius: 2,
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h6" gutterBottom component="div">
            Inputs
          </Typography>
          <Grid container spacing={2} alignItems="flex-start">
            <Grid item xs={3}>
              <Input label="Input" />
            </Grid>
            <Grid item xs={3}>
              <Input isMulti label="Textarea" />
            </Grid>
            <Grid item xs={3}>
              <AutoComplete label="AutoComplete" />
            </Grid>
            <Grid item xs={3}>
              <Dropdown
                label="Dropdown"
                onChange={handleChange}
                value={age}
                options={[
                  {
                    id: "option a",
                    optionText: "Option A",
                  },
                  {
                    id: "option b",
                    optionText: "Option B",
                  },
                ]}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h6" gutterBottom component="div">
                input with search icon
              </Typography>
              <SearchWithIcon />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            p: 4,
            border: "1px dashed grey",
            marginBottom: 2,
            borderRadius: 2,
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h6" gutterBottom component="div">
            Buttons
          </Typography>
          <Grid container spacing={2} alignItems="baseline">
            <Grid item xs={2}>
              <Button
                btnText="Button Primary"
                variant="contained"
                onClick={() => console.log("clicked")}
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                btnText="Button Outlined"
                variant="outlined"
                onClick={() => console.log("clicked")}
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                btnText="Button Secondary"
                variant="secondary"
                onClick={() => console.log("clicked")}
              />
            </Grid>
            <Grid item xs={1}>
              <Button
                btnText="Back"
                variant="text"
                startIcon={<ChevronLeftOutlinedIcon />}
                onClick={() => console.log("clicked")}
              />
            </Grid>
            <Grid item xs={1}>
              <Button
                btnText="Next"
                variant="text"
                endIcon={<ChevronRightOutlinedIcon />}
                onClick={() => console.log("clicked")}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            alignItems="baseline"
            style={{ marginTop: 20 }}
          >
            <Grid item xs={1}>
              <IconButton icon={<AddCommentOutlinedIcon fontSize="small" />} />
            </Grid>
            <Grid item xs={1}>
              <IconButton
                secondary
                icon={<ContentCopyOutlinedIcon fontSize="small" />}
              />
            </Grid>
            <Grid item xs={1}>
              <IconButton secondary icon={<AddIcon fontSize="medium" />} />
            </Grid>
            <Grid item xs={1}>
              <IconButton icon={<ChatOutlinedIcon fontSize="small" />} />
            </Grid>
            <Grid item xs={1}>
              <IconButton
                icon={<ChevronRightOutlinedIcon fontSize="medium" />}
              />
            </Grid>
            <Grid item xs={1}>
              <IconButton
                secondary
                icon={<DeleteOutlineOutlinedIcon fontSize="medium" />}
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            p: 4,
            border: "1px dashed grey",
            marginBottom: 2,
            borderRadius: 2,
            backgroundColor: "#f4f4f4",
          }}
        >
          <Typography variant="h6" gutterBottom component="div">
            Header
          </Typography>

          <Grid container spacing={2} alignItems="baseline">
            <Grid item xs={12}>
              <Header />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            p: 4,
            border: "1px dashed grey",
            marginBottom: 2,
            borderRadius: 2,
            backgroundColor: "#f4f4f4",
          }}
        >
          <Typography variant="h6" gutterBottom component="div">
            Footer
          </Typography>

          <Grid container spacing={2} alignItems="baseline">
            <Grid item xs={12}>
              <Footer />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            p: 4,
            border: "1px dashed grey",
            marginBottom: 2,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" gutterBottom component="div">
            Page Headers
          </Typography>

          <Grid container spacing={2} alignItems="baseline">
            <Grid item xs={12}>
              <Typography variant="subtitle2" component="div" color="lightgray">
                Welcome Header
              </Typography>
              <PageHeader
                isHomePage
                user="User"
                btnText="Add Triple"
                onClick={() => {}}
              />
            </Grid>

            <Grid item xs={12}>
              <Divider style={{ marginBottom: 20 }} />
              <Typography variant="subtitle2" component="div" color="lightgray">
                Inner Page Header
              </Typography>
              <PageHeader pageTitleText="Add Triples" />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            p: 4,
            border: "1px dashed grey",
            marginBottom: 2,
            borderRadius: 2,
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h6" gutterBottom component="div">
            Card
          </Typography>

          <Grid container spacing={2} alignItems="baseline">
            <Grid item xs={3}>
              <Card count={12} title="Total No. of Evidence" color="purple" />
            </Grid>
            <Grid item xs={3}>
              <Card count={12} title="Total No. of Evidence" color="green" />
            </Grid>
            <Grid item xs={3}>
              <Card count={12} title="Total No. of Evidence" color="red" />
            </Grid>
            <Grid item xs={3}>
              <Card count={12} title="Total No. of Evidence" color="blue" />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            p: 4,
            border: "1px dashed grey",
            marginBottom: 2,
            borderRadius: 2,
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h6" gutterBottom component="div">
            Expandable Banner
          </Typography>

          <Grid container spacing={2} alignItems="baseline">
            <Grid item xs={12}>
              <PointBanner
                points={32}
                user="Rob"
                infoText="You’ve been rewarded with Rs. 2000 in your Zeta Gift Card from
            Better world Technologies."
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            p: 4,
            border: "1px dashed grey",
            marginBottom: 2,
            borderRadius: 2,
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h6" gutterBottom component="div">
            Table
          </Typography>

          <Grid container spacing={2} alignItems="baseline">
            <Grid item xs={12}>
              <TripleHistoryTable />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            p: 4,
            border: "1px dashed grey",
            marginBottom: 2,
            borderRadius: 2,
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h6" gutterBottom component="div">
            Tags
          </Typography>

          <Grid container spacing={2} alignItems="baseline">
            <Grid item xs={2}>
              <Tag label="All" type="all" />
            </Grid>
            <Grid item xs={2}>
              <Tag label="Reverted" type="reverted" />
            </Grid>
            <Grid item xs={2}>
              <Tag label="Approved" type="approved" />
            </Grid>
            <Grid item xs={2}>
              <Tag label="In Draft" type="in draft" />
            </Grid>
            <Grid item xs={2}>
              <Tag label="Committed" type="committed" />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            p: 4,
            border: "1px dashed grey",
            marginBottom: 2,
            borderRadius: 2,
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h6" gutterBottom component="div">
            Alert Boxes
          </Typography>

          <Grid container spacing={2} alignItems="baseline">
            <Grid item xs={4}>
              <Alert
                type="success"
                message="This is Success alert"
                onClose={() => console.log("close alert")}
              />
            </Grid>
            <Grid item xs={4}>
              <Alert
                type="warning"
                message="This is warning alert"
                onClose={() => console.log("close alert")}
              />
            </Grid>
            <Grid item xs={4}>
              <Alert
                type="error"
                message="This is error alert"
                onClose={() => console.log("close alert")}
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            p: 4,
            border: "1px dashed grey",
            marginBottom: 2,
            borderRadius: 2,
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h6" gutterBottom component="div">
            Chips
          </Typography>
          <Grid container spacing={2} alignItems="baseline">
            <Grid item xs={4}>
              <Chip
                content={[{ labelKey: "Species", labelValue: "Human Beings" }]}
              />
            </Grid>
            <Grid item xs={4}>
              <Chip
                content={[{ labelKey: "Disease", labelValue: "Alziehmers" }]}
              />
            </Grid>
            <Grid item xs={4}>
              <Chip
                content={[{ labelKey: "Removeable", labelValue: "Chip" }]}
                onDelete={() => console.log("To be removed")}
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            p: 4,
            border: "1px dashed grey",
            marginBottom: 2,
            borderRadius: 2,
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h6" gutterBottom component="div">
            Tooltips
          </Typography>
          <Grid container spacing={2} alignItems="baseline">
            <Grid item xs={3}>
              <Tooltip message="Duplicate" position="bottom">
                Hover to show tooltip at bottom
              </Tooltip>
            </Grid>
            <Grid item xs={3}>
              <Tooltip message="Duplicate" position="top">
                Hover to show tooltip at top
              </Tooltip>
            </Grid>
            <Grid item xs={3}>
              <Tooltip message="Duplicate" position="right">
                Hover to show tooltip at right
              </Tooltip>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            p: 4,
            border: "1px dashed grey",
            marginBottom: 2,
            borderRadius: 2,
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h6" gutterBottom component="div">
            Modal Boxes
          </Typography>
          <Grid container spacing={2} alignItems="baseline">
            <Grid item xs={2}>
              <Button
                btnText="Show  Modal"
                variant="contained"
                onClick={handleClickOpen}
              />
              <Modal
                size="sm"
                open={open}
                close={handleClose}
                title="Modal Title"
                children={<div>Modal Content</div>}
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            p: 4,
            border: "1px dashed grey",
            marginBottom: 2,
            borderRadius: 2,
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h6" gutterBottom component="div">
            Button Groups
          </Typography>
          <Grid container spacing={2} alignItems="baseline">
            <Grid item xs={3}>
              <ButtonGroup>
                <MuiButton>Duplicate</MuiButton>
                <MuiButton>Edit</MuiButton>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            p: 4,
            border: "1px dashed grey",
            marginBottom: 2,
            borderRadius: 2,
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h6" gutterBottom component="div">
            Tripple Collapsed
          </Typography>
          <Grid container spacing={2} alignItems="baseline">
            <Grid item xs={12}>
              <TrippleCollapsed
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
                  { labelKey: " Amino_acid", labelValue: "Threonine" },
                ]}
              >
                <div style={{ margin: "20px" }}>
                  Click again to Collapse me. I am the child to hide :)
                </div>
              </TrippleCollapsed>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            p: 4,
            border: "1px dashed grey",
            marginBottom: 2,
            borderRadius: 2,
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h6" gutterBottom component="div">
            Extendable Subject Type
          </Typography>
          <Grid container spacing={2} alignItems="baseline">
            <Grid item xs={12}>
              <MultiFormContainer>
                {multipleSubjectTypes.map((subjectType) => (
                  <React.Fragment key={subjectType.id}>
                    <ExtendableSubjectTypeForm
                      label="label here"
                      onAddToLeft={() => onAddToLeftOfSubjectType(subjectType)}
                      onAddToRight={() =>
                        onAddToRightOfSubjectType(subjectType)
                      }
                      onChange={(_e, value) =>
                        console.log("selected value === ", {
                          value,
                          selectedValue: value,
                        })
                      }
                      options={subjectType.options}
                      onRemove={
                        multipleSubjectTypes.length > 1
                          ? () => {
                              onRemoveFromMultipleSubjectType(subjectType.id);
                            }
                          : undefined
                      }
                    />
                  </React.Fragment>
                ))}
              </MultiFormContainer>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Box
        sx={{
          flexGrow: 1,
          p: 4,
          border: "1px dashed grey",
          marginBottom: 2,
          borderRadius: 2,
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h6" gutterBottom component="div">
          Graphs and Charts
        </Typography>
        <Grid container spacing={2} alignItems="baseline">
          <Grid item xs={6}>
            <BarGraphChart data={dataBar} />
          </Grid>
          <Grid item xs={6}>
            <RadialChart circleSize={200} data={radialData} />
          </Grid>
          <Grid item xs={6}>
            PIE CHART
            <PieChart
              data={levelId === 1 ? dataPie2 : dataPie}
              onClickHandler={handleChartLevel}
              levelId={levelId}
              setLevelId={setLevelId}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Uikit;

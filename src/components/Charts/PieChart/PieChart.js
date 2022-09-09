import React from "react";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import {
  PieChart as RechartPieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

import { Button } from "components";

import { PieContainer, ButtonBackContainer } from "./pie.styles";

const PieChart = ({ data, onClickHandler, levelId, setLevelId }) => {
  const handleBack = () => {
    setLevelId(null);
  };
  return (
    <PieContainer>
      {levelId !== null && levelId !== undefined && (
        <ButtonBackContainer>
          <Button
            startIcon={<ChevronLeftOutlinedIcon />}
            btnText="Back"
            onClick={handleBack}
          />
        </ButtonBackContainer>
      )}

      <ResponsiveContainer width={500} height={500} aspect={2}>
        <RechartPieChart>
          <Pie
            dataKey="value"
            data={data}
            innerRadius={40}
            outerRadius={100}
            onClick={(e) => onClickHandler(e.id)}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip />
        </RechartPieChart>
      </ResponsiveContainer>
    </PieContainer>
  );
};

export default PieChart;

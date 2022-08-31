import React from "react";

import { Tag } from "components";

import { FilterChips } from "../table.styles";

const Filter = ({ setFilterValue, reviewerFilter }) => {
  return (
    <div>
      {reviewerFilter ? (
        <FilterChips>
          <span>Filter By:</span>
          <Tag label="All" type="all" onClick={() => setFilterValue("")} />
          <Tag
            label="Triples Validated"
            type="approved"
            onClick={() => setFilterValue("Triples Validated")}
          />
          <Tag
            label="Triples Flagged"
            type="in draft"
            onClick={() => {
              setFilterValue("Triples Flagged");
            }}
          />
          <Tag
            label="Invalid Evidence"
            type="committed"
            onClick={() => setFilterValue("Invalid Evidence")}
          />
          <Tag
            label="Triples Reverted"
            type="reverted"
            onClick={() => setFilterValue("Triples Reverted")}
          />
        </FilterChips>
      ) : (
        <FilterChips>
          <span>Filter By:</span>
          <Tag label="All" type="all" onClick={() => setFilterValue("")} />
          <Tag
            label="Approved"
            type="approved"
            onClick={() => setFilterValue("Approved")}
          />
          <Tag
            label="In Draft"
            type="in draft"
            onClick={() => {
              setFilterValue("In Draft");
            }}
          />
          <Tag
            label="Committed"
            type="committed"
            onClick={() => setFilterValue("Committed")}
          />
          <Tag
            label="Reverted"
            type="reverted"
            onClick={() => setFilterValue("Reverted")}
          />
        </FilterChips>
      )}
    </div>
  );
};

export default Filter;

import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./style.css";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const SidebarListning = () => {
  return (
    <aside className="sidebar-listning py-6 px-4 rounded-lg shadow-lg bg-white">
      <h1 className="border-b pb-2 text-[18px] font-[600] mb-1">Filter By</h1>

      {/* Availability Section */}
      <div className="box mb-4">
        <h3 className="mb-1 text-sm font-semibold text-black ml-2 mt-4 pb-2">
          Availability
        </h3>
        <div className="scroll px-2">
          <FormGroup>
            {["Available", "In stock", "Not available"].map(
              (category, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between group transition-all"
                >
                  <FormControlLabel
                    className="checkbox-label link"
                    control={<Checkbox size="small" />}
                    label={category}
                  />
                  <span className="text-gray-600 text-[14px] group-hover:text-red-600 font-medium transition-colors">
                    (1)
                  </span>
                </div>
              )
            )}
          </FormGroup>
        </div>
      </div>

      <div className="box mt-4">
        <h3 className="mb-1 text-sm font-semibold text-black ml-2 mt-4 pb-2">
          Filter By Price
        </h3>
        <RangeSlider className="" />

        <div className="flex justify-between items-center pt-2 pb-2 priceRange px-4">
          <span className="text-sm font-medium text-gray-700 flex items-center gap-1">
            From:
            <strong className="text-[11px] text-black font-semibold">Rs: 100</strong>
          </span>
          <span className="text-sm font-medium text-gray-700 flex items-center gap-1">
            To:
            <strong className="text-[11px] text-black font-semibold">Rs: 500</strong>
          </span>
        </div>
      </div>

      {/* Size Section */}
      <div className="box mb-4">
        <h3 className="mb-1 text-sm font-semibold text-black ml-2 pb-2">
          Size
        </h3>
        <div className="scroll px-2">
          <FormGroup>
            {["Small", "Medium", "Large", "XL", "XXL", "XXXL"].map(
              (size, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between group transition-all"
                >
                  <FormControlLabel
                    className="checkbox-label link"
                    control={<Checkbox size="small" />}
                    label={size}
                  />
                  <span className="text-gray-600 text-[14px] group-hover:text-red-600 font-medium transition-colors">
                    (1)
                  </span>
                </div>
              )
            )}
          </FormGroup>
        </div>
      </div>

      {/* Categories Section */}
      <div className="box">
        <h3 className="mb-1 text-sm font-semibold text-black ml-2 pb-2">
          Categories
        </h3>
        <div className="scroll px-2">
          <FormGroup>
            {[
              "Gadget Zone",
              "Initech Space",
              "Looney Tunes",
              "Massive Dynamic",
            ].map((category, index) => (
              <div
                key={index}
                className="flex items-center justify-between group transition-all"
              >
                <FormControlLabel
                  className="checkbox-label link"
                  control={<Checkbox size="small" />}
                  label={category}
                />
                <span className="text-gray-600 text-[14px] group-hover:text-red-600 font-medium transition-colors">
                  (1)
                </span>
              </div>
            ))}
          </FormGroup>
        </div>
      </div>
    </aside>
  );
};

export default SidebarListning;

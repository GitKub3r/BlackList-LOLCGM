import type { InputData } from "../../types/Input";
import React from "react";
import "./Input.css";

export const Input = React.forwardRef<HTMLInputElement, InputData>(
  (data, ref) => {
    const { label, type, id, defaultValue, name, onChange } = data;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) onChange(e);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      const labelElement = e.target.previousElementSibling as HTMLLabelElement;
      if (labelElement) {
        labelElement.classList.add("active");
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      const labelElement = e.target.previousElementSibling as HTMLLabelElement;
      if (labelElement && e.target.value === "") {
        labelElement.classList.remove("active");
      }
    };

    return (
      <div className="main-input-container flex-v">
        <label className="main-input-label" htmlFor={id}>
          {label ? label : "Template Label"}
        </label>
        <input
          ref={ref}
          id={id ? id : "template-input-id"}
          type={type ? type : "text"}
          name={name}
          className="main-input-field"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          defaultValue={defaultValue ? defaultValue : ""}
        />
      </div>
    );
  }
);

import React from "react";

const Button = () => {
  return (
    <label data-v-1fbea61e="" for="choose_input" class="label__button">
      {" "}
      Choose a file{" "}
      <input
        data-v-1fbea61e=""
        id="choose_input"
        accept="image/jpeg, image/png"
        type="file"
        class="upload__input--button"
      />
    </label>
  )
}

export default Button
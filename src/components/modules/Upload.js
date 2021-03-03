import React from "react";
import "../../css/App.css";
import Button from "../atoms/Button";
import { ReactComponent as Logo } from "../../img/main.svg";

function Upload() {
  return (
    <div className="container">
      <div data-v-0e4de200="" class="wrap">
        <div data-v-0e4de200="" class="inner">
          <div data-v-1fbea61e="" data-v-0e4de200="">
            <p data-v-1fbea61e="" class="heading">
              Upload your image
            </p>
            <p data-v-1fbea61e="" class="note">
              File should be Jpeg, Png,...
            </p>
            <div data-v-1fbea61e="" class="upload__area">
              <Logo />
              <p data-v-1fbea61e="" class="upload__text">
                Drag &amp; Drop your image here
              </p>
            </div>
            <p data-v-1fbea61e="" class="note__or">
              Or
            </p>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;

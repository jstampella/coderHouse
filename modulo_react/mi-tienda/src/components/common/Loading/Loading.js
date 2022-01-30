import React from "react";
import { LoadingOutlined } from "@ant-design/icons";

import "./Loading.scss";

export default function Loading({ title }) {
  return (
    <div className="loading">
      <div className="loading--center">
        <LoadingOutlined className="loading--icon" />
        <div className="loading--texto">{title}</div>
      </div>
    </div>
  );
}

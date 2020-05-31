// import React from "react";
import { toast } from "react-toastify";
const ToastHelper = ({ error }: { error: any }) => {
  return toast.success(error && error);
};

export default ToastHelper;

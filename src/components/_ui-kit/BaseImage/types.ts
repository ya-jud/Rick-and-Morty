import React from "react";

interface IProps extends React.ImgHTMLAttributes<HTMLImageElement>{
  src: string | undefined;
  alt?: string;
  fallback?: string | undefined;
}

export default IProps;
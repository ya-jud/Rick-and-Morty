// Utilities
import React, {
  useState,
  useEffect,
  useMemo
} from "react";

// Styles
import "./styles.scss";

// Content
import DefaultImage from "@/assets/images/default.webp";

// Types
import IProps from "./types.ts"

const BaseImage: React.FC<IProps> = ({src, alt = "", fallback, ...rest}) => {
  const defaultImage = DefaultImage as string;
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);

  const supportsWebP = useMemo(() => {
    const canvas = document.createElement("canvas");
    return canvas.getContext("2d") && canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0;
  }, []);

  useEffect(() => {
    if (supportsWebP && src?.endsWith(".jpg")) {
      setImgSrc(src!.replace(".jpg", ".webp"));
    }
  }, [src]);

  return (
    <img
      className="base-image"
      src={imgSrc}
      alt={alt}
      loading="lazy"
      onError={() => setImgSrc(fallback || defaultImage)}
      {...rest}
    />
  );
};

export default BaseImage;
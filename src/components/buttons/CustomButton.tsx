import Button from "@mui/material/Button";
import type { ButtonProps } from "@mui/material";

type CustomButtonProps = {
  label: string;
  imageSrc?: string; 
  imageAlt?: string; 
  imageSize?: number; 
} & ButtonProps;

const CustomButton = ({
  label,
  imageSrc,
  imageAlt = "button icon",
  imageSize = 20,
  ...rest
}: CustomButtonProps) => {
  return (
    <Button
      {...rest}
      startIcon={
        imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            width={imageSize}
            height={imageSize}
            style={{ objectFit: "contain" }}
          />
        ) : undefined
      }
    >
      {label}
    </Button>
  );
};

export default CustomButton;

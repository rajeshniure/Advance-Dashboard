import React, { useRef } from "react";
import { useFormContext } from "react-hook-form";
import { Box, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import type { UnifiedFormData } from "./schema";


const media= () => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<UnifiedFormData>();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const selectedFiles = watch("media") || [];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filesArray = Array.from(e.target.files || []);
    setValue("media", filesArray);
  };

  return (
    <Box
      border="2px dashed #9b5de5"
      borderRadius="12px"
      p={4}
      textAlign="center"
      onClick={() => inputRef.current?.click()}
      sx={{ cursor: "pointer", backgroundColor: "#f9f9f9" }}
    >
      <CloudUploadIcon sx={{ fontSize: 48, color: "#9b5de5" }} />
      <Typography mt={2}>
        Drop your image here or{" "}
        <label htmlFor="file-upload" style={{ color: "#9b5de5", cursor: "pointer" }}>
          Browse
        </label>
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Support: JPG, JPEG, PNG
      </Typography>

      <input
        ref={inputRef}
        id="file-upload"
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept="image/jpeg, image/png"
        multiple
      />

      {selectedFiles.length > 0 && (
        <Typography variant="body2" mt={2}>
          {selectedFiles.length} file{selectedFiles.length > 1 ? "s" : ""} selected
        </Typography>
      )}

      {errors.media && (
        <Typography color="error">{errors.media.message as string}</Typography>
      )}
    </Box>
  );
};

export default media;

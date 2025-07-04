import React, { useState } from "react";
import { Box, Stack, TextField, Modal } from "@mui/material";
import CustomButton from "../buttons/CustomButton";
import { z } from "zod";



const schema = z.object({
  title: z.string().nonempty("Title is required"),
  teamName: z.string().min(1, "Team name is required"),
  duration: z.string().min(1, "Duration is required"),
  attachments: z.number().min(0, "Must be a number"),
  comments: z.coerce.number().min(0, "Must be a number"),
});

type cardData1 = z.infer<typeof schema> ;

interface AddTaskModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (data: cardData1) => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({
  open,
  onClose,
  onAdd,
}) => {
  const [form, setForm] = useState<cardData1>({
    title: "",
    teamName: "",
    duration: "",
    attachments: 0,
    comments: 0,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof cardData1, string>>>(
    {}
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        title: fieldErrors.title?.[0],
        teamName: fieldErrors.teamName?.[0],
        duration: fieldErrors.duration?.[0],
        attachments: fieldErrors.attachments?.[0],
        comments: fieldErrors.comments?.[0],
      });
      return;
    }

    setErrors({});
    onAdd(result.data);
    setForm({
      title: "",
      teamName: "",
      duration: "",
      attachments: 0,
      comments: 0,
    });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        width="30%"
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: 4,
          bgcolor: "background.paper",
          borderRadius: 2,
          mx: "auto",
          my: "10vh",
        }}
      >
        <Stack spacing={2}>
          <TextField
            name="title"
            label="Title"
            value={form.title}
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>{errors.title}</div>

          <TextField
            name="teamName"
            label="Team Name"
            value={form.teamName}
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>{errors.teamName}</div>

          <TextField
            name="duration"
            label="Duration"
            value={form.duration}
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>{errors.duration}</div>

          <TextField
            name="attachments"
            label="Attachments"
            type="number"
            value={form.attachments}
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>{errors.attachments}</div>

          <TextField
            name="comments"
            label="Comments"
            type="number"
            value={form.comments}
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>{errors.comments}</div>

          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <CustomButton label="Cancel" variant="outlined" onClick={onClose} />
            <CustomButton label="Add" variant="contained" type="submit" />
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

export default AddTaskModal;

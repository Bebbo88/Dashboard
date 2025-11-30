import { Button, MenuItem, Stack, Snackbar, Alert } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../components/Header";

export default function Profile() {
  const [open, setOpen] = useState(false);

  const handleClose = (_, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const roles = [
    { value: "Admin", label: "Admin" },
    { value: "Manager", label: "Manager" },
    { value: "User", label: "User" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setOpen(true); // ✨ افتح Snackbar
    reset();
  };

  return (
    <>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        noValidate
        autoComplete="on"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Header title={"CREATE USER"} subTitle={"Create a new user account"} />

        {/* NAME FIELDS */}
        <Stack direction="row" sx={{ gap: 2 }}>
          <TextField
            sx={{ flex: 1 }}
            label="First Name"
            variant="filled"
            error={!!errors.firstName}
            helperText={
              errors.firstName && "First name must be at least 3 characters"
            }
            {...register("firstName", { required: true, minLength: 3 })}
          />

          <TextField
            sx={{ flex: 1 }}
            label="Last Name"
            variant="filled"
            error={!!errors.lastName}
            helperText={errors.lastName && "Last name is required"}
            {...register("lastName", { required: true })}
          />
        </Stack>

        {/* EMAIL */}
        <TextField
          label="Email"
          variant="filled"
          error={!!errors.email}
          helperText={errors.email && "Invalid email"}
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+\.\S+$/,
          })}
        />

        {/* PHONE */}
        <TextField
          label="Contact Number"
          variant="filled"
          error={!!errors.phone}
          helperText={errors.phone && "Invalid phone number"}
          {...register("phone", {
            required: true,
            pattern: /^[0-9()+-\s]+$/,
          })}
        />

        {/* ADDRESS */}
        <TextField
          label="Address 1"
          variant="filled"
          {...register("address1", { required: true })}
          error={!!errors.address1}
          helperText={errors.address1 && "Address 1 is required"}
        />

        <TextField
          label="Address 2"
          variant="filled"
          {...register("address2")}
        />

        {/* ROLE */}
        <TextField
          select
          label="Role"
          defaultValue="User"
          variant="filled"
          {...register("role")}
        >
          {roles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        {/* BUTTON */}
        <Box sx={{ textAlign: "right" }}>
          <Button type="submit" variant="contained" color="primary">
            Create New Account
          </Button>
        </Box>
      </Box>

      {/* ⭐ SNACKBAR */}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
          variant="filled"
        >
          Account Created Successfully 🎉
        </Alert>
      </Snackbar>
    </>
  );
}

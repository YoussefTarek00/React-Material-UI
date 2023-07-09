/* eslint-disable no-unused-vars */
import { Box, Button, InputAdornment, styled } from "@mui/material";
import TextField from "@mui/material/TextField";
import { purple } from "@mui/material/colors";
import { ChevronRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: theme.palette.joo.main,
  "&:hover": {
    backgroundColor: theme.palette.joo.main,
    scale: "0.99",
  },
}));

const Create = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ price, title }) => {
    price = Number(price);
    fetch("http://localhost:3000/mydata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price, title }),
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off"
      sx={{ width: "380px" }}
      component="form"
    >
      <TextField
        fullWidth
        label="Transaction Title"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
        {...register("title", {
          required: { value: true, message: "Required field" },
          minLength: { value: 3, message: "minimum lenght is 3" },
        })}
        error={Boolean(errors.title)}
        helperText={errors.title ? errors.title?.message.toString() : null}
      />

      <TextField
        error={Boolean(errors.price)}
        helperText={errors.price ? errors.price?.message.toString() : null}
        {...register("price", {
          required: { value: true, message: "Required field" },
        })}
        fullWidth
        label="Amount"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />
      <ColorButton
        type="submit"
        onClick={(params) => {}}
        sx={{ mt: "22px" }}
        variant="contained"
      >
        Submit <ChevronRight />
      </ColorButton>
    </Box>
  );
};

export default Create;

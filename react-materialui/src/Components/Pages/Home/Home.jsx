import { Box, IconButton, Paper, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useEffect, useState } from "react";
const Home = () => {
  const [mydata, setmydata] = useState([]);

  let totalPrice = 0;

  useEffect(() => {
    fetch("http://localhost:3000/mydata")
      .then((res) => res.json())
      .then((data) => setmydata(data));
  }, []);


  const handelDelete = (item) => {
    fetch(`http://localhost:3000/mydata/${item.id}`, {
      method: "DELETE",
    });

    const newArr = mydata.filter((newObj) => {
      return newObj.id !== item.id;
    });

    setmydata(newArr);
  }
  return (
    <Box>
      {mydata.map((item) => {
        totalPrice += item.price;

        return (
          <Paper
            key={item.id}
            sx={{
              position: "relative",
              width: "364px",
              display: "flex",
              justifyContent: "space-between",
              mt: "22px",
              pt: "27px",
              pb: "7px",
            }}
          >
            <Typography sx={{ ml: "16px", fontSize: "1.3rem" }} variant="h6">
              {item.title}
            </Typography>
            <Typography
              sx={{
                mr: "33px",
                fontWeight: "500",
                fontSize: "1.4rem",
                opacity: "0.8",
              }}
              variant="h6"
            >
              ${item.price}
            </Typography>

            <IconButton
              onClick={() => { 
                handelDelete(item)
               }}
              sx={{ position: "absolute", top: "0", right: "0" }}
            >
              <Close sx={{ fontSize: "20px" }} />
            </IconButton>
          </Paper>
        );
      })}
      <Typography sx={{ mt: "55px", textAlign: "center" }} variant="h5">
        You Spend 👉 ${totalPrice}
      </Typography>
    </Box>
  );
};

export default Home;

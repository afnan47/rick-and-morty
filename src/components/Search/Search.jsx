import { useEffect, useState } from "react";
import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import FilterProducts from "../../filterProducts";
import { fetchdata } from "../../fetchdata";

function Search() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleInput = (e) => {
    console.log(e.target.value);
    setInput(e.target.value.toLowerCase());
  };

  useEffect(() => {
    const fetch = async () => {
      const data = Array(20)
        .fill(0)
        .map((v, i) => fetchdata(i + 1));

      const resp = await Promise.all(data);
      setList(resp);
    };

    void fetch();
  }, []);
  return (
    <>
      <Box
        sx={{
          height: "98vh",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Typography variant="h4" component={"h1"}>
          Rick and Morty
        </Typography>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={list.map((item) => item.name)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Character"
              onSelect={handleInput}
              sx={{ width: 350, margin: "10px auto" }}
            />
          )}
        />
        <FilterProducts searchstring={input} list={list} />
      </Box>
    </>
  );
}
export default Search;

import { TextField } from "@mui/material";

const Search = (props) => {
    const { onChange, value } = props;
    return <TextField
        type='search'
        id="standard-basic"
        label="search"
        variant="standard"
        value={value} onChange={onChange}
        fullWidth
        sx={{ mb: "2rem" }}
    />
};

export default Search;
import {
  SelectChangeEvent,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

interface SelectProps {
  data: string[];
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
}

export const SelectComponent = ({ data, value, handleChange }: SelectProps) => {
  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={value}
        onChange={handleChange}
        sx={{ fontSize: 12, borderRadius: 5 }}
      >
        {data.map((item) => (
          <MenuItem value={item} key={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

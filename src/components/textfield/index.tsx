import { TextField, TextFieldProps } from "@mui/material";

interface ITextFieldProps extends Omit<TextFieldProps, "ref"> {}

const TextFieldComponent: React.FC<ITextFieldProps> = (props) => {
    return <TextField {...props} />;
};

export default TextFieldComponent;

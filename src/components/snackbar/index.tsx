import { Snackbar, SnackbarProps } from "@mui/material";

interface ISnackbarProps extends SnackbarProps {}

const SnackbarComponent: React.FC<ISnackbarProps> = ({ ...props }) => {
    return <Snackbar {...props} />;
};

export default SnackbarComponent;

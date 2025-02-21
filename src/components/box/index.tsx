import { Box, BoxProps } from "@mui/material";

interface IBoxProps extends BoxProps {
    children: React.ReactNode;
}

const BoxComponent: React.FC<IBoxProps> = ({ children, ...props }) => {
    return <Box {...props}>{children}</Box>;
};

export default BoxComponent;

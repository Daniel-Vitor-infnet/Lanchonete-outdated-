import { Button, ButtonProps, styled } from "@mui/material";

interface IButtonProps extends ButtonProps {
    children: React.ReactNode;
    customColor?: string;
    hoverColor?: string;
    activeColor?: string;
    textColor?: string;
    padding?: string;
    fontSize?: string;
    borderRadius?: string;
    borderColor?: string;
    borderWidth?: string;
    hasBorder?: boolean;
    shadow?: string;
    transition?: string;
}

const CustomButton = styled(Button)(
    ({
        customColor = "#EBB14C",
        hoverColor = "#DD9250",
        activeColor = "#EC8C38",
        textColor = "#000000",
        padding = "8px 16px",
        fontSize = "14px",
        borderRadius = "8px",
        borderColor = "transparent",
        borderWidth = "0px",
        hasBorder = false,
        shadow = "0px 4px 8px rgba(0, 0, 0, 0.1)",
        transition = "background-color 0.3s ease, transform 0.2s ease",
    }: IButtonProps) => ({
        backgroundColor: customColor,
        color: textColor,
        fontWeight: "bold",
        textTransform: "none",
        borderRadius,
        padding,
        fontSize,
        boxShadow: shadow,
        transition,
        border: hasBorder ? `${borderWidth} solid ${borderColor}` : "none",

        "&:hover": {
            backgroundColor: hoverColor,
            transform: "scale(1.05)",
        },
        "&:active": {
            backgroundColor: activeColor,
            transform: "scale(0.95)",
        },
        "&:disabled": {
            backgroundColor: "#FFF7E0",
            color: "#BDBDBD",
        },
    })
);

const ButtonComponent: React.FC<IButtonProps> = ({ children, ...props }) => {
    return <CustomButton {...props}>{children}</CustomButton>;
};

export default ButtonComponent;

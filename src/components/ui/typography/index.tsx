import { Typography, TypographyProps } from "@mui/material";
import React from "react";
import { LinkProps } from "react-router-dom";

interface ITypographyProps extends TypographyProps {
    children: React.ReactNode;
    component?: React.ElementType;
    to?: LinkProps["to"]; // Perm]te a propriedade "to" de Link (teste)
}

const TypographyComponent: React.FC<ITypographyProps> = ({ children, ...props }) => {
    return <Typography {...props}>{children}</Typography>;
};

export default TypographyComponent;

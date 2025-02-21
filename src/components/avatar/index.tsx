import { Avatar, AvatarProps } from "@mui/material";

interface IAvatarProps extends AvatarProps {
    src: string;
    alt?: string;
}

const AvatarComponent: React.FC<IAvatarProps> = ({ src, alt, ...props }) => {
    return <Avatar src={src} alt={alt} {...props} />;
};

export default AvatarComponent;

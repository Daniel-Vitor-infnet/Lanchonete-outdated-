import { Checkbox, CheckboxProps } from "@mui/material";

interface ICheckboxProps extends CheckboxProps {
    label?: string;
}

const CheckboxComponent: React.FC<ICheckboxProps> = ({ label, ...props }) => {
    return (
        <div>
            <Checkbox {...props} />
            {label && <span>{label}</span>}
        </div>
    );
};

export default CheckboxComponent;

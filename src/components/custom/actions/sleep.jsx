import { DateTimePicker, Grid2, TextField } from "../../index";
import { useAppContext } from "../../../Context";
import { handleInputChange } from "../../../utils/function/handleInputChange";
import { adjustDateTimeForTimezone } from "../../../utils/function"
import { useEffect } from "react";

const Sleep = ({ data, setData }) => {
    useEffect(() => {
        setData({ ...data, 'action_type': 1 });
    }, []);


    const { translate } = useAppContext();

    return (
        <Grid2 container spacing={2}>
            <Grid2 item size={{ xs: 12 }}>
                <DateTimePicker
                    name="start_date"
                    value={data?.start_date ? adjustDateTimeForTimezone(data?.start_date) : null}
                    label={translate('data-hour-start')}
                    ampm={false}
                    format="DD/MM/YYYY HH:mm"
                    fullWidth={true}
                    onChange={(value) => {
                        handleInputChange('start_date', new Date(value.toString()), data, setData);
                    }}
    
                />
            </Grid2>
            <Grid2 item size={{ xs: 12 }}>
                <DateTimePicker
                    name="end_date"
                    value={data?.end_date ? adjustDateTimeForTimezone(data?.end_date) : null}
                    label={translate('data-hour-end')}
                    ampm={false}
                    format="DD/MM/YYYY HH:mm"
                    fullWidth={true}
                    onChange={(value) => {
                        handleInputChange('end_date', new Date(value.toString()), data, setData);
                    }}
    
                />
            </Grid2>
            <Grid2 item size={{ xs: 12 }}>
                <TextField
                    name="observation" 
                    value={data?.observation ? data.observation: ""}
                    label={translate("observation")}
                    onChange={(event) => { handleInputChange('observation', event.target.value, data, setData) }}
                    multiline={true}
                    rows={6}
                    fullWidth={true}
                />
            </Grid2>
        </Grid2>
    );
    

}

export default Sleep;

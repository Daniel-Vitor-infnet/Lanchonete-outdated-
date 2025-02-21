import { DateTimePicker, Grid, TextField, Button } from "../../index";
import { useAppContext } from "../../../Context";
import { handleInputChange } from "../../../utils/function/handleInputChange";
import { adjustDateTimeForTimezone, selectItem } from "../../../utils/function"
import { useEffect } from "react";

const Diaper = ({ data, setData }) => {
  useEffect(() => {
    setData({ ...data, 'action_type': 3 });
  }, []);





  const { translate } = useAppContext();
  return (

    <Grid container={true} spacing={2}>
      <Grid item={true} size={{ xs: 12 }}>
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
      </Grid>
      <Grid item={true} size={{ xs: 12 }}>
        <Button color={data.type === 1 ? "secondary" : "primary"} onClick={() => { selectItem(1, "type", data, setData) }}>{translate("diaper-wet")}</Button>
        <Button color={data.type === 2 ? "secondary" : "primary"} onClick={() => { selectItem(2, "type", data, setData) }}>{translate("diaper-dirty")}</Button>
        <Button color={data.type === 3 ? "secondary" : "primary"} onClick={() => { selectItem(3, "type", data, setData) }}>{translate("diaper-both")}</Button>
        <Button color={data.type === 4 ? "secondary" : "primary"} onClick={() => { selectItem(4, "type", data, setData) }}>{translate("diaper-clean")}</Button>
      </Grid>
      <Grid item={true} size={{ xs: 12 }}>
        <TextField
          value={data?.observation ? data.observation : ""}
          label={translate("observation")}
          onChange={(event) =>
            handleInputChange('observation', event.target.value, data, setData)
          }
          name="observation"
          rows={6}
          fullWidth={true}
          multiline={true}
        />
      </Grid>
    </Grid>
  );
};

export default Diaper;

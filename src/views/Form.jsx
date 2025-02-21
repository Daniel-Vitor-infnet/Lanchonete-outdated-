import { useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../Context";
import { Button, Diaper, Eat, Sleep, Grid, AppBar } from "../components";
import { useEffect, useState } from "react";
import { getTitle, getUser, validateFields } from "../utils/function";
// import { save, get, update, drop } from "../services/database";
import { save, get, update, drop } from "../services/supabase";


const Form = () => {
  const { translate } = useAppContext();
  const navigate = useNavigate();

  const params = useParams();
  const actionType = params.type;
  const id = params.id;

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  // console.log(data);

  const getForm = (actionType) => {
    switch (actionType) {
      case "1":
        return <Sleep data={data} setData={setData} translate={translate} />;
      case "2":
        return <Eat data={data} setData={setData} translate={translate} />;
      case "3":
        return <Diaper data={data} setData={setData} translate={translate} />;
      default:
        return <Eat data={data} setData={setData} translate={translate} />;
    }
  };

  const loadData = async (id) => {

    if (id) {
      const result = await get(id);
      setData(result);
    }
  };




  useEffect(() => {
    if (params && params.id) {
      loadData(params.id);
    }
  }, []);

  return (
    <>
      <AppBar
        title={translate(getTitle(actionType))}
        id={id}
        _delete={() => {
          const _confirm = confirm("Deseja mesmo deletar este item?");
          if (_confirm) {
            drop(id);
            console.log("Item Deletado"); //Trocar para Alert
            navigate("/");
          } else {
            console.log("Ação cancelada"); //Trocar para Alert
          }
        }}
      />

      <Grid container={true} spacing={2} sx={{ marginTop: "1em", padding: "1em", height: 'calc(100vh - 72px)' }}>
        <Grid item={true} size={{ xs: 12 }}>
          {getForm(actionType)}
          <Button
            Loading={loading}
            type="submit"
            fullWidth
            variant="contained"
            onClick={async () => {
              try {
                const fields = validateFields();
                if (fields.length === 0) {
                  if (id) {
                    await update(data, id);
                  } else {
                    // data.user.id = getUser().id;
                    await save(data);
                  }
                  console.log(`Item ${id ? "editado" : "criado"} com sucesso!!`);
                  setTimeout(() => {
                    navigate("/");
                  }, 3000);
                } else {
                  console.log(`Os campos ${fields.join(", ")} são obrigatórios`);
                }
              } catch (err) {
                console.log(`Erro ao ${id ? "editar" : "criar"} item: ` + err);
              }
            }}



            sx={{ mt: 3, mb: 2 }}
          >
            {translate('save')}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Form;

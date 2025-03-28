import { Grid2, RadioGroup, FormControlLabel, Radio, Typography } from '@/libs/mui';
import cardsCardapioDataJson from "@/utils/cardsCardapioTemp.json";

interface OpcionaisItensProps {
  opcionais: any[];
  etapaAtual: number;
  setEtapaAtual: (val: number) => void;
  respostas: any[];
  setRespostas: (respostas: any[]) => void;
}

const FormComplementos: React.FC<OpcionaisItensProps> = ({
  opcionais,
  etapaAtual,
  setEtapaAtual,
  respostas,
  setRespostas,
}) => {

  const opcional = cardsCardapioDataJson.filter((cat: any) => opcionais.includes(cat.id));
  const currentGroup = opcional[etapaAtual] || { image: '', title: '', items: [] };

  const opcoes = [
    { default: true, title: "Não obrigado, não desejo esse opcional" },
    ...currentGroup.items
  ];

  const handleChange = (selectedValue: string) => {
    let selectedOption;
    if (selectedValue === "default") {
      selectedOption = { title: "Não obrigado, não desejo esse opcional", id: null };
    } else {
      selectedOption = currentGroup.items.find((item: any) => String(item.id) === selectedValue);
    }
    const novasRespostas = [...respostas];
    novasRespostas[etapaAtual] = selectedOption || null;
    setRespostas(novasRespostas);
  };

  const selectedValue = respostas[etapaAtual]
    ? (respostas[etapaAtual].id === null ? "default" : String(respostas[etapaAtual].id))
    : '';

  return (
    <Grid2 container spacing={2} direction="column" alignItems="center">
      <Grid2>
        <img src={currentGroup.image} alt={currentGroup.title} style={{ width: 150 }} />
      </Grid2>

      <Grid2>
        <Typography variant="h6">
          Opcional: {currentGroup.title} (Etapa {etapaAtual + 1} de {opcional.length})
        </Typography>
      </Grid2>

      <Grid2>
        <RadioGroup
          value={selectedValue}
          onChange={(e) => handleChange(e.target.value)}
        >
          {opcoes.map((option: any, idx: number) => (
            <FormControlLabel
              key={idx}
              value={option.default ? "default" : String(option.id)}
              control={<Radio />}
              label={option.title}
            />
          ))}
        </RadioGroup>
      </Grid2>
    </Grid2>
  );
};

export default FormComplementos;
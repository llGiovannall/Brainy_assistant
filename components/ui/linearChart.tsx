import { LineChart } from '@mui/x-charts/LineChart';


type GridProps = {
  secoes: {
  introducao: number;
  desenvolvimento_1: number;
    desenvolvimento_2: number;
    conclusao: number;
   
  };
};


export default function DifferentLength({ secoes }: GridProps) {

  
  return (
    <LineChart
      height={200}
      margin={{ bottom: 10 }}
      xAxis={[{ data: ["introducao", "desenvolvimento_1", "desenvolvimento_2", "conclusao",] }]}
      yAxis={[
  {
    min: 0,
    max: 100,
  },
]}
      series={[
        {
      
          data: [
            secoes.introducao,
            secoes.desenvolvimento_1,
             secoes.desenvolvimento_2,
              secoes.conclusao,
            
          ],
        },
      ]}
    
     sx={{
    '& .MuiChartsAxis-tickLabel': {
      fill: '#ffffff', // cor dos números dos eixos
    },
    '& .MuiChartsAxis-line': {
      stroke: '#ffffff', // cor da linha do eixo
    },
    '& .MuiChartsAxis-tick': {
      stroke: '#ffffff', // cor dos tracinhos do eixo
    },
  }}
    />
  );
}
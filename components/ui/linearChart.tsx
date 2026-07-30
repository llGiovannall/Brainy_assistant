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
      margin={{ bottom: 30, left: 40, right: 40 }}
      xAxis={[{ data: ["introducao", "D1", "D2", "conclusao",],
     scaleType: "point",
      tickLabelStyle: {
      fontSize: 9,
    },

      }]}
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
    fill: '#ffffff',
  },
  '& .MuiChartsAxis-tickLabel tspan': {
    fill: '#ffffff',
  },
  '& .MuiChartsAxis-line': {
    stroke: '#ffffff',
  },
  '& .MuiChartsAxis-tick': {
    stroke: '#ffffff',
  },}} />
  );
}
import { RadarChart } from '@mui/x-charts/RadarChart';

// Data from https://ourworldindata.org/emissions-by-fuel

function valueFormatter(v: number | null) {
  if (v === null) {
    return 'NaN';
  }
  return `${v.toLocaleString()}t CO2eq/pers`;
}

 type RadarProps = {
  competencias: {
    competencia_1: number;
    competencia_2: number;
    competencia_3: number;
    competencia_4: number;
    competencia_5: number;
  };
};

export default function MultiSeriesRadar({ competencias }: RadarProps) {
 

  return (
    <RadarChart
      height={600}
      width={1000}
      sx={{
        '& .MuiRadar-metricLabel': {
          fill: '#ffffff',
          fontSize: 11,
        },


        '& .MuiChartsAxis-tickLabel': {
          fill: '#ffffff',
        },

        '& .MuiChartsLegend-label': {
          fill: '#ffffff',
        },
        // linhas do grid (os anéis/polígonos do radar)
        '& .MuiChartsGrid-line': {
          stroke: '#ffffff',
        },
        '& .MuiRadar-grid': {
          stroke: '#ffffff',
        },
        // eixos que saem do centro até cada métrica
        '& .MuiChartsAxis-line': {
          stroke: '#ffffff',
        },
        '& line': {
          stroke: '#ffffff',
        },
        '& path': {
          stroke: '#ffffff',
        },

        '& .MuiChartsAxis-tickLabel tspan': {
          fill: '#ffffff',
        },
        '& text': {
          fill: '#ffffff',
        },
        '& .MuiChartsLegend-series text': {
          fill: '#ffffff',
        },
      }}
      series={[
        {
         
          data: [
            competencias.competencia_1,
            competencias.competencia_2,
            competencias.competencia_3,
            competencias.competencia_4,
            competencias.competencia_5,
          ],
        },
      ]}
        radar={{
    max: 200,
    metrics: [
      "Competência I",
      "Competência II",
      "Competência III",
      "Competência IV",
      "Competência V",
    ],
  }}


  
    />
  );
}

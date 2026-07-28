import { ProgressBar, Label } from '@heroui/react';
export function Basic({notaTotal}: {notaTotal: number}) {
  console.log("notaTotal:", notaTotal);
  return (
    
    <ProgressBar aria-label="nota_competencia" 
	className="w-64" 
	value={notaTotal}
	 minValue={0}
      maxValue={200}>
      <Label>Competência 1</Label>
     <span>{notaTotal}/200</span>
    <ProgressBar.Track className="h-2 w-full bg-gray-600 rounded-full overflow-hidden">
  <ProgressBar.Fill className="h-full bg-indigo-500 transition-all" />
</ProgressBar.Track>
    </ProgressBar>

    
  );
}
function gaussianNoise(std=1){let u=0,v=0;while(u===0)u=Math.random();while(v===0)v=Math.random();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v)*std}

export class MotorSimulator{
  constructor(target=65){this.target=target;this.manualValue=target;this.mode='auto';this.fatigue=0}
  setTarget(target){this.target=Number(target);this.manualValue=Number(target)}
  setManual(value){this.mode='manual';this.manualValue=Number(value)}
  resetAuto(){this.mode='auto'}
  sample({dualTask=false,cognitiveLoad=2}={}){const interference=dualTask?Math.max(0,(cognitiveLoad-1)*1.9):0;this.fatigue=Math.min(3.5,this.fatigue+0.004);const noise=gaussianNoise(dualTask?2.3:1.1);const baseline=this.mode==='manual'?this.manualValue:this.target;return Math.max(20,baseline-interference-this.fatigue+noise)}
}

export function generateCapacityPoints(){const points=[];for(let motorLoad=1;motorLoad<=5;motorLoad+=1){for(let cognitiveLoad=1;cognitiveLoad<=5;cognitiveLoad+=1){const load=(motorLoad*.9)+(cognitiveLoad*1.05);const threshold=5.1;const excess=Math.max(0,load-threshold);const motorDtc=Math.max(0,(cognitiveLoad-1)*2.2+excess*3+gaussianNoise(1.1));const cognitiveDtc=Math.max(0,(motorLoad-1)*1.8+excess*3.3+gaussianNoise(1.2));const combinedInterference=Math.sqrt((motorDtc**2+cognitiveDtc**2)/2);points.push({motorLoad,cognitiveLoad,motorDtc,cognitiveDtc,combinedInterference})}}return points}

export function historicalSessions(){return[
{date:'2026-06-16',motorDtc:16.8,cognitiveDtc:18.4,reliability:.78},
{date:'2026-06-30',motorDtc:15.1,cognitiveDtc:17.2,reliability:.81},
{date:'2026-07-14',motorDtc:13.6,cognitiveDtc:14.8,reliability:.84},
{date:'2026-07-28',motorDtc:11.9,cognitiveDtc:13.1,reliability:.86},
{date:'2026-08-08',motorDtc:10.8,cognitiveDtc:11.6,reliability:.89}
]}

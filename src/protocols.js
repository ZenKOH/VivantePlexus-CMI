export const cognitiveParadigms=[
{id:'go-no-go',name:'Go / No-Go',code:'GNG',domain:'Response inhibition',description:'Respond to directional targets while withholding responses to infrequent stop cues.',parameters:['stimulus interval','No-Go ratio','response window']},
{id:'stroop',name:'Stroop-like Interference',code:'STR',domain:'Interference control',description:'Resolve conflict between stimulus meaning and response rule under controlled timing.',parameters:['congruency ratio','response window','presentation interval']},
{id:'working-memory',name:'Working Memory',code:'WM',domain:'Updating / maintenance',description:'Maintain and update a short response sequence while preserving motor output.',parameters:['memory load','stimulus interval','sequence length']},
{id:'task-switch',name:'Task Switching',code:'TS',domain:'Cognitive flexibility',description:'Alternate between response rules with switch probability controlled by the protocol.',parameters:['switch probability','cue interval','response window']},
{id:'visual-search',name:'Visual Search',code:'VS',domain:'Selective attention',description:'Find and classify targets among distractors while motor demand is systematically varied.',parameters:['distractor density','target prevalence','display time']},
{id:'choice-reaction',name:'Choice Reaction',code:'CRT',domain:'Processing speed',description:'Make fast rule-based responses to simple stimuli with response-time precision retained.',parameters:['choice count','response window','inter-stimulus interval']}
];

export const assessmentProtocols=[
{id:'cmi-standard-v1',name:'CMI Standard v1',version:'1.0.0',paradigm:'go-no-go',difficulty:2,phaseDurationSec:20,phases:[{id:'motor',label:'Motor baseline',detail:'Motor-only performance'},{id:'cognitive',label:'Cognitive baseline',detail:'Cognitive-only performance'},{id:'dual',label:'Dual task',detail:'Simultaneous cognitive + motor'}]},
{id:'cmi-inhibition-v1',name:'Inhibition Stress Test',version:'1.0.0',paradigm:'stroop',difficulty:3,phaseDurationSec:20,phases:[{id:'motor',label:'Motor baseline',detail:'Motor-only performance'},{id:'cognitive',label:'Cognitive baseline',detail:'Conflict task only'},{id:'dual',label:'Dual task',detail:'Conflict task + motor'}]},
{id:'cmi-switch-v1',name:'Flexibility Stress Test',version:'1.0.0',paradigm:'task-switch',difficulty:3,phaseDurationSec:20,phases:[{id:'motor',label:'Motor baseline',detail:'Motor-only performance'},{id:'cognitive',label:'Cognitive baseline',detail:'Switching task only'},{id:'dual',label:'Dual task',detail:'Switching + motor'}]}
];

export function getProtocol(id){return assessmentProtocols.find(protocol=>protocol.id===id)??assessmentProtocols[0]}
export function getParadigm(id){return cognitiveParadigms.find(paradigm=>paradigm.id===id)??cognitiveParadigms[0]}

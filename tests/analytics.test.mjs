import test from 'node:test';
import assert from 'node:assert/strict';
import{mean,standardDeviation,dualTaskCost,classifyProfile,combinedInterference,estimateFrontier}from'../src/analytics.js';

test('mean and standard deviation are deterministic',()=>{assert.equal(mean([1,2,3]),2);assert.equal(Number(standardDeviation([1,2,3]).toFixed(4)),1)});
test('higher-is-better DTC is positive on deterioration',()=>assert.equal(dualTaskCost(100,80,true),20));
test('lower-is-better DTC is positive on worsening',()=>assert.equal(dualTaskCost(500,600,false),20));
test('profile classifier keeps task domains separate',()=>{assert.equal(classifyProfile(15,16),'Mutual interference');assert.equal(classifyProfile(15,3),'Motor-sensitive');assert.equal(classifyProfile(3,15),'Cognitive-sensitive');assert.equal(classifyProfile(3,4),'Low observed interference')});
test('combined interference uses positive deterioration only',()=>{assert.equal(Number(combinedInterference(10,10).toFixed(2)),10);assert.equal(Number(combinedInterference(-10,10).toFixed(2)),7.07)});
test('frontier returns first threshold crossing',()=>{const result=estimateFrontier([{motorLoad:1,cognitiveLoad:1,combinedInterference:3},{motorLoad:2,cognitiveLoad:1,combinedInterference:13}],12);assert.equal(result.status,'observed');assert.equal(result.point.motorLoad,2)});

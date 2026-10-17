'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const dir=path.resolve(__dirname,'..');
const ctx={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(dir,'data.js'),'utf8'),ctx);
const data=ctx.window.COACH_DATA;
assert.equal(data.steps.length,7,'Seven learning stages');
assert.equal(data.steps.flatMap(s=>s.quiz).length,21,'21 interactive questions');
assert.equal(data.steps.flatMap(s=>s.quiz).filter(q=>q.kind==='Concept').length,14,'14 concept questions');
assert.equal(data.steps.flatMap(s=>s.quiz).filter(q=>q.kind==='Apply').length,7,'7 application questions');
for(const [i,s] of data.steps.entries()){
 assert(s.code&&s.learn&&s.why&&s.build&&s.evidence&&s.hint,`Stage ${i+1} complete`);
 assert.equal(s.quiz.length,3,`Stage ${i+1} has three questions`);
 for(const q of s.quiz){assert.equal(q.options.length,4,'Four options');assert(q.answer>=0&&q.answer<q.options.length,'Valid answer');assert(q.why&&q.hint,'Rationale and hint')}
}
assert.equal(data.rubric.length,8);
const tot=data.rubric.reduce((n,x)=>n+x.points,0);
const teams=data.rubric.filter(x=>x.basis==='Team').reduce((n,x)=>n+x.points,0);
assert.equal(tot,10);assert.equal(teams,6);assert.equal(tot-teams,4);
assert.equal(data.tests.length,7);assert.equal(new Set(data.tests.map(t=>t.kind)).size,3);
assert(data.requirements.length>=12);
for(const file of ['index.html','styles.css','app.js','.github/workflows/deploy-pages.yml','starter/StudentGradeManagement.java'])assert(fs.existsSync(path.join(dir,file)),`Missing ${file}`);
console.log('PASS: 7 stages, 21 questions (14 concepts + 7 applied), 10-mark rubric (6 team + 4 individual), 7 tests, files present.');

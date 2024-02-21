// let name = prompt("Write Your Name");
// let roll = prompt("Write Your Roll");
// let reg = prompt("Write Your Register");
// let ban = prompt("Bangla Mark");
// let eng = prompt("English Mark");
// let s = prompt("Socail Mark");
// let ss = prompt("Socail Science");
// let reli = prompt("Religion Mark");
// let phy = prompt("Physics Mark");
// let math = prompt("Math");
/**
 *
 */

console.log(`
Name:                   ${name}
Roll No.:               ${roll}
Registration Number:    ${reg}
================================================================================
Subject:                                    
English:               Mark   ${eng}   Grade: ${getGrade(eng)}    Gpa:${getGPA(
  eng
)} 
Bangla:                Mark   ${ban}   Grade: ${getGrade(ban)}    Gpa:${getGPA(
  ban
)} 
Science:               Mark   ${s}   Grade: ${getGrade(s)}    Gpa:${getGPA(s)} 
Socail Science:        Mark   ${ss}   Grade: ${getGrade(ss)}    Gpa:${getGPA(
  ss
)} 
Religion:              Mark   ${reli}   Grade: ${getGrade(reli)}   Gpa:${getGPA(
  reli
)}  
Physics:               Mark   ${phy}   Grade: ${getGrade(phy)}    Gpa:${getGPA(
  phy
)} 
Math:                  Mark   ${math}   Grade: ${getGrade(math)}   Gpa:${getGPA(
  math
)} 
===================================================================================
Final Results ---- ${
  isPassed(ban, eng, math, s, ss, reli, phy) ? "Passed" : "Failed"
}
Final GPA -------- ${getFinalGpa(eng, ban, math, s, ss, reli, phy)}
Final Grade ------ ${getFinalGrade(eng, ban, math, s, ss, reli, phy)}

`);

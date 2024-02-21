/**
 * getGrade
 * @param {*} mark
 * @returns
 */
const getGrade = (mark) => {
  let grade;
  if (mark >= 0 && mark < 33) {
    grade = "F";
  } else if (mark >= 33 && mark < 39) {
    grade = "D";
  } else if (mark >= 40 && mark < 49) {
    grade = "C";
  } else if (mark >= 50 && mark < 59) {
    grade = "B";
  } else if (mark >= 60 && mark < 69) {
    grade = "A-";
  } else if (mark >= 70 && mark < 79) {
    grade = "A";
  } else if (mark >= 80 && mark <= 100) {
    grade = "A+";
  } else {
    grade = "Results Invalid";
  }
  return grade;
};

/**
 * Get GPA
 * @param {*} mark
 * @returns
 */
const getGPA = (mark) => {
  let gpa;
  if (mark >= 33 && mark < 39) {
    gpa = 1;
  } else if (mark >= 40 && mark < 49) {
    gpa = 2;
  } else if (mark >= 50 && mark < 59) {
    gpa = 3;
  } else if (mark >= 60 && mark < 69) {
    gpa = 3.5;
  } else if (mark >= 70 && mark < 79) {
    gpa = 4;
  } else if (mark >= 80 && mark <= 100) {
    gpa = 5;
  } else {
    gpa = "Results Invalid";
  }
  return gpa;
};

/**
 * isPassed
 * @param {*} s1
 * @param {*} s2
 * @param {*} s3
 * @param {*} s4
 * @param {*} s5
 * @param {*} s6
 * @param {*} s7
 * @returns
 */
const isPassed = (s1, s2, s3, s4, s5, s6, s7) => {
  if (
    s1 >= 33 &&
    s2 >= 33 &&
    s3 >= 33 &&
    s4 >= 33 &&
    s5 >= 33 &&
    s6 >= 33 &&
    s7 >= 33
  ) {
    return true;
  } else {
    return false;
  }
};
/**
 * getFinalGpa
 * @param {*} s1
 * @param {*} s2
 * @param {*} s3
 * @param {*} s4
 * @param {*} s5
 * @param {*} s6
 * @param {*} s7
 * @returns
 */
const getFinalGpa = (s1, s2, s3, s4, s5, s6, s7) => {
  if (
    s1 >= 33 &&
    s2 >= 33 &&
    s3 >= 33 &&
    s4 >= 33 &&
    s5 >= 33 &&
    s6 >= 33 &&
    s7 >= 33
  ) {
    let totalGpa =
      getGPA(s1) +
      getGPA(s2) +
      getGPA(s3) +
      getGPA(s4) +
      getGPA(s5) +
      getGPA(s6) +
      getGPA(s7);
    return (totalGpa / 7).toFixed(2);
  } else {
    return 0;
  }
};

const getFinalGrade = (s1, s2, s3, s4, s5, s6, s7) => {
  let finale = getFinalGpa(s1, s2, s3, s4, s5, s6, s7);

  if (finale >= 0 && finale < 1) {
    return "F";
  } else if (finale >= 1 && finale < 2) {
    return "D";
  } else if (finale >= 2 && finale < 3) {
    return "C";
  } else if (finale >= 3 && finale < 3.5) {
    return "B";
  } else if (finale >= 3.5 && finale < 4) {
    return "A-";
  } else if (finale >= 4 && finale < 5) {
    return "A";
  } else if (finale >= 5) {
    return "A+";
  } else {
    finale = "Results Invalid";
  }
  return finale;
};

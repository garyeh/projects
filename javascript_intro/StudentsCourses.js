function Student(fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.courses = [];
}

function Course(name, department, credits) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
}

Student.prototype.name = function () {
  return `${this.fname} ${this.lname}`;
};

Student.prototype.enroll = function (course) {
  if (!this.courses.includes(course)) {
    this.courses.push(course);
  }
  course.students.push(this);
};

Student.prototype.courseLoad = function () {
  let courseLoad = {};
  this.courses.forEach(function(course){
    courseLoad[course.department] = 0;
  });

  this.courses.forEach(function(course){
    courseLoad[course.department] += course.credits;
  });
  return courseLoad;
};

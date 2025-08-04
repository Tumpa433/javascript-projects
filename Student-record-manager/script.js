let students = [];


document.getElementById("student-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const roll = document.getElementById("roll").value;
  const grade = document.getElementById("grade").value;

  

  const student = {
    id: Date.now(), // unique for each student
    name,
    roll,
    grade
  };

  students.push(student);
  displayStudents();
  this.reset();
});

function displayStudents() {
  const list = document.getElementById("student-list");
  list.innerHTML = "";

  students.forEach((student) => {
    const div = document.createElement("div");
    div.className = "student";
    div.innerHTML = `
      <strong>${student.name}</strong> (Roll: ${student.roll}, Grade: ${student.grade})
      <button onclick="deleteStudent(${student.id})">Delete</button>
    `;
    list.appendChild(div);
  });
}

function deleteStudent(id) {
  students = students.filter(student => student.id !== id); // filter create a new array only  the element that match a condition
  displayStudents();
}

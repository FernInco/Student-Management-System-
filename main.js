const form = document.querySelector('#studentForm')

const studentName = document.querySelector('#studentName');
const rollNo = document.querySelector('#rollNo');
const course = document.querySelector('#course');
const studentTable = document.querySelector('#studentList');

const studentArr = []

const totalStudents = document.querySelector('#totalStudents');
const totalCourses = document.querySelector('#totalCourses');
const searchBar = document.querySelector('#searchInput');


form.addEventListener('submit',function(event) {
    event.preventDefault();

    const student = {
        name: studentName.value,
        rollNo: rollNo.value,
        course: course.value,

    }
    studentArr.push(student);


    filterStudents();

    updateStats();

    form.reset();


})

searchBar.addEventListener('input', function() {

    filterStudents();

});

function renderStudents(students) {
    studentTable.innerHTML='';
    for (const student of students) {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const rollCell = document.createElement('td');
        const courseCell = document.createElement('td');
        const actionCell = document.createElement('td');
        const deleteCell = document.createElement('button');
        nameCell.textContent = student.name;
        rollCell.textContent = student.rollNo;
        courseCell.textContent = student.course;
        deleteCell.textContent = 'Delete';

        row.appendChild(nameCell);
        row.appendChild(rollCell)
        row.appendChild(courseCell);
        actionCell.appendChild(deleteCell);
        row.appendChild(actionCell);
        studentTable.appendChild(row);


        deleteCell.addEventListener("click", function() {
            const originalIndex = studentArr.indexOf(student);
            studentArr.splice(originalIndex, 1);

            updateStats();

            filterStudents();
        })

    }
}

function filterStudents() {

const searchText = searchBar.value.toLowerCase();

const filteredStudents = studentArr.filter(student =>
    student.name.toLowerCase().includes(searchText) ||
    student.rollNo.toLowerCase().includes(searchText) ||
    student.course.toLowerCase().includes(searchText)
);
    renderStudents(filteredStudents);
}

function updateStats() {

    totalStudents.textContent = studentArr.length; 

    const courses = studentArr.map(student => student.course);
    const uniqueCourses = new Set(courses);
    totalCourses.textContent = uniqueCourses.size;

}



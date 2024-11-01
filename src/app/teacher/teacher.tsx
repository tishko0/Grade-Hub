import React, { useState } from 'react';
import './teacher.css';

const TeacherPage: React.FC = () => {
  const [assignments, setAssignments] = useState<File | null>(null);
  const [students, setStudents] = useState([
    { name: 'John Doe', homework: 'Math Homework', grade: 'A' },
    { name: 'Jane Smith', homework: 'Science Homework', grade: 'B+' },
    { name: 'Michael Jones', homework: 'History Homework', grade: 'A-' },
  ]);

  const handleAssignmentSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (assignments) {
      console.log('Assignment uploaded:', assignments.name);
      // Handle assignment upload logic here
    }
  };

  const handleAssignmentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setAssignments(event.target.files[0]);
    }
  };

  const handleGradeChange = (index: number, grade: string) => {
    const updatedStudents = [...students];
    updatedStudents[index].grade = grade;
    setStudents(updatedStudents);
  };

  return (
    <div className="teacher-page">
      <h1>Welcome, Teacher</h1>

      <section className="assignments-section">
        <h2>Create and Upload Homework Assignments</h2>
        <form onSubmit={handleAssignmentSubmit}>
          <input type="file" onChange={handleAssignmentChange} />
          <button type="submit">Upload</button>
        </form>
      </section>

      <section className="students-section">
        <h2>Students Assigned to You</h2>
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              <div>
                <strong>{student.name}</strong> - {student.homework}
              </div>
              <div>
                Grade:
                <input
                  type="text"
                  value={student.grade}
                  onChange={(e) => handleGradeChange(index, e.target.value)}
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default TeacherPage;

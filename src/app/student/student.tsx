import React, { useState } from 'react';
import './student.css';

const StudentPage: React.FC = () => {
  const [grades, setGrades] = useState([
    { subject: 'Math', grade: 'A' },
    { subject: 'Science', grade: 'B+' },
    { subject: 'History', grade: 'A-' },
  ]);

  const [homework, setHomework] = useState<File | null>(null);

  const handleHomeworkSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (homework) {
      console.log('Homework submitted:', homework.name);
      // Handle homework submission logic here
    }
  };

  const handleHomeworkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setHomework(event.target.files[0]);
    }
  };

  return (
    <div className="student-page">
      <h1>Welcome, Student</h1>

      <section className="grades-section">
        <h2>Your Grades</h2>
        <ul>
          {grades.map((grade, index) => (
            <li key={index}>
              {grade.subject}: {grade.grade}
            </li>
          ))}
        </ul>
      </section>

      <section className="homework-section">
        <h2>Submit Homework</h2>
        <form onSubmit={handleHomeworkSubmit}>
          <input type="file" onChange={handleHomeworkChange} />
          <button type="submit">Submit</button>
        </form>
      </section>

      <section className="assignments-section">
        <h2>Homework Assignments</h2>
        <ul>
          <li>
            <a href="/assignments/math-homework.pdf" download>
              Math Homework
            </a>
          </li>
          <li>
            <a href="/assignments/science-homework.pdf" download>
              Science Homework
            </a>
          </li>
          <li>
            <a href="/assignments/history-homework.pdf" download>
              History Homework
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default StudentPage;

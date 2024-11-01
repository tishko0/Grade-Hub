import Home from './home/home';
import Login from './home/login';
import RegisterPage from './home/register';
import StudentPage from './student/student';
import TeacherPage from './teacher/teacher';

export const routes = [
  {
	path: "/",
	element: <Home />,
  },
  {
	path: "login",
	element: <Login />
  },
  {
    path: "/student",
    element: <StudentPage />,
  },
  {
    path: "/teacher",
    element: <TeacherPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  }
];

export default routes;

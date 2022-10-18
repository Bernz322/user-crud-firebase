import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AddUser, EditUser, ErrorPage, UsersList } from './pages';
import 'react-toastify/dist/ReactToastify.min.css';
import 'font-awesome/css/font-awesome.css';
import './styles/app.scss';
import { Navbar } from './components';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<UsersList />} path="/" />
        <Route element={<EditUser />} path="/edit-user/:id" />
        <Route element={<AddUser />} path="/add-user" />
        <Route element={<ErrorPage />} path="*" />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        closeButton={false}
        newestOnTop={true}
      />
    </>
  );
};
export default App;
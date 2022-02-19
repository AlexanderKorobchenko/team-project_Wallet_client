import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from '../Loader/Loader';
import { usersOperations, usersSelectors } from '../../redux/users';
import { MdEmail, MdLock } from 'react-icons/md';

import s from './loginForm.module.css';

// eslint-disable-next-line no-useless-escape
const emailRegexp = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector(usersSelectors.getIsFetchingCurrent);
  const isError = useSelector(usersSelectors.getError);
  const handleOnClickToRegister = () => {
    navigate('/register');
  };

  const validationSchema = yup.object().shape({
    email: yup.string().matches(emailRegexp, 'Введите корректный email').required('Введите email'),
    password: yup.string().min(6).max(12).required('Введите пароль'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const { email, password } = values;
      if (isError) {
        toast.error('Please, enter correct email and/or password');
        return;
      } else {
        dispatch(usersOperations.logIn({ email, password }));
        resetForm();
      }
    },
  });

  const { values, errors, touched, isValid, dirty, handleSubmit, handleChange, handleBlur } =
    formik;

  // console.log('isValid && !dirty: ', isValid && !dirty);

  return (
    <>
      {isLoading && <Loader />}

      <form className={'registerForm'} onSubmit={handleSubmit}>
        <label htmlFor={'email'} className={s.field}>
          <MdEmail className={s.icon} />
          <input
            id={'email'}
            type={'email'}
            name={'email'}
            placeholder={'E-mail'}
            className={s.input}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
        </label>
        {touched.email && errors.email && <p className={s.notification}>{errors.email}</p>}

        <label htmlFor={'password'} className={s.field}>
          <MdLock className={s.icon} />
          <input
            id={'password'}
            type={'password'}
            name={'password'}
            placeholder={'Пароль'}
            className={s.input}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
        </label>
        {touched.password && errors.password && <p className={s.notification}>{errors.password}</p>}

        <button
          disable={(isValid && !dirty).toString()}
          type={'submit'}
          className={[s.logInBtn, s.btn].join(' ')}
        >
          Вход
        </button>

        <button
          onClick={handleOnClickToRegister}
          type="button"
          className={s.registerBtn + ' ' + s.btn}
        >
          Регистрация
        </button>
      </form>

      <ToastContainer autoClose={3000} position="top-center" theme="colored" />
    </>
  );
}

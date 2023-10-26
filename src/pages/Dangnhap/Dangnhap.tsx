import React, { useState } from 'react'; // Import useState
import { useNavigate } from 'react-router-dom';
import { useForm, FieldError } from 'react-hook-form';
import { ValidationError } from './ValidationError';
import { login } from '../../components/Account/AuthService'; // Import AuthService

type LoginData = {
  username: string;
  password: string;
};

export function LoginPage() {
  const fieldStyle = 'flex flex-col mb-2';
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string | null>(null); // Thêm state để lưu thông báo lỗi đăng nhập

  // Xử lý đăng nhập
  const onSubmit = async (data: LoginData) => {
    try {
      const success = await login(data.username, data.password);
      if (success) {
        navigate('/home');
      } else {
        setLoginError('Sai tài khoản hoặc mật khẩu'); // Sử dụng state để lưu thông báo lỗi
      }
    } catch (error) {
      console.error('Lỗi đăng nhập:', error);
    }
  };

  function getEditorStyle(fieldError: FieldError | undefined) {
    return fieldError ? 'border-red-500' : '';
  }

  return (
    <div className="flex flex-col py-10 max-w-md mx-auto">
      <h2 className="text-3xl font-bold underline mb-3">Đăng nhập</h2>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className={fieldStyle}>
          <label htmlFor="username">Tên đăng nhập</label>
          <input
            type="text"
            id="username"
            {...register('username', {
              required: 'Bạn phải nhập tên đăng nhập',
            })}
            className={getEditorStyle(errors.username)}
          />
          <ValidationError fieldError={errors.username} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="password">Mật khẩu</label>
          <input
            type="password"
            id="password"
            {...register('password', {
              required: 'Bạn phải nhập mật khẩu',
            })}
            className={getEditorStyle(errors.password)}
          />
          <ValidationError fieldError={errors.password} />
        </div>
        <div>
          {loginError && <div className="text-red-500 mb-4">{loginError}</div>}{' '}
          {/* Hiển thị thông báo lỗi */}
          <button type="submit" className="mt-2 h-10 px-6 font-semibold bg-black text-white">
            Đăng nhập
          </button>
        </div>
      </form>
    </div>
  );
}

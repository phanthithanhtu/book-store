import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../components/Account/AuthService';
export function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    const { username, password } = formData;
    const success = login(username, password);
    if (success) {
      setIsLoggedIn(true);
      setError(null);
      navigate('/home'); // Chuyển hướng đến trang /home
    } else {
      setError('Sai tài khoản hoặc mật khẩu');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl font-bold underline mb-3">Đăng nhập</h2>
      <form className="max-w-md w-full" noValidate>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">
            Tên đăng nhập
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Mật khẩu
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div>
          <button
            type="button"
            onClick={handleLogin}
            className="w-full h-10 px-6 font-semibold bg-black text-white rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

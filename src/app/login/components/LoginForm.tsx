'use client';
import { useState } from 'react';
import Input from '../../components/Input';
import { FaUnlockAlt, FaUser } from 'react-icons/fa';
import Button from '../../components/Button';
import { useUserStore } from '@/lib/store';
import { useMutation } from '@tanstack/react-query';
import api from '@/lib/axios';
import { useRouter } from 'next/navigation';
import { useAuthRedirect } from '../../hooks/useAuthRedirect';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [stayLogged, setStayLogged] = useState(false);
  const { login } = useUserStore();
  const navigate = useRouter();

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await api.post('/innova-dinamica/login', {
        username,
        password,
      });
      return res.data;
    },
    onSuccess: (data) => {
      if (data.status === 1) {
        login(data.dados_usuario, data.token_de_acesso);
        if (stayLogged) {
          localStorage.setItem('token', data.token_de_acesso);
          localStorage.setItem('user', data.dados_usuario.nome_usuario);
        }
        toast.success('Login realizado com sucesso!', {
          autoClose: 3000,
        });
        navigate.push('/produtos');
      } else {
        toast.error(data.message);
      }
    },
  });

  useAuthRedirect();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <form
      className="relative z-10 flex flex-col items-center justify-center min-h-screen max-w-xl mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="w-full text-center">
        <h1 className="text-[#80bc04] font-bold text-3xl mb-8">
          Bem-vindo a Innovation Brindes
        </h1>

        <div className="bg-[#80bc04] p-6 rounded-2xl py-24">
          <div className="max-w-[60%] mx-auto">
            <Input
              text={'Usuário'}
              icon={<FaUser className="text-gray-600" />}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Input
              text={'Senha'}
              type="password"
              icon={<FaUnlockAlt className="text-gray-600" />}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="flex justify-between items-center w-[90%] mx-auto">
              <div>
                <input
                  type="checkbox"
                  id="scales"
                  name="scales"
                  checked={stayLogged}
                  onChange={() => setStayLogged((oldState) => !oldState)}
                />
                <label htmlFor="scales" className="ms-2">
                  <small>Manter logado</small>
                </label>
              </div>
              <small>Esqueceu a password?</small>
            </div>
            <Button
              text={'Login'}
              className="mt-8"
              type="submit"
              loading={mutation.isPending}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;

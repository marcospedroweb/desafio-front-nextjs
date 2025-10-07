import type { Metadata } from 'next';
import LoginForm from './components/LoginForm';

export const metadata: Metadata = {
  title: 'Login | Innovation Brindes',
  description: 'Acesse sua conta para gerenciar produtos e pedidos.',
};

export default function LoginPage() {
  return (
    <main
      className="w-full h-screen bg-cover bg-no-repeat relative"
      style={{
        backgroundImage: "url('/assets/login_banner.jpg')",
        backgroundPosition: 'center',
      }}
    >
      <LoginForm />
    </main>
  );
}

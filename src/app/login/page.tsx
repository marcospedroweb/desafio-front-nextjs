import type { Metadata } from 'next';
import LoginForm from './components/LoginForm';

export const metadata: Metadata = {
  title: 'Login | Innovation Brindes',
  description: 'Acesse sua conta para acessar os produtos',
};

export default function LoginPage() {
  return (
    <main
      className="w-full min-h-screen bg-cover bg-no-repeat relative 
        flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/login_banner.jpg')",
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <LoginForm />
      </div>
    </main>
  );
}

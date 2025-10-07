'use client';
import { useUserStore, type User } from '@/lib/store';
import { formatDate } from '@/utils/formatDate';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaPhone } from 'react-icons/fa6';
import { MdEmail, MdLogout } from 'react-icons/md';
import { useAuthRedirect } from '../hooks/useAuthRedirect';
import { useRouter } from 'next/navigation';

const Header = () => {
  const user: User | string | null = useUserStore((state) => state.user);
  const loadFromStorage = useUserStore((state) => state.loadFromStorage);
  const logout = useUserStore((state) => state.logout);
  const [, setLoading] = useState(true);
  const navigate = useRouter();

  useAuthRedirect();

  useEffect(() => {
    loadFromStorage();
    setLoading(false);
  }, [loadFromStorage]);

  const userName =
    typeof user === 'string'
      ? user
      : (user as unknown as User)?.nome_usuario ?? '';

  return (
    <header className="bg-[#8EC605] py-2 mt-8">
      <div className="max-w-10/12 flex flex-col md:flex-row justify-between items-center mx-auto">
        <h1 className="sr-only">Innovation Brindes</h1>
        <Image
          src={'/assets/logo_innovation.webp'}
          width={151}
          height={66}
          alt="logo Innovation Brindes"
        />
        <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-6">
          <div className="relative inline-block">
            <MdEmail className="text-white text-3xl" />
            <span className="absolute -top-1 -right-4 flex items-center justify-center w-5 h-5 text-xs font-bold text-[#8EC605] bg-white rounded-full shadow-md">
              {user ? '11' : '0'}
            </span>
          </div>

          <div className="relative inline-block">
            <FaPhone className="text-white text-2xl" />
            <span className="absolute -top-1 -right-4 flex items-center justify-center w-5 h-5 text-xs font-bold text-[#8EC605] bg-white rounded-full shadow-md">
              {user ? '11' : '0'}
            </span>
          </div>

          <div className="flex justify-start items-center gap-4">
            <div className="border-6 border-white rounded-full">
              {user ? (
                <Image
                  src="/assets/user_photo.webp"
                  width={48}
                  height={48}
                  className="rounded-full"
                  alt="photo do usuario"
                />
              ) : (
                <div className="w-12 h-12 bg-white/30 rounded-full animate-pulse" />
              )}
            </div>
            <div className="flex flex-col text-white">
              {user ? (
                <>
                  <p className="montserrat">{userName}</p>
                  <p className="text-[12px]">{formatDate(new Date())}</p>
                </>
              ) : (
                <>
                  <div className="w-24 h-4 bg-white/30 rounded animate-pulse mb-1" />
                  <div className="w-16 h-3 bg-white/30 rounded animate-pulse" />
                </>
              )}
            </div>
            <div
              onClick={() => {
                logout();
                navigate.push('/login');
              }}
            >
              <MdLogout className="text-white text-2xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

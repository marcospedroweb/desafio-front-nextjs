'use client';
import { useUserStore } from '@/lib/store';
import { formatDate } from '@/utils/formatDate';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Header = () => {
  const user = useUserStore((state) => state.user);
  const loadFromStorage = useUserStore((state) => state.loadFromStorage);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFromStorage();
    setLoading(false);
  }, [loadFromStorage]);

  if (loading) return null;

  if (!user) return null;

  if (user)
    return (
      <header className="bg-[#8EC605] py-2 mt-8">
        <div className="max-w-8/12 flex justify-between items-center mx-auto">
          <h1 className="sr-only">Innovation Brindes</h1>
          <Image
            src={'/assets/logo_innovation.png'}
            width={151}
            height={66}
            alt="logo Innovation Brindes"
          />
          <div className="flex justify-center items-center gap-6">
            <div className="relative inline-block">
              <MdEmail className="text-white text-3xl" />
              <span className="absolute -top-1 -right-4 flex items-center justify-center w-5 h-5 text-xs font-bold text-[#8EC605] bg-white rounded-full shadow-md">
                11
              </span>
            </div>

            <div className="relative inline-block">
              <FaPhone className="text-white text-2xl" />
              <span className="absolute -top-1 -right-4 flex items-center justify-center w-5 h-5 text-xs font-bold text-[#8EC605] bg-white rounded-full shadow-md">
                11
              </span>
            </div>

            <div className="flex justify-start items-center gap-4">
              <div className="border-6 border-white rounded-full">
                <Image
                  src="/assets/user_photo.jpg"
                  width={48}
                  height={48}
                  className="rounded-full"
                  alt="photo do usuario"
                />
              </div>
              <div className="flex flex-col text-white">
                <p className="montserrat">{user}</p>
                <p className="text-[12px]">{formatDate(new Date())}</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
};

export default Header;

import { useState } from "react";
import logo from '../img/logo-coral.svg';
import earth from '../img/earth.png';
import arrow from '../img/arrow.png';

const Footer = () => {

  const [footerMenu, handleFooterMenu] = useState([
    'Udemy for Business', '채용 정보', '이용 약관',
    'Udemy에서 가르치기', '블로그', '개인정보 보호 정책',
    '앱 다운로드', '도움말 및 지원', '사이트맵',
    '회사 소개', '제휴', '추천 강좌', '연락처'
  ]);

  const [currentLanguage, changeLanguage] = useState('한국어');

  const [isLanguageModalOn, handleLanguageModal] = useState(false);

  return (
    <footer className='border-t border-gray-300 h-80 pl-6 pt-8 relative mt-10'>
      <article className='flex flex-wrap'>
        {footerMenu.map(item => <p className='w-60 font-normal text-sm mb-2 cursor-pointer hover:text-blue-600'>{item}</p>)}
      </article>
      <img className='h-8 mt-14' src={logo} alt='' />
      <div className='border border-black rounded w-52 h-12 absolute top-8 right-8 flex items-center justify-evenly cursor-pointer' onClick={() => handleLanguageModal(!isLanguageModalOn)}>
        <img className='w-4' src={earth} alt='' />
        <p className='w-32 flex justify-center items-center'>{currentLanguage}</p>
        <img className='w-3 rotate-90' src={arrow} alt='' />
      </div>
      <p className='text-xs text-gray-500 absolute bottom-14 right-8'>© 2021 Udemy, Inc.</p>
    </footer>
  );
}

export default Footer;

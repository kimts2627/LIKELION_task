import { useState } from "react";
import logo from '../img/logo-coral.svg';

const Footer = () => {

  const [footerMenu, handleFooterMenu] = useState([
    'Udemy for Business', '채용 정보', '이용 약관',
    'Udemy에서 가르치기', '블로그', '개인정보 보호 정책',
    '앱 다운로드', '도움말 및 지원', '사이트맵',
    '회사 소개', '제휴', '추천 강좌', '연락처'
  ]);

  return (
    <footer className='border-t border-gray-300 h-80 pl-6 pt-8'>
      <article className='flex flex-wrap'>
        {footerMenu.map(item => <p className=''>{item}</p>)}
      </article>
      <img className='h-10' src={logo} alt='' />
      <div className='border border-black rounded w-52 h-12'></div>
      <p>© 2021 Udemy, Inc.</p>
    </footer>
  );
}

export default Footer;

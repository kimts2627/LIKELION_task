import logo from '../img/logo-coral.svg';
import search from '../img/search.svg';
import cart from '../img/cart.svg';
import { useState } from 'react';

const Header = () => {
  return (
    <div>
      <div className='relative bg-white h-20 shadow-md flex flex-row px-5 items-center z-30'>
        <img className='w-auto h-10 ' src={logo} alt='' />
        <HeaderSearchBar />
        <HeaderButtons />
      </div>
    </div>
  );
}

const HeaderSearchBar = () => {

  const [isTeachModalOn, handleTeachModal] = useState(false);

  return (
    <div className='flex-1 flex flex-row text-sm'>
      <nav className='w-24 flex justify-center items-center hover:text-blue-600 cursor-pointer' >카테고리</nav>
      <div className='border rounded-full border-black flex flex-row flex-1 px-4 h-12 justify-center items-center'>
        <img className='w-4 mr-5' src={search} alt='' />
        <input className='bg-none outline-none h-10 flex-1 text-sm' type='text' placeholder='무엇이든 검색하기'></input>
      </div>
      <nav
        className='w-48 flex justify-center items-center font-normal hover:text-blue-600 cursor-pointer'
        onMouseEnter={() => handleTeachModal(true)}
        onMouseLeave={() => handleTeachModal(false)}
      >Udemy에서 가르치기</nav>
      {isTeachModalOn ? <TeachingModal /> : null}
    </div>
  );
}

const HeaderButtons = () => {
  return (
    <div className='flex flex-row text-sm'>
      <img className='w-6 cursor-pointer' src={cart} alt='' />
      <button className='border border-black rounded-md w-28 h-10 ml-6 focus:outline-none'>로그인</button>
      <button className='bg-black text-white rounded-md w-28 h-10 ml-2 focus:outline-none'>가입하기</button>
    </div>
  );
}

const TeachingModal = () => {

  return(
    <aside className='border border-gray-300 rounded-md shadow-md absolute top-24 right-80 bg-white w-72 h-48 p-6 flex flex-col text-center'>
      <p className='font-bold text-lg'>자신의 지식으로 전 세계 수백만명에게 다가갈 수 있는 기회를 얻으세요.</p>
      <button className='w-full rounded-md bg-black text-white h-60 mt-3'>자세히 알아보기</button>
    </aside>
  );
}

export default Header;

import logo from '../img/logo-coral.svg';
import search from '../img/search.svg';
import cart from '../img/cart.svg';

const Header = () => {
  return (
    <div>
      <div className='relative bg-white h-20 shadow-xl flex flex-row px-5 items-center z-30'>
        <img className='w-auto h-10 ' src={logo} alt='' />
        <HeaderSearchBar />
        <HeaderButtons />
      </div>
    </div>
  );
}

const HeaderSearchBar = () => {

  return (
    <div className='flex-1 flex flex-row text-sm'>
      <nav className='w-24 flex justify-center items-center' >카테고리</nav>
      <div className='border rounded-full border-black flex flex-row flex-1 px-4 h-12 justify-center items-center'>
        <img className='w-4 mr-5' src={search} alt='' />
        <input className='bg-none outline-none h-10 flex-1 text-sm' type='text' placeholder='무엇이든 검색하기'></input>
      </div>
      <nav className='w-48 flex justify-center items-center font-normal'>Udemy에서 가르치기</nav>
    </div>
  );
}

const HeaderButtons = () => {
  return (
    <div className='flex flex-row'>
      <img className='w-6 cursor-pointer' src={cart} alt='' />
      <button className='border boredr-black rounded-md w-24 h-12 ml-6 focus:outline-none'>로그인</button>
      <button className='bg-black text-white rounded-md w-24 h-12 ml-2 focus:outline-none'>가입하기</button>
    </div>
  );
}

export default Header;

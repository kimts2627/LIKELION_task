import logo from '../img/logo-coral.svg';
import search from '../img/search.svg';
import cart from '../img/cart.svg';

const Header = () => {
  return (
    <div className='bg-white h-20 shadow-xl flex flex-row px-5 items-center'>
      <img className='w-auto h-10 ' src={logo} alt='' />
      <HeaderSearchBar />
      <HeaderButtons />
    </div>
  );
}

const HeaderSearchBar = () => {
  return (
    <div className='flex-1 flex flex-row'>
      <nav className='w-24 flex justify-center items-center' >카테고리</nav>
      <div className='border rounded-full border-black flex flex-row flex-1'>
        <img className='w-5' src={search} alt='' />
        <input className='border bg-none outline-none w-40 h-12' type='text'></input>
      </div>
      <nav className='w-48 flex justify-center items-center'>Udemy에서 가르치기</nav>
    </div>
  );
}

const HeaderButtons = () => {
  return (
    <div className='flex flex-row'>
      <img className='w-6' src={cart} alt='' />
      <button>로그인</button>
      <button>가입하기</button>
    </div>
  );
}

export default Header;

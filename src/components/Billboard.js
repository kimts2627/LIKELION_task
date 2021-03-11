import search from '../img/search.svg';
import billboard from '../img/billboard.jpg';

const Billboard = () => {
  return (
    <section className='absolute z-0' >
      <img className='' src={billboard} alt='' />
      <div className='absolute bg-white border-0 shadow-lg top-5 left-5 w-96 h-48 flex flex-col items-center px-6 justify-evenly' >
        <h1 className='' >새로운 것을 학습하세요</h1>
        <p>현재의 속도로 움직이는 강좌가 14$부터 시작합니다. 할인은 내일 종료됩니다</p>
        <div className='border-black border rounded-md w-full h-10 flex flex-row px-4' >
          <input className='flex-1 outline-none' type='text' />
          <img className='w-4' src={search} alt='' />
        </div>
      </div>
    </section>
  );
}

export default Billboard;

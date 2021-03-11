import search from '../img/search.svg';
import billboard from '../img/billboard.jpg';

const Billboard = () => {
  return (
    <section className='relative' >
      <img className='' src={billboard} alt='' />
      <div className='absolute bg-white border-0 shadow-lg top-8 left-8 w-96 h-48 flex flex-col items-center px-6 justify-evenly' >
        <h1 className='text-3xl font-bold' >새로운 것을 학습하세요</h1>
        <p className='font-normal'>현재의 속도로 움직이는 강좌가 14$부터 시작합니다. 할인은 내일 종료됩니다</p>
        <div className='border-black border rounded w-full h-12 flex flex-row px-4' >
          <input className='flex-1 outline-none' type='text' placeholder='무엇을 배우시겠습니까?' />
          <img className='w-4' src={search} alt='' />
        </div>
      </div>
    </section>
  );
}

export default Billboard;

const SectionTwo = () => {
  return (
    <section className='w-full max-w-screen-2xl px-14 mt-14'>
      <h1 className='font-bold text-2xl'>수강생들이 보고 있는 강좌</h1>
      <Carousel />
    </section>
  );
}

const Carousel = () => {

  return(
    <article className='border border-red-700 h-72 overflow-x-hidden mt-5'>
      <div className='w-96'></div>
    </article>
  );
}

const SingleLecture = () => {

  return(
    <div>

    </div>
  );
}

export default SectionTwo;

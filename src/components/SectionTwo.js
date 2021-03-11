const SectionTwo = () => {
  return (
    <section className='px-6'>
      <h1>수강생들이 보고 있는 강좌</h1>
      <Carousel />
    </section>
  );
}

const Carousel = () => {

  return(
    <article className='border border-red-700 h-72 overflow-x-hidden'>
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

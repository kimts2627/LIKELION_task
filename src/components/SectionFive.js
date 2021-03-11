const SectionFive = () => {

  return (
    <section className='w-full h-auto max-w-screen-2xl px-14 mt-14 flex items-center justify-center'>
      <div className='w-1/2 h-60'>
        <iframe
          className='w-full h-full'
          src="https://www.youtube.com/embed/q1HT3piV9eo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
      <div className='pl-8 flex flex-col items-center justify-center w-1/2'>
        <h1 className='font-medium text-3xl'>교육을 통해 삶의 전환점을 맞이하세요.</h1>
        <p className='text-lg'>모하메드 알라루쉬는 Udemy에서 강좌를 수강하여 소프트웨어 개발 부문에서...</p>
      </div>
    </section>
  );
}

export default SectionFive;

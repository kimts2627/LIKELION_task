import { useState, useEffect, useRef } from "react";
import YouTube from 'react-youtube';

const SectionFive = () => {

  const ref = useRef();
  const [videoWidth, handleWidth] = useState(0);

  useEffect(() => {
    handleWidth(ref.current.clientWidth /2);

  }, []);

  return (
    <section className='px-6 flex' ref={ref}>
      <iframe
        width={videoWidth}
        height='315'
        src="https://www.youtube.com/embed/q1HT3piV9eo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <div className='pl-6 flex flex-col items-center justify-center'>
        <h1 className='font-bold'>교육을 통해 삶의 전환점을 맞이하세요.</h1>
        <p>모하메드 알라루쉬는 Udemy에서 강좌를 수강하여 소프트웨어 개발 부문에서...</p>
      </div>
    </section>
  );
}

export default SectionFive;

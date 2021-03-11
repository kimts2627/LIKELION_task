import lecture_1 from '../img/lecture_1.jpg';
import lecture_2 from '../img/lecture-2.jpg';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import arrow from '../img/arrow.png';

const SectionTwo = () => {

  const [lectureData, handleLectures] = useState([
    {
      pic: lecture_1,
      title: 'The Complete 2021 Web Development Bootcamp',
      author: 'Dr. Taesu Kim',
      rate: '4.7',
      price: '14$'
    },
    {
      pic: lecture_2,
      title: 'Ultimate AWS Certified Solutions Architect Associate 2021',
      author: 'Stephane Maarek',
      rate: '4.3',
      price: '48$'
    },
    {
      pic: lecture_1,
      title: 'The Complete 2021 Web Development Bootcamp',
      author: 'Dr. Taesu Kim',
      rate: '4.7',
      price: '14$'
    },
    {
      pic: lecture_2,
      title: 'Ultimate AWS Certified Solutions Architect Associate 2021',
      author: 'Stephane Maarek',
      rate: '4.3',
      price: '48$'
    },
    {
      pic: lecture_1,
      title: 'The Complete 2021 Web Development Bootcamp',
      author: 'Dr. Taesu Kim',
      rate: '4.7',
      price: '14$'
    },
    {
      pic: lecture_2,
      title: 'Ultimate AWS Certified Solutions Architect Associate 2021',
      author: 'Stephane Maarek',
      rate: '4.3',
      price: '48$'
    },
  ]);

  const [width, handleWidth] = useState(window.innerWidth);

  useEffect(() => {
    handleWidth(window.innerWidth);
    window.addEventListener('resize', () => handleWidth(window.innerWidth));
    return () => {
      window.addEventListener('resize', () => handleWidth(window.innerWidth));
    }
  }, []);

  let settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: width > 1200 ? width > 1500 ? 5 : 4 : 3,
    slidesToScroll: 1,
  }

  return (
    <section className='w-full max-w-screen-2xl px-14 mt-10 mb-10 relative'>
      <h1 className='font-bold text-2xl'>수강생들이 보고 있는 강좌</h1>
      <Slider {...settings}>
        {lectureData.map(lecture => <SingleLecture key={lecture.title} lecture={lecture} />)}
      </Slider>
    </section>
  );
}

const SingleLecture = ({ lecture }) => {

  return(
    <div className='h-full w-64 flex flex-col'>
      <div className='rounded-sm'>
        <img className='w-full' src={lecture.pic} alt='' />
      </div>
      <div>
        <h4 className='font-bold mt-2'>{lecture.title}</h4>
        <p className='text-sm font-light text-gray-500'>{lecture.author}</p>
        <p className='text-medium text-yellow-600'>{lecture.rate}</p>
        <h4 className='font-bold'>{lecture.price}</h4>
      </div>
    </div>
  );
}

export default SectionTwo;

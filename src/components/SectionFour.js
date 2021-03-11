import { useState } from "react";

const SectionFour = () => {

  const [categories, handleCategories] = useState([
    { title: '디자인', pic: 'https://s.udemycdn.com/home/top-categories/lohp-category-design.jpg' },
    { title: '개발', pic: 'https://s.udemycdn.com/home/top-categories/lohp-category-development.jpg' },
    { title: '마케팅', pic: 'https://s.udemycdn.com/home/top-categories/lohp-category-marketing.jpg' },
    { title: 'IT 및 소프트웨어', pic: 'https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software.jpg' },
  ]);

  return (
    <section className='px-6'>
      <h1 className='font-bold'>최고 카테고리</h1>
      <div className='w-full max-w-20 flex flex-row justify-between'>
        {
          categories.map(item =>
            <div className='border border-gray-300 w-48 h-72 rounded-md cursor-pointer'>
              <img className='w-full h-auto' src={item.pic} alt='' />
              <div className='pl-4 pt-3 font-semibold'>{item.title}</div>
            </div>
          )
        }
      </div>
    </section>
  );
}

export default SectionFour;

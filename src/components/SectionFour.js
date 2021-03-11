import { useState } from "react";

const SectionFour = () => {

  const [categories, handleCategories] = useState([
    { title: '디자인', pic: 'https://s.udemycdn.com/home/top-categories/lohp-category-design.jpg' },
    { title: '개발', pic: 'https://s.udemycdn.com/home/top-categories/lohp-category-development.jpg' },
    { title: '마케팅', pic: 'https://s.udemycdn.com/home/top-categories/lohp-category-marketing.jpg' },
    { title: 'IT 및 소프트웨어', pic: 'https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software.jpg' },
  ]);

  return (
    <section className='w-full max-w-screen-2xl px-14 mt-14'>
      <h1 className='font-bold text-2xl mb-4'>최고 카테고리</h1>
      <div className='w-full flex flex-row justify-between'>
        {
          categories.map(item =>
            <div className='border border-gray-300 w-1/5 h-auto rounded-md cursor-pointer'>
              <img className='w-full h-auto' src={item.pic} alt='' />
              <div className='pl-4 pt-3 font-semibold h-16'>{item.title}</div>
            </div>
          )
        }
      </div>
    </section>
  );
}

export default SectionFour;

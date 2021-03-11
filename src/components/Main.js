import Billboard from './Billboard';
import SectionOne from './SectionOne';
import SectionThree from './SectionThree';
import SectionTwo from './SectionTwo';
import SectionFour from './SectionFour';
import SectionFive from './SectionFive';

const Main = () => {
  return (
    <main className='flex flex-col items-center'>
      <Billboard />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </main>
  );
}

export default Main;

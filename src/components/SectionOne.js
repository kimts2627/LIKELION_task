import { useState } from "react";
import js_pic from '../img/jsman.jpg';
import webDev_pic from '../img/web-devman.jpg';
import python_pic from '../img/pythongirl.jpg';
import excel_pic from '../img/excelgirl.jpg';

const SectionOne = () => {
  return (
    <section className='px-6'>
      <h1>세계 최대 규모의 강좌 모음</h1>
      <p>130,000개 이상의 온라인 동영상 강좌 중에서 선택하세요. 매월 새롭게 강좌가 추가됩니다.</p>
      <SelectionTab />
    </section>
  );
}

const SelectionTab = () => {

  const [selectionTabSubjectData, handleSubjectData] = useState([
    {
      subject: 'Python',
      title: 'Python을 통해 취업 기회를 확장',
      description: '기계 학습이나 금융 분야에서 일하든 웹 개발이나 데이터 과학에서 경력을 추구하든 생략...',
      pic: python_pic
    },
    {
      subject: 'Excel',
      title: 'Excel을 사용하여 데이터를 분석하고 시각화',
      description: 'Excel은 데이터를 체계적으로 정리하는 Microsoft Office의 스프레드시트 프로그램 입니다...',
      pic: excel_pic
    },
    {
      subject: '웹 개발',
      title: '웹 개발을 통해 웹사이트 및 애플리케이션 구축',
      description: '웹 개발의 세계는 인터넷 자체만큼이나 광범위합니다. 우리의 사회적, 직업적 생활의...',
      pic: webDev_pic
    },
    {
      subject: 'JavaScript',
      title: 'JavaScript로 소프트웨어 개발 기술 향상하기',
      description: 'JavaScript는 대화형 웹 애플리케이션의 근간이므로 세계에서 가장 보편적인 프로그래밍 언어...',
      pic: js_pic
    },
  ]);

  const [selectedSubject, handleSelectedSbj] = useState('Python');

  const selectOneSbj = (selectedSbj) => {
    for(let i of selectionTabSubjectData) {
      if(i.subject === selectedSbj) {
        return i;
      }
    }
  }

  return (
    <div>
      <nav className='border-b border-gray-300 flex' >
        {selectionTabSubjectData.map(item => 
          <div
            className={
              selectedSubject === item.subject ?
              'border-b-2 border-gray-700 cursor-pointer' :
              'cursor-pointer'
            }
            onClick={(e) => handleSelectedSbj(e.target.textContent)}
          >
            {item.subject}
          </div>
        )}
      </nav>
      <div className='border boredr-red-400 h-80'>
        <h2>{selectOneSbj(selectedSubject).title}</h2>
        <p>{selectOneSbj(selectedSubject).description}</p>
        <h>{`${selectOneSbj(selectedSubject).subject} 탐색하기`}</h>
        <img className='' src={selectOneSbj(selectedSubject).pic} alt='' />
      </div>
    </div>
  );
}

export default SectionOne;

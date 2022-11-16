import ImgServiceIntro from '../assets/img/service_intro.png'
import ImgTech from '../assets/img/tech.png'
import ImgQuestion from '../assets/img/question.png'

const LayoutHeader = () => {
  return (
    <>
      <div className={'header'}>
        <div className={'logo'}>
          <h1 className={'logo-label'}>APPS</h1>
        </div>
        <div className={'tab'}>
          <ul className={'tab-ul'}>
            <li className={'tab-li'}>
              <img className={'tab-li-icon'} src={ImgServiceIntro} />
              <a className={'tab-li-anchor'} href={'#service'}>
                서비스소개
              </a>
            </li>
            <li className={'tab-li'}>
              <img className={'tab-li-icon'} src={ImgTech} />
              <a className={'tab-li-anchor'} href={'#tech'}>
                기능
              </a>
            </li>
            <li className={'tab-li'}>
              <img className={'tab-li-icon'} src={ImgQuestion} />
              <a className={'tab-li-anchor'} href={'#question'}>
                문의하기
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default LayoutHeader

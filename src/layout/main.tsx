import BannerServiceIntro from 'assets/img/banner_service_intro.png'
import BannerTech from 'assets/img/banner_tech.png'

const LayoutMain = () => {
  return (
    <>
      <div className={'main'}>
        <div id={'service'}>
          <img src={BannerServiceIntro} alt={'서비스'} />
        </div>
        <div className={'title-bar'}>
          <h1 className={'title-bar-text'}>기능</h1>
        </div>
        <div id={'tech'}>
          <img src={BannerTech} alt={'기능'} />
        </div>
        {/* <div id={'question'}>문의하기</div> */}
      </div>
    </>
  )
}

export default LayoutMain

import BannerServiceIntro from 'assets/img/banner_service_intro.png'

const LayoutMain = () => {
  return (
    <>
      <div className={'main'}>
        <div id={'service'}>
          <img src={BannerServiceIntro} alt={'서비스소개'} />
        </div>
        {/* <div id={'tech'}>기능</div> */}
        {/* <div id={'question'}>문의하기</div> */}
      </div>
    </>
  )
}

export default LayoutMain

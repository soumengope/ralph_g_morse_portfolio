import React,{useState,useEffect} from 'react';
import Style from '../styles/index.module.css';
import Image from 'next/image';

const Index = ()=>{
  const [val,setVal] = useState(true);
  return(
    <>
    <div className={Style.mainHeader}>
      <div className={Style.leftHeader}>
        <div className={Style.leftLogo}></div>
        <div className={Style.leftHeader}>Ralph G. Morse</div>
      </div>
      <div className={Style.rightHeader}>
        <div className={Style.resume}>Resume</div>
        <div className={Style.project}>Project</div>
        <div className={Style.contact}>Contact</div>
      </div>
    </div>

    <div className={Style.mainHeaderMob}>
      <div className={Style.leftHeaderMob}>
        <div className={Style.leftLogoMob}></div>
        <div className={Style.leftHeaderMob}>Ralph G. Morse</div>
      </div>
      <div className={Style.rightHeaderMob}>
        <div className={Style.mainSpanMob}>
        <div className={(val==true)?Style.ShowSpanMob:Style.HideShowSpanMob}
        onClick={()=>{setVal(!val)}}>
          <div className={Style.ShowDiv}></div>
          <div className={Style.ShowDiv}></div>
          <div className={Style.ShowDiv}></div>
        </div>
        <div className={(val==false)?Style.HideSpanMob:Style.ShowHideSpanMob}
        onClick={()=>{setVal(!val)}}>
          <div className={Style.HideDiv1}></div>
          <div className={Style.HideDiv2}></div>
        </div>
    </div>
      </div>
    </div>
    <div className={(val==false?Style.rightHeaderNewMob:Style.rightHeaderNewMobHide)}>
        <div className={Style.newresume}>Resume</div>
        <div className={Style.newproject}>Project</div>
        <div className={Style.newcontact}>Contact</div>
    </div>


    <div className={Style.mainSection}>
      <div className={Style.leftSection}>
        <div className={Style.leftImage}>
          <Image src="/person.png" width="1000px" height="1000px" alt="profile pic"></Image>
        </div>
      </div>
      <div className={Style.rightSection}>
        <div className={Style.rightHello}>Hello</div>
        <div className={Style.rightText}>A Bit About Me</div>
        <div className={Style.rightPara}>My name is Ralph G. Morse, I am a Web Developer. Do you have a business and you need a 
        Website to aid your business, kindly send us a mail at ralphgmorse@gmail.com .</div>
        <div className={Style.rightDiv}>
          <div className={Style.rightDivs1}>
            <div className={Style.rightResume}>Resume</div>
          </div>
          <div className={Style.rightDivs2}>
            <div className={Style.rightProject}>Project</div>
          </div>
          <div className={Style.rightDivs3}>
            <div className={Style.rightContact}>Contact</div>
          </div>
        </div>
      </div>
    </div>

    <div className={Style.footerSection}>
      <div className={Style.footerPhone}>
        <div className={Style.footerPhoneHeader}>Phone</div>
        <div className={Style.footerPhoneNo}>415-629-8553</div>
      </div>
      <div className={Style.footerMainEmail}>
        <div className={Style.footerEmailHeader}>Email</div>
        <div className={Style.footerEmail}>ralphgmorse@gmail.com</div>
      </div>
      <div className={Style.footerMainFollow}>
        <div className={Style.footerFollowHeader}>Follow Me</div>
        <div className={Style.footerFollowLogo}>
          <div><a href="#"><Image src="/twitter.png" width="25px" height="25px"></Image></a></div>
          <div><a href="https://www.facebook.com/tana.na.5070/"><Image src="/facebook.png"  width="25px" height="25px"></Image></a></div>
        </div>
      </div>
      <div className={Style.footerMainCopyright}>
        <div className={Style.footerCopyright}>© 2023 By Ralph G Morse.</div>
        <div className={Style.footerCopyright}>Powered and secured by Me</div>
      </div>
    </div>
    </>
  )
}

export default Index;
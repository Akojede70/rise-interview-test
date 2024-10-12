import React from 'react'
import Layout from '../components/layout/layout'
import { apple, bigImage, circle1, circle2, circle3, ellipse1, ellipse2, ellipse3, ellipse4, ellipse6, google, jesse, logos, people1, people2, people3, people4, peoples, phone, phoneWallet, raye,  } from '../assets/png/images-icon'
import HeroSectionLeft from '../components/hero-section/hero-section-left'
import HeroSectionRight from '../components/hero-section/hero-section-right'
import AssetCards from '../components/cards/asset-card'
import UserCard from '../components/cards/users-card'

const Landing = () => {
  return (
    <Layout>
      <body className='mt-[7%]'>
        
        {/* section 1 */}
      <section className='px-[5%]'>
      <img src={ellipse4} alt='elipse4' className='absolute hidden lg:block left-[9%] top-[24%] z-20 animate-moveLeftRight'/>
      <img src={ellipse3} alt='elipse3' className='absolute hidden lg:block left-[56%] top-[15%] z-0 animate-moveUpDown'/>
      <div className='lg:flex lg:flex-wrap lg:gap-[33%]'>
      <div className='flex flex-col'>
      <div>
        <h2 className='pt-[40%] md:pt-[13%] lg:pt-[22%] text-center text-4xl md:text-5xl lg:text-6xl font-bold text-primaryTeal'>
          Dollar investments <br/> that help you grow
        </h2>
        <p className='my-[3%] text-[18px] hidden lg:block'>we put your money in high quality assets that help <br/> you build wealth and achieve your financial goals.</p>
        <p className='block lg:hidden text-center my-[6%]'> Your Personal wealth manager. Get <br/>started with a minimum of $10 and</p>
        </div>
        <div className='flex gap-[2%] items-center justify-center lg:items-start lg:justify-start'>
        <img src={apple} alt="apple"  className='h-[50px] md:h-auto'/>
        <img src={google} alt="google" className='h-[50px] md:h-auto' />
        </div>
        </div>
        <img src={phone} alt='phone' className='w-full mt-[13%] lg:mt-0 lg:w-[19%] lg:h-[19%] '/>
        <img src={ellipse6} alt='elipse6' className='absolute hidden lg:block left-[40.7%] top-[46.5%] z-0'/>
        </div>
        <img src={ellipse2} alt='elipse2' className='absolute hidden lg:block left-[14%] top-[85%] z-20 animate-moveLeftRight'/>
        <img src={ellipse4} alt='elipse4'className='absolute hidden lg:block left-[65%] top-[86%] z-20 animate-moveLeftRight'/>
        <img src={ellipse1} alt='elipse1' className='absolute hidden lg:block left-[87%] top-[83%] z-20 animate-moveUpDown'/>
        </section>

        {/* section 2 */}
        <section className='mt-[7%] px-[10%]'>
          <div className='w-full bg-primaryWhite flex items-center justify-center'>
            <img src={logos} alt='different-logos'/>
          </div>
    <div>
   <HeroSectionLeft header=' Invest your money in dollars' smallText='By holding your investment in a stable' breakText1='currency your money grows more over' breakTest2='time and retains its value better.' buttonText='Start Investing Now' people={people1}/>
     <HeroSectionRight header="Choose what's best" breakHeader='for you' smallText='unlike other platform, Rise lets you pick between' breakText1='stocks, US real estate and fixed income, according to' breakText2='your risk appetite. That way you can spread your risk and' breakText3="tap into different investment all in one place." buttonText='Start Investing Now' people={people2}/>
     <HeroSectionLeft header='Set goals and reach them' smallText='You can invest towards a goal on Rise--retirement, higher' breakText1='education save for you home or travel budgets or create' breakTest2='a goal of your own and invest periodically to achieve them.' buttonText='Start Investing Now' people={people3}/>
     <HeroSectionRight header='We remember so you dont' breakHeader='have to' smallText='Our Auto-invest feature makes it easy to stay consistent,' breakText1='even when you forget, Set a funding amount, frequency' breakText2='and payment method and Rise will automatically fund.' breakText3='your investment on schedule.' buttonText='Start Investing Now' people={people4}/>
     </div>
        </section>

{/* section 3 */}
 <section className='lg:px-[10%]'>
  <div className='text-center mb-[3%]'>
    <h2 className='text-4xl font-bold'>Asset Classes</h2>
    <p className='text-[18px] my-[3%] lg:my-0'>It's your money, choose where you invest it </p>
  </div>
  <div className=' space-y-[14%] lg:space-y-0 mt-[8%] lg:mt-0 lg:flex items-center justify-center'>
    <AssetCards circle={circle3} header='Stocks' smallText='We help you invest and manage ' breakText1='your money by investing in our ' breakText2='portfolio of 30 high-growth stocks' breakText3='across the US market with our equity' breakText4='portfolioof power stocks.' btnText='Learn How Stocks Work' bgColor='bg-[#fff4f0]'/>
    <AssetCards circle={circle2} header='Real Estate' smallText='Our Real Estate plan is the sweet' breakText1='middle. Best for those who want a' breakText2='balance of good returns and medium' breakText3='risk. This plan invest in rented' breakText4='building in the US.' btnText='Learn How Real Estate Work' bgColor='bg-[#f6f2ff]'/>
    <AssetCards circle={circle1} header='Fixed Income' smallText='A low-risk asset perfect for anyone' breakText1='who wants to protect their money in a' breakText2='secure, appreciating currency i.e the' breakText3='dollar. for people who want to protect' breakText4='their hard-earned money from' breakText5='inflation while earning steady returns.' btnText='Learn How Fixed Income Work' bgColor='bg-[#edffff]'/>
    </div>
 </section>

           {/* section 4 */}
        <section className='mt-[10%] px-[5%]'>
          <div className='flex gap-[23%] items-center justify-center'>
           <div>
            <img src={phoneWallet} alt='phone wallet'/>
          </div>
            <div className='flex flex-col'>
              <h6 className='text-2xl'>The Rise App</h6>
              <h2 className='text-4xl font-bold my-[5px]'> Save for your <span className='text-primaryViolet'>future</span> </h2>
              <p className='my-[20px] text-[18px]'> With Rise you achieve your financial goals faster. Save <br></br>for school, your home, vacations, your children's <br></br> future and more</p>
              <button className='w-[40%] p-[3%] bg-primaryCyan rounded-[3%] text-primaryWhite font-bold'> Start Saving</button>
            </div>
           </div>
        </section>

   {/* section 5 */}
        <section className='mt-[5%]'>
        <div className="bg-gradient-to-r from-pink-200 via-white to-blue-200 flex justify-center py-16 px-6">
      <div className="max-w-3xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primaryBlack mb-4">
          How we are Regulated
        </h2>
        <div>
        <p className="text-primaryBlack leading-relaxed text-[18px]">
          Rise is registered and regulated both in the US and in Nigeria. Our team is made up of US registered investment advisers, our  Nigerian users are covered by our SEC licensed trustees, ARM  Trustees, and all our assets are held with regulated third parties, in  all relevant jurisdictions.
        </p>
        </div>
      </div>
    </div>
        </section>


        {/* section 6 */}
        <section className='mt-[5%] px-[5%]'>
          <div className='text-center'>
            <h2 className='text-4xl font-bold text-primaryCyan'> From The People Who Use Rise</h2>
            <p className='text-[18px]'>Our mission at Risevest is to empower more people just like you <br/> to achieve your personal financial goals.</p>
          </div>
          <div className='flex items-center justify-center gap-[4%] mt-[2%]'>
           <UserCard smallText="don't want to invest in seperate stocks because" breakText1='I am not a financial expert, and I would rather trust' breakText2=' my money in the hands of people like Rise, who' breakText3='are experienced and knowledgeable.' userImage={jesse} userName='Lade'/>
           <UserCard smallText="I don't want to invest in seperate stocks because" breakText1='I am not financial expert and I would rather trust' breakText2='my money in the hands of people like Rise who' breakText3='are skilled and knowledgeable.' userImage={jesse} userName='Jesse'/>
           <UserCard width="30%" height='240px' smallText='I choose Rise because of its leadership wealth of' breakText1='  knowledge, and the people who I support. I invest' breakText2=' with Rise in other to protect my savings and' breakText3='investment from being depleted by devaluation and' breakText4="inflation that's at an all time high in Nigeria." breakText5="" userImage={raye} userName='Raye'/>
           </div>
        </section>

        {/* section 7 */}
        <section className='mt-[10%] px-[10%]'>
          <div className='flex flex-col-reverse lg:flex lg:flex-row'>
          <div className='flex lg:w-[55%] pt-[6%] flex-col'>
              <h4 className='text-center lg:text-left text-4xl font-bold mt-[4%] lg:mt-0'>Join The Rise Community</h4>
              <div className='lg:w-[80%] '>
              <p className='my-[20px] text-[17px] lg:block hidden'> If you want to go far, go together. Our Telegram Community surrounds you with others who can help you along your financial journey with tips support advice and learning it's completely free and open to new and seasoned investors.</p>
              <p className='text-center block lg:hidden my-[5%]'> If you want to go far, go together. </p>
              </div>
              
              <button className='w-[60%] mx-auto lg:mx-0 lg:w-[42%] p-[2%] bg-primaryTurquoise rounded-[3%] text-primaryBlack font-bold '> Join our Community</button>
              
            </div>
            <div>
                <img src={peoples} alt='peoples'/>
            </div>
          </div>
        </section>
        
        {/* section 8 */}
        <section className='mt-[10%] px-[5%] mb-[10%]'>
           <div className='flex items-center justify-center'>
            <img src={bigImage} alt='details' className='w-[91%] md:block hidden'/>
           </div>
        </section>
      </body>
    </Layout>
  )
}

export default Landing
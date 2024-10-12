import React from 'react'
import Layout from '../components/layout/layout'
import { apple, circle1, circle2, circle3, ellipse1, ellipse2, ellipse3, ellipse4, ellipse6, google, jesse, logos, mobileLogo, people1, people2, people3, people4, peoples, phone, phoneWallet, raye, slashedPhone, unslashedPhone,  } from '../assets/png/images-icon'
import HeroSectionLeft from '../components/hero-section/hero-section-left'
import HeroSectionRight from '../components/hero-section/hero-section-right'
import AssetCards from '../components/cards/asset-card'
import UserCard from '../components/cards/users-card'
import MobileHero from '../components/hero-section/mobile-hero'

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
          <div className='w-full bg-primaryWhite flex flex-col lg:flex-row items-center justify-center'>
            <img src={mobileLogo} alt='mobile' className='lg:hidden mb-[5%]'/>
            <img src={logos} alt='different-logos'/>
          </div>

         
         
<div>
  <MobileHero header='Superior Performance' people={people1} smallText='Rise out perform your other alternative in two ways. The first is through our expert algorithm driven investment approach that picks through over 3,000 data sets to find the perfect investment for you. '/>
  <MobileHero header='Personalization' people={people2} smallText="No two people are the same, and everyones's financial goal are different. Rise understands this, which is why we tailor your journey to financial freedom to fit you."/>
  <MobileHero header='Diversification' people={people3} smallText="Rise offers to a choice of three asset classes: US equities and fixed income assets to provide stability to your investments and protection from market declines. you can pick one assets clas class or"/>
</div>
    <div className='hidden lg:block'>
   <HeroSectionLeft header=' Invest your money in dollars' smallText='By holding your investment in a stable currency your money grows more over time and retains its value better.' buttonText='Start Investing Now' people={people1}/>
     <HeroSectionRight header="Choose what's best" breakHeader='for you' smallText='unlike other platform, Rise lets you pick between stocks, US real estate and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investment all in one place.' buttonText='Start Investing Now' people={people2}/>
     <HeroSectionLeft header='Set goals and reach them' smallText='You can invest towards a goal on Rise--retirement, higher education save for you home or travel budgets or create a goal of your own and invest periodically to achieve them.' buttonText='Start Investing Now' people={people3}/>
     <HeroSectionRight header='We remember so you dont' breakHeader='have to' smallText='Our Auto-invest feature makes it easy to stay consistent, even when you forget, Set a funding amount, frequency and payment method and Rise will automatically fund, your investment on schedule.' buttonText='Start Investing Now' people={people4}/>
     </div>
        </section>

{/* section 3 */}
 <section className='lg:px-[10%]'>
  <div className='text-center mb-[3%]'>
    <h2 className='text-4xl font-bold'>Asset Classes</h2>
    <p className='text-[18px] my-[3%] lg:my-0'>It's your money, choose where you invest it </p>
  </div>
  <div className=' space-y-[14%] lg:space-y-0 mt-[8%] lg:mt-0 lg:flex items-center justify-center'>
    <AssetCards circle={circle3} header='Stocks' smallText='We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolioof power stocks.' btnText='Learn How Stocks Work' bgColor='bg-[#fff4f0]'/>
    <AssetCards circle={circle2} header='Real Estate' smallText='Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invest in rented building in the US.' btnText='Learn How Real Estate Work' bgColor='bg-[#f6f2ff]'/>
    <AssetCards circle={circle1} header='Fixed Income'  marginTop="10%" smallText="A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency i.e the dollar. for people who want to protect their hard-earned money from" btnText='Learn How Fixed Income Work' bgColor='bg-[#edffff]'/>
    </div>
 </section>

           {/* section 4 */}
        <section className='mt-[10%] px-[5%] hidden lg:block'>
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
        <section className='lg:mt-[5%] lg:px-[5%] '>
          <div className='hidden lg:block'>
          <div className='text-center'>
            <h2 className='text-4xl font-bold text-primaryCyan'> From The People Who Use Rise</h2>
            <p className='text-[18px]'>Our mission at Risevest is to empower more people just like you <br/> to achieve your personal financial goals.</p>
          </div>
          <div className='flex items-center justify-center gap-[4%] mt-[2%]'>
           <UserCard smallText="I don't want to invest in seperate stocks because I am not financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable." userImage={jesse} userName='Lade'/>
           <UserCard smallText="I don't want to invest in seperate stocks because I am not financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable." userImage={jesse} userName='Jesse'/>
           <UserCard width="30%" height='220px' marginTop='5%'  smallText="I choose Rise because of its leadership wealth of  knowledge, and the people who I support. I invest with Rise in other to protect my savings and investment from being depleted by devaluation and inflation that's at an all time high in Nigeria." userImage={raye} userName='Raye'/>
           </div>
           </div>
           {/* mobile */}
           <div className='my-[15%] text-center lg:hidden'>
           <h2 className='text-3xl font-bold text-primaryCyan'> what our customers are saying</h2>
           <p className='my-[4%] text-[17px]'>we serve over 80,000 amazing users</p>
           <div className='flex items-center justify-center text-center'>
           <UserCard width="90%" smallText="I don't want to invest in seperate stocks because I am not financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable." userImage={jesse} userName='Jesse'/>
           </div>
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

           <div className='w-[90%] mx-auto rounded-[30px]  bg-primaryLightTurquoise hidden md:block'>
           <div className='flex gap-[5%]'>
            <div className='w-[60%] mt-[8%] pl-[2%]'>
              <h6 className='text-primaryTeal font-bold mb-[1%]'> Download The Rise App</h6>
              <h2 className='text-3xl font-bold w-[68%]'> Join our 100,000 users investing and setting long term goals!</h2>
              <p className='mt-[2%] mb-[4%]'>Dollar investment that helps you grow.</p>
              <div className='flex gap-[1%]'>
                <img src={apple} alt='apple'/>
                <img src={google} alt='google'/>
              </div>
            </div>
            <div>
              <img src={unslashedPhone} alt='unslashed' className='pt-[10%]' />
            </div>
            </div>
           </div>

           <div className='w-[100%] mt-[8%] mx-auto rounded-[30px]  bg-primaryLightTurquoise md:hidden'>
           <div className='pl-[2%] text-center pt-[10%]'>
              <h6 className='text-primaryTeal font-bold mb-[2%]'> Download The Rise App</h6>
              <h2 className='text-[20px] font-bold'> Join our 100,000 users investing and setting long term goals!</h2>
              <p className='mt-[3%] mb-[5%]'>Dollar investment that helps you grow.</p>
              <div className='flex items-center justify-center gap-[3%]'>
                <img src={apple} alt='apple'/>
                <img src={google} alt='google'/>
              </div>

              <div className='flex items-center justify-center pt-[9%]'>
                <img src={slashedPhone} alt='slashedPhone'/>
              </div>
            </div>
           </div>
        </section>
      </body>
    </Layout>
  )
}

export default Landing
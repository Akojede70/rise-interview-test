import React from 'react'
import Layout from '../components/layout/layout'
import { apple, bigImage, ellipse1, ellipse2, ellipse3, ellipse4, ellipse6, google, logos, people1, people2, people3, people4, peoples, phone, phoneWallet,  } from '../assets/png/images-icon'
import HeroSectionLeft from '../components/hero-section/hero-section-left'
import HeroSectionRight from '../components/hero-section/hero-section-right'

const Landing = () => {
  return (
    <Layout>
      <body className='mt-[7%]'>
        
        {/* section 1 */}
      <section className='px-[5%]'>
      <img src={ellipse4} alt='elipse4' className='absolute left-[9%] top-[24%] z-20 animate-moveLeftRight'/>
      <img src={ellipse3} alt='elipse3' className='absolute left-[56%] top-[15%] z-0 animate-moveUpDown'/>
      <div className='flex flex-wrap gap-[33%]'>
      <div className='flex flex-col'>
      <div>
        <h2 className='pt-[22%] text-6xl font-bold text-primaryTeal'>
          Dollar investments <br></br> that help you grow
        </h2>
        <p className='my-[3%]'>we put your money in high quality assets that help <br></br> you build wealth and achieve your financial goals.</p>
        </div>
        <div className='flex gap-[2%]'>
        <img src={apple} alt="apple" />
        <img src={google} alt="google" />
        </div>
        </div>
        <img src={phone} alt='phone' className='w-[19%] h-[19%] '/>
        <img src={ellipse6} alt='elipse6' className='absolute left-[40.3%] top-[46.5%] z-0'/>
        </div>
        <img src={ellipse2} alt='elipse2' className='absolute left-[14%] top-[85%] z-20 animate-moveLeftRight'/>
        <img src={ellipse4} alt='elipse4'className='absolute left-[65%] top-[86%] z-20 animate-moveLeftRight'/>
        <img src={ellipse1} alt='elipse1' className='absolute left-[87%] top-[83%] z-20 animate-moveUpDown'/>
        </section>

        {/* section 2 */}
        <section className='mt-[7%] px-[10%]'>
          <div className='w-full bg-primaryWhite flex items-center justify-center'>
            <img src={logos} alt='different-logos'/>
          </div>
    <div>
   <HeroSectionLeft header=' Invest your money in dollars' smallText='By holding your investment in a stable' breakText1='currency your money grows more over' breakTest2='time and retains its value better.' buttonText='Start Investing Now' people={people1}/>
     <HeroSectionRight header="Choose what's best" breakHeader='for you' smallText='unlike other platform, Rise lets you pick between' breakText1='stocks, US real estate and fixed income, according to' breakText2='your risk appetite. That way you can spread your risk and' breakText3="tap into different investment all in one place." buttonText='Start Investing Now' people={people2}/>
     <HeroSectionLeft header='set goals and reach them' smallText='You can invest towards a goal on Rise--retirement, higher' breakText1='education save for you home or travel budgets or create' breakTest2='a goal of your own and invest periodically to achieve them.' buttonText='Start Investing Now' people={people3}/>
     <HeroSectionRight header='we remember so you dont' breakHeader='have to' smallText='Our Auto-invest feature makes it easy to stay consistent,' breakText1='even when you forget, Set a funding amount, frequency' breakText2='and payment method and Rise will automatically fund.' breakText3='your investment on schedule.' buttonText='Start Investing Now' people={people4}/>
     </div>
        </section>

{/* section 3 */}
 <section>

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
              <p className='my-[20px]'> with Rise you achieve your financial goals faster. Save <br></br>for school, your home, vacations, your children's <br></br> future and more</p>
              <button className='w-[40%] p-[3%] bg-primaryCyan rounded-[3%] text-primaryWhite font-bold'> Start Saving</button>
            </div>
           </div>
        </section>

   {/* section 5 */}
        <section>

        </section>

        {/* section 6 */}
        <section>

        </section>

        {/* section 7 */}
        <section className='mt-[10%] px-[5%]'>
          <div className='flex items-center justify-center gap-[20%]'>
          <div className='flex flex-col'>
              <h4 className='text-2xl font-bold'>Join The Rise Community</h4>
              <p className='my-[20px]'> If you want to go far, go together. Our Telegram Community <br/>surrounds you with others who can help you along your financial <br/> journey with tips support advice and learning it's completely <br/> free and open to new and seasoned investors.</p>
              <button className='w-[50%] p-[3%] bg-primaryTurquoise rounded-[3%] text-primaryBlack font-bold'> Join our Community</button>
            </div>
            <div>
                <img src={peoples} alt='peoples'/>
            </div>
          </div>
        </section>
        
        {/* section 8 */}
        <section className='mt-[10%] px-[5%] mb-[10%]'>
           <div className='flex items-center justify-center'>
            <img src={bigImage} alt='image details' className='w-[91%] md:block hidden'/>
           </div>
        </section>
      </body>
    </Layout>
  )
}

export default Landing

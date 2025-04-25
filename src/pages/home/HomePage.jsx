import LogoComp from "../../components/home/LogoComp"
import '../../assets/css/home/Home.css'
import ContactComp from "../../components/home/ContactComp"
import CategoryComp from "../../components/home/CategoryComp"
import AfterEventComp from "../../components/home/AfterEventComp"
import AboutComp from "../../components/home/AboutComp"
import NewsletterComp from "../../components/home/NewsletterComp"
import SocialMediaComp from "../../components/home/SocialMediaComp"
import HeroComp from "../../components/home/HeroComp"
import NewsComp from '../../components/home/NewsComp'


const HomePage = () => {
    return(
        <>
        <br />
        <br />
        <br />
        <HeroComp></HeroComp>
        <AboutComp></AboutComp>
        <CategoryComp></CategoryComp>
        <AfterEventComp></AfterEventComp>
        <ContactComp></ContactComp>
        <SocialMediaComp></SocialMediaComp>
        {/* <NewsComp></NewsComp> */}
        <NewsletterComp></NewsletterComp>
        <LogoComp></LogoComp>  
        </>
    )
}

export default HomePage
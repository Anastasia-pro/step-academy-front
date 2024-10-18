import useAuth from '../../hooks/AuthChecker'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import HelpForm from '../../components/HelpForm/HelpForm'
import NewsItemBlock from '../../components/NewsItemBlock/NewsItemBlock'


export default function News() {
    const {isAuth} = useAuth();
    
    return(
        <>
        <Header/>
        <NewsItemBlock/>
        {isAuth ? 
        (
            <></>
        ):
        (<HelpForm/>)}
        <Footer/>
        </>
    )
}
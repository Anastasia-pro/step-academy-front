import useAuth from '../../hooks/AuthChecker'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import HelpForm from '../../components/HelpForm/HelpForm'
import NewsTextPage from '../../components/NewsTextPage/NewsTextPage'


export default function NewsText() {
    const {isAuth} = useAuth();
    return(
        <>
        <Header/>
        <NewsTextPage/>
        {isAuth ? 
        (
            <></>
        ):
        (<HelpForm/>)}
        <Footer/>
        </>
    )
}
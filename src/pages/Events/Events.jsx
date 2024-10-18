import useAuth from '../../hooks/AuthChecker'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import HelpForm from '../../components/HelpForm/HelpForm'
import EventsBlock from '../../components/EventsBlock/EventsBlock'


export default function Events() {
    const {isAuth} = useAuth();

    return(
        <>
        <Header/>
        <EventsBlock/>
        {isAuth ? 
        (
            <></>
        ):
        (<HelpForm/>)}
        <Footer/>
        </>
    )
}
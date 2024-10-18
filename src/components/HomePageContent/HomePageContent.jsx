import useAuth from "../../hooks/AuthChecker";
import ChooseCourse from '../ChooseCourse/ChooseCourse';
import HelpForm from '../HelpForm/HelpForm';
import NewsBlock from '../NewsBlock/NewsBlock';
import NumbersBlock from '../NumbersBlock/NumbersBlock';
import OwlCourseWindow from '../OwlCourseWindow/OwlCourseWindow';
import PrevPhoto from '../PrevPhoto/PrevPhoto';
import VideoBlock from '../VideoBlock/VideoBlock';
import WelcomeBlock from '../WelcomeBlock/WelcomeBlock';
const OwlComponent = <OwlCourseWindow/>


export default function HomePageContent() {
    const { isAuth } = useAuth();

    return(
        <>
        <PrevPhoto/>
        <ChooseCourse childComponent={OwlComponent}/> 
        <VideoBlock/>
        <NumbersBlock/>
        <NewsBlock/>
        <WelcomeBlock/>
        {isAuth ? 
        (
            <></>
        ):
        (<HelpForm/>)}
        </>
    )
}
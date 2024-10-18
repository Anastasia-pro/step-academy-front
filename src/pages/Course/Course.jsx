import useAuth from "../../hooks/AuthChecker";
import Header from "../../components/Header/Header";
import HelpForm from "../../components/HelpForm/HelpForm";
import Footer from "../../components/Footer/Footer";
import VideoBlock from "../../components/VideoBlock/VideoBlock";
import HeaderDescript from "../../components/HeaderDescript/HeaderDescript";
import CourseGoal from "../../components/CourseGoal/CourseGoal";
import FaqBlock from "../../components/FaqBlock/FaqBlock";
import TeachersBlock from "../../components/TeachersBlock/TeachersBlock";
import CourseAdvant from "../../components/CourseAdvant/CourseAdvant";
import CourseSum from "../../components/CourseSum/CourseSum";
import CourseReg from "../../components/CourseReg/CourseReg";


export default function Course() {
    const {isAuth} = useAuth();
    return(
        <>
        <Header/>
        <HeaderDescript/>
        <CourseGoal/>
        <VideoBlock/>
        <CourseAdvant/>
        <CourseReg/>
        <CourseSum/>
        <TeachersBlock/>
        <FaqBlock/>
        {isAuth ? 
        (
            <></>
        ):
        (<HelpForm/>)}
        <Footer/>
        </>
    )
}
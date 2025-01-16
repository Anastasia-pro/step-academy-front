import useAuth from "../../hooks/AuthChecker";
import CareerBlock from "../../components/CareerBlock/CareerBlock";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HelpForm from "../../components/HelpForm/HelpForm";

export default function Career() {
  const { isAuth } = useAuth();

  return (
    <>
      <Header />
      <CareerBlock />
      {isAuth ? <></> : <HelpForm />}
      <Footer />
    </>
  );
}

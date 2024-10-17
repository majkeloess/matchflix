import { Link } from "react-router-dom";
import ArrowSvg from "../assets/svg/ArrowSvg";
import ListList from "../components/ListList";
import PageWrapper from "../components/PageWrapper";
import { TEXT } from "../constants/text";

function ListPage() {
  return (
    <PageWrapper>
      <section className="px-10">
        <div className="flex flex-row items-center gap-8">
          <h1 className="text-white font-poppins font-semibold text-3xl lg:text-6xl text-center py-5 md:py-10">
            {TEXT.listMain}
          </h1>
          <Link to="/movies">
            <ArrowSvg />
          </Link>
        </div>
        <div className="py-5">
          <ListList />
        </div>
      </section>
    </PageWrapper>
  );
}

export default ListPage;

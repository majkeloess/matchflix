import ListList from "../components/ListList";
import PageWrapper from "../components/PageWrapper";
import ListHeader from "../components/ListHeader";

function ListPage() {
  return (
    <PageWrapper>
      <section className="px-10">
        <ListHeader />
        <div className="py-5">
          <ListList />
        </div>
      </section>
    </PageWrapper>
  );
}

export default ListPage;

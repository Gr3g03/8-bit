type props = {
  setModal: any;
};
const Header: React.FC<props> = (props: props) => {
  const handleClick = () => {
    props.setModal(true);
  };

  return (
    <section className="nes-header is-light-blue">
      <nav>
        <ul>
          <i onClick={handleClick} className="nes-octocat animate"></i>
        </ul>
      </nav>
    </section>
  );
};
export default Header;

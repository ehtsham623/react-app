//props are properties and they are like arguments
const Header = (props) => {
  return (
    <header>
      <h1>{props.headerTitle}</h1>
    </header>
  );
};

export default Header;

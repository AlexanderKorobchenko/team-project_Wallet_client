import Menu from './components/Menu';
import Balance from './components/Balance';
import Container from './components/Container/Container';
import Main from './components/Main';
import Rate from './components/Rate';
import LeftBar from './components/LeftBar';

function App() {
  return (
    <>
      <Container>
        <LeftBar>
          <Menu />
          <Balance />
          <Rate />
        </LeftBar>

        <Main />
      </Container>
    </>
  );
}

export default App;

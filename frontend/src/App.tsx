import NavBar from './components/navbar/index'
import Footer from './components/footer/index'
import DataTable from './components/dataTable/index'

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">DSVendas</h1>
        <DataTable />
      </div>
      <Footer />

    </>
  );
}

export default App;

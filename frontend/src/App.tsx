import BarChart from "component/BarChart";
import DataTable from "component/DataTable";
import DonutChart from "component/DonutChart";
import Footer from "component/Footer";
import Navbar from "component/Navbar";

function App() {
  return (
    <>



    <Navbar />
        
    
    <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>      

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secundary">Taxa de sucesso (%)</h5>
            <BarChart />
          </div>

          <div className="col-sm-6">
          <h5 className="text-center text-secundary">Todas as vendas</h5>
            <DonutChart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary"> Todas as vendas </h2>
        </div>
        
        <DataTable />
      </div>

    <Footer />





    </>
  );
}
    export default App;

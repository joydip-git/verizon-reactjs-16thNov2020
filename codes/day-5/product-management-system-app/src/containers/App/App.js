import DashBoard from "../../components/Common/DashBoard/DashBoard";
import RouteGenerator from "../../routes/RouteGenerator";

function App() {
  return (
    <div className="container">
      <DashBoard />
      <RouteGenerator />
      {/* <Route path='*' render={() => <span>Page Not Found</span>} /> */}
    </div>
  );
}

export default App;

import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddContact from "./components/contacts/AddContact";
import Contacts from "./components/contacts/Contacts";
import EditContact from "./components/contacts/EditContact";
import Navbar from "./components/elements/Navbar";
import store from "./redux/store";
import "./styles/App.scss";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Routes>
                <Route exact path="/" element={<Contacts />} />
                <Route exact path="/contact/add" element={<AddContact />} />
                <Route exact path="/contact/edit/:id" element={<EditContact />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

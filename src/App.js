import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./pages/Home/Services/Services";
import Blog from "./pages/Blog/Blog";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import AuthProvider from "./contexts/AuthProvider";
import AddBooking from "./pages/AddBooking/AddBooking";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import MyBooking from "./pages/MyBooking/MyBooking";
import ManageAllBooking from "./pages/ManageAllBooking/ManageAllBooking";
import AddANewOption from "./pages/AddANewOption/AddANewOption";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/service">
            <Services></Services>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/contactus">
            <Contact></Contact>
          </Route>
          <Route path="/aboutus">
            <About></About>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <PrivateRoute path="/addbooking/:addbookingId">
            <AddBooking></AddBooking>
          </PrivateRoute>
          <PrivateRoute path="/mybooking">
            <MyBooking></MyBooking>
          </PrivateRoute>
          <PrivateRoute path="/manageallbooking">
            <ManageAllBooking></ManageAllBooking>
          </PrivateRoute>
          <PrivateRoute path="/addanewoption">
            <AddANewOption></AddANewOption>
          </PrivateRoute>
          <Route exact path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;

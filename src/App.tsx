import { ThemeProvider } from "@mui/material";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import theme from "@/constants/theme";
import Home from "@/pages/Home/Home";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Home />
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}

export default App;

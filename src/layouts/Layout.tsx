import { Box } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Box
        sx={{ minHeight: 'calc(100vh - 50px - 4.37rem)', width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;

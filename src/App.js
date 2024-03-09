import { Route, Routes } from 'react-router-dom';
import Topbar from './scenes/global/Topbar';
import Dashboard from './scenes/dashboard';
import Sidebar from './scenes/global/Sidebar';
import Team from './scenes/team';
import Invoices from './scenes/invoices';
import Contacts from './scenes/contacts';
// import Bar from './scenes/bar';
import Form from './scenes/form';
// import Line from './scenes/line';
// import Pie from './scenes/pie';
import FAQ from './scenes/faq';
// import Geograpghy from './scenes/geograpghy';
import Calendar from './scenes/calendar';
import {ColorModeContext, useMode} from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <Sidebar />
          <main className='content'>
            <Topbar />
            <Routes>
              <Route path='/' element={<Dashboard />}/>
              <Route path='/team' element={<Team />}/>
              <Route path='/contacts' element={<Contacts />}/>
              <Route path='/invoices' element={<Invoices />}/>
              <Route path='/form' element={<Form />}/>
              {/* <Route path='/line' element={<Line />}/> */}
              {/* <Route path='/bar' element={<Bar />}/> */}
              {/* <Route path='/pie' element={<Pie />}/> */}
              <Route path='/faq' element={<FAQ />}/>
              {/* <Route path='/geography' element={<Geograpghy />}/> */}
              <Route path='/calendar' element={<Calendar />}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
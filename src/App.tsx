/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import { Residential, Commercial, Municipal, Grading, Decorative } from './pages/Services';

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" richColors />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services/residential" element={<Residential />} />
          <Route path="services/commercial" element={<Commercial />} />
          <Route path="services/municipal" element={<Municipal />} />
          <Route path="services/grading" element={<Grading />} />
          <Route path="services/decorative" element={<Decorative />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


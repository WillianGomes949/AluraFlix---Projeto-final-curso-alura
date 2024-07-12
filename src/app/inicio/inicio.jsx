import Banner from '@/Components/banner/Banner';
import Footer from '@/Components/footer/Footer';
import Header from '@/Components/header/Header';
import SectionVideos from '@/Components/sectionVideos/SectionVideos';

export default function Inicio() {
  return (
    <>
      <Header />
      <Banner />
      <SectionVideos area="front end" />
      <SectionVideos area="back end" />
      <SectionVideos area="mobile" />
      <Footer />
    </>
  );
}

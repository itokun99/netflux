import { useTheme } from 'styled-components';
import BigBanner from '@components/organisms/BigBanner';

function HomePage() {

  const theme = useTheme();

  return (
    <>
      <BigBanner
        headline={`Susah Cari Kerja? Coba Kerja Koding`}
        description='Kumpulan Artikel, Loker hingga proyek yang bisa bantu kamu punya pengalaman Kerja Koding hingga bisa berkarir di Dunia IT'
        actionButtons={[
          {
            id: 0,
            title: 'Cari Kerja',
            icon: 'ic-search',
            color: 'primary',
            variant: 'contained'
          },
          {
            id: 1,
            title: 'Lihat tutorial',
            icon: 'ic-play',
            color: 'light',
            variant: 'outlined'
          }
        ]}
      />
    </>
  )
}

export default HomePage;
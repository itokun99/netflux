import MainTemplate from '@components/templates/MainTemplate';
import Input from '@components/molecules/Input';
import Container from '@components/atoms/Container';
import BigBanner from '@components/organisms/BigBanner';

function HomePage() {

  const handleChange = (value: string) => {
    console.log("handleChange", value);
  }

  const handleChangeValue = (value: string) => {
    console.log("handleChangeValue", value);
  }

  return (
    <MainTemplate>
      <BigBanner
        headline={`Susah Cari Kerja? Coba Kerja Koding`}
        description='Kumpulan lowongan kerja IT, Mulai dari IT Support hingga Senior Programmer'
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
    </MainTemplate>
  )
}

export default HomePage;
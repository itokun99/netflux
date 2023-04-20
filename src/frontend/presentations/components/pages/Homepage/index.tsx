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
        headline='Vinland Saga: The true Warrior'
        description='Young Thorfinn grew up listening to the stories of old sailors that had traveled the ocean and reached the place of legend, Vinland.'
      />
    </MainTemplate>
  )
}

export default HomePage;
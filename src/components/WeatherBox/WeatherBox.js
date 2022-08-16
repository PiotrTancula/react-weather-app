import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';

const WeatherBox = props => {

  const handleSubmit = () => {

  }

  return (
    <section>
      <PickCity action={handleSubmit} />
      <WeatherSummary />
      <Loader />
    </section>
  )
};

export default WeatherBox;
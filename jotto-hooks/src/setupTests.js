import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapterpreact-16';

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

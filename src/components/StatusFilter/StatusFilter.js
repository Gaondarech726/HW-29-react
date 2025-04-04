import { Button } from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from '../../redux/actions';
import { statusFilters } from '../../redux/constants';
import { getStatusFilter } from '../../redux/selectors';
import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.default}
        onClick={() => handleFilterChange(statusFilters.default)}
      >
        Default
      </Button>
      <Button
        selected={filter === statusFilters.favourites}
        onClick={() => handleFilterChange(statusFilters.favourites)}
      >
        Favourites
      </Button>
    </div>
  );
};

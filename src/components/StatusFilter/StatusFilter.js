import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';

// Импортируем хук
import { useSelector, useDispatch } from 'react-redux';
// Импортируем объект значений фильтра
import { statusFilters } from '../../redux/constants';
import { getStatusFilter } from '../../redux/selectors';
import { setStatusFilter } from "../../redux/actions";


export const StatusFilter = () => {
  const dispatch = useDispatch();
  // Получаем значение фильтра из состояния Redux
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
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};

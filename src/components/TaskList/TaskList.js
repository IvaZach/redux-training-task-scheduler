import { Task } from "components/Task/Task";
import css from "./TaskList.module.css";
// Импортируем хук
import { useSelector } from "react-redux";
// Импортируем объект значений фильтра
import { statusFilters } from "../../redux/constants";
import { getTasks, getStatusFilter } from "../../redux/selectors";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};


export const TaskList = () => {
  // Получаем массив задач из состояния Redux
  const tasks = useSelector(getTasks);
  // Получаем значение фильтра из состояния Redux
  const statusFilter = useSelector(getStatusFilter);
  // Вычисляем массив задач которые необходимо отображать в интерфейсе
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li key={task.id} className={css.listItem}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
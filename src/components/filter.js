export default function todoListFilter(todoList, filter) {
  if (filter === 'All') {
    return todoList;
  } else if (filter === 'Completed') {
    return todoList.filter((item) => item.isCompleted === true);
  } else if (filter === 'Uncompleted') {
    return todoList.filter((item) => item.isCompleted === false);
  }
}

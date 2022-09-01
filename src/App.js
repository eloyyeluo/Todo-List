// import taskList
import TaskList from './TaskList'
import TextField from './TextField'

function App() {
  return (
    <div class="main-Todo">
    <h1>Todo List</h1>
    {/* insert all the items in the list */}
    <TaskList/>
    {/* textfield here */}
    <TextField/>
    </div>
  );
}

export default App;

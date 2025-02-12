import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Posts } from './components/posts/Posts'
import { Header } from './components/header/Header'
import { MainPage } from './components/mainPage/MainPage'

function App() {
  // const navigate = useNavigate()

  // useEffect(() => {
  //   user && navigate('/posts')
  // }, [user])

  return (
    <BrowserRouter>
      <Header />
      {/* <ItemList /> */}
      {/* <PostsTitle /> */}
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

// export const ItemList = () => {
//   const [todos, setTodos] = useState<Schema['Todo']['type'][]>([])

//   const fetchTodos = async () => {
//     const { data: items } = await client.models.Todo.list()

//     setTodos(items)
//   }

//   useEffect(() => {
//     const sub = client.models.Todo.observeQuery().subscribe({
//       next: ({ items }) => {
//         setTodos([...items])
//       },
//     })

//     return () => sub.unsubscribe()
//   }, [])

//   const createTodo = async () => {
//     await client.models.Todo.create({
//       content: window.prompt('Todo content?'),
//       // isDone: false,
//     })

//     fetchTodos()
//   }

//   function deleteTodo(id: string) {
//     console.log(id)

//     client.models.Todo.delete({ id })
//     fetchTodos()
//   }
//   return (
//     <div style={{ marginTop: '200px' }}>
//       <button onClick={createTodo}>Add new todo</button>
//       <ul>
//         {todos.map(({ id, content }) => (
//           <li key={id} onClick={() => deleteTodo(id)}>
//             {content}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Posts } from './components/posts/Posts'
import { Header } from './components/header/Header'
import { MainPage } from './components/mainPage/MainPage'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

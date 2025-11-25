import MyComponent from '../components/MyComponent'
import logo from '../assets/react.svg'

export default function Home() {
  return (
    <div className="pt-20 h-screen flex flex-col items-center justify-center bg-gray-500 space-y-6">
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-32 h-32 mb-4" />
      
      <h1 className="text-6xl text-white font-bold">Hello Tailwind!</h1>
      
      <MyComponent />
    </div>
  )
}
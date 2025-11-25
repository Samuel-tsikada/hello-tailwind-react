// src/MyComponent.jsx
import ReactLogo from '../assets/react.svg';

export default function MyComponent() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img className="h-12 w-12" src={ReactLogo} alt="React Logo" />
      </div>
      <div>
        <div className="text-xl font-medium text-black">Welcome to React + Tailwind!</div>
        <p className="text-gray-500">This component now uses the React logo and custom text.</p>
      </div>
    </div>
  )
}
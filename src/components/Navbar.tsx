import { SiBandsintown } from 'react-icons/si'
import { RiAccountCircleFill } from 'react-icons/ri'

const Navbar = () => {
  return (
    <>
      <div className="flex bg-black text-white p-4 justify-between">
        <div className="flex gap-2">
          <SiBandsintown className="mt-1 ms-3" />
          <h1>The TownSquare</h1>
        </div>

        <button>
          <RiAccountCircleFill className="text-2xl" />
        </button>
      </div>
    </>
  )
}

export default Navbar

import Image from "next/image"
import HeaderItem from "./HeaderItem"
import {
  HomeIcon,
  RectangleStackIcon,
  CheckBadgeIcon,
  MagnifyingGlassIcon,
  BoltIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex grow justify-evenly max-w-2xl">
          <HeaderItem title='HOME' Icon={HomeIcon}/>
          <HeaderItem title='TRENDING' Icon={BoltIcon}/>
          <HeaderItem title='VERIFIED' Icon={CheckBadgeIcon}/>
          <HeaderItem title='COLLECTIONS' Icon={RectangleStackIcon}/>
          <HeaderItem title='SEARCH' Icon={MagnifyingGlassIcon}/>
          <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
        </div>
        <Image className="object-contain" src='https://cdn-icons-png.flaticon.com/512/6567/6567926.png' width={100} height={80} alt="Logo" />
    </header>
  )
}

export default Header
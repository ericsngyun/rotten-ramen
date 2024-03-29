import Image from 'next/image'
import { AspectRatio } from "@/components/ui/AspectRatio"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/NavigationMenu"
import TopContent from '@/containers/TopContent'


export default function Home() {


  return (
    <>
      <div className = "flex-col px-8">
        <div className = "flex gap-4 w-[75vw]">
          <TopContent/>
        </div>
      </div>
    </>
  )
}

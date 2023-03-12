import Image from 'next/image'
import { AspectRatio } from "@/components/ui/AspectRatio"


export default function Home() {
  return (
    <main>
      <div className = "flex-col">
        <AspectRatio
        >
          <Image 
            src = "/eminence1.png"
            alt = "Eminence of Shadow"
            height = {200}
            width = {400}
            className = "rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    </main>
  )
}

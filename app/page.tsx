import Image from "next/image"
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { SiWantedly } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Button } from "@/components/ui/button"
import { List, ListItem } from "@/components/ui/list"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full space-y-6">
        <div className="flex flex-col items-center">
          <Image
            src="/images/mitton_icon.png"
            alt="Profile Picture"
            width={120}
            height={120}
            className="rounded-full"
          />
          <h1 className="mt-4 text-2xl font-bold text-gray-800">mitton</h1>
          <p className="text-gray-600">Software Engineer</p>
        </div>

        <p className="text-center text-gray-700">
          Welcome to my personal website!
          <br />
          [WIP]
        </p>

        <List>
          <ListItem>
            <Button variant="outline" className="w-full" asChild>
              <a href="https://github.com/edmitton" target="_blank" rel="noopener noreferrer">
                <FaGithub className="mr-2 h-4 w-4" />
              </a>
            </Button>
          </ListItem>
          <ListItem>
            <Button variant="outline" className="w-full" asChild>
              <a href="https://x.com/ed_mitton" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="mr-2 h-4 w-4" />
              </a>
            </Button>
          </ListItem>
          <ListItem>
            <Button variant="outline" className="w-full" asChild>
              <a href="https://www.wantedly.com/id/taisei_mitomi" target="_blank" rel="noopener noreferrer">
                <SiWantedly className="mr-2 h-4 w-4" />
              </a>
            </Button>
          </ListItem>
          <ListItem>
            <Button variant="outline" className="w-full" asChild>
              <a href="https://sizu.me/mitton" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/sizume.png"
                  alt="sizu.me"
                  className="mr-2 h-4 w-4"
                  width={16}
                  height={16}
                />
              </a>
            </Button>
          </ListItem>
          <ListItem>
            <Button variant="outline" className="w-full" asChild>
              <a href="https://www.linkedin.com/in/taisei-mitomi-29a189294/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="mr-2 h-4 w-4" />
              </a>
            </Button>
          </ListItem>
          <ListItem>
            <Button variant="outline" className="w-full" asChild>
              <a href="https://www.instagram.com/_edmton_33/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="mr-2 h-4 w-4" />
              </a>
            </Button>
          </ListItem>
        </List>
      </div>
    </div>
  )
}


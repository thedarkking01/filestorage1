import { Button } from "@/components/ui/button";
import {
  OrganizationSwitcher,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useSession,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <div className="relative z-10 border-b py-4 bg-[#f1f5f9]">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        <Link href="/" className="flex gap-2 items-center text-xl text-black">
          <Image src="/filelogo1.png" width="50" height="50" alt="file drive logo" />
          FileStorage
        </Link>

        <div className="flex items-center gap-2 mt-4 sm:mt-0">
          <SignedIn>
            <Button variant={"outline"} className="mr-2">
              <Link href="/dashboard/files">Your Files</Link>
            </Button>
          </SignedIn>
          
          <OrganizationSwitcher />
          <UserButton />
          <SignedOut>
            <SignInButton>
              <Button>Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}

'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { useUser, useClerk } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRightStartOnRectangleIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'
import { Button } from './ui/button'

export const UserButton = () => {
  const { signOut, openUserProfile } = useClerk()
  const router = useRouter()
  const { isLoaded, user } = useUser()

  // Make sure that the useUser() hook has loaded
  if (!isLoaded) return null
  // Make sure there is valid user data
  if (!user?.id) return null

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Separator className="h-px bg-border" />
      <DropdownMenu.Trigger asChild>
        <button className="flex flex-row items-center gap-3 p-2">
          {/* Your avatar, text, etc. */}
          <Image
            alt={user?.primaryEmailAddress?.emailAddress!}
            src={user?.imageUrl}
            width={30}
            height={30}
            className="rounded-full"          
          />
          {user?.username ? user.username : user?.primaryEmailAddress?.emailAddress!}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side="top"
          align="start"
          sideOffset={15}
          className="z-50 ml-1 w-40 rounded-md border border-border bg-background px-2 py-0.6 text-foreground"
        >
          <DropdownMenu.Label />
          <DropdownMenu.Group className="py-3">
            <DropdownMenu.Item asChild>
              <Button
                onClick={() => openUserProfile()}
                variant="menu"
                size="dropdown"
              >
                <UserCircleIcon className="mr-2 h-5 w-auto" />
                계정
              </Button>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <Link href="/subscriptions" passHref>
                <Button variant="menu" size="dropdown">
                  <CurrencyDollarIcon className="mr-2 h-5 w-auto" />
                    구독 관리
                </Button>
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Separator className="mx-0.4 my-1 h-px bg-border" />
            <DropdownMenu.Item asChild>
              <Button 
                onClick={() => signOut(() => router.push('/'))} 
                variant="menu"
                size="dropdown"
              >
                <ArrowRightStartOnRectangleIcon className="mr-2 h-5 w-auto" />
                로그아웃
              </Button>
            </DropdownMenu.Item>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}



// 'use client'

// import * as React from 'react'
// import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
// import { useUser, useClerk } from '@clerk/nextjs'
// import { useRouter } from 'next/navigation'
// import Image from 'next/image'
// import Link from 'next/link'
// import {
//   ArrowPathIcon,
//   ArrowRightCircleIcon,
//   ArrowRightEndOnRectangleIcon,
//   CurrencyDollarIcon,
//   UserIcon,
// } from '@heroicons/react/24/solid'
// import { VariantProps, cva } from 'class-variance-authority'

// const button = cva(['flex', 'flex-row', 'items-center', 'rounded-xl'], {
//   variants: {
//     variant: {
//       primary: [
//         'border',
//         'border-gray-200',
//         'bg-white',
//         'text-black',
//         'drop-shadow-md',
//         'hover:bg-stone-100',
//         'hover:text-stone-800',
//         'justify-center',
//       ],
//       accent: [
//         'border',
//         'border-stone-950',
//         'bg-stone-800/70',
//         'hover:bg-stone-950',
//         'text-stone-200',
//         'justify-center',
//       ],
//       menu: [
//         'w-full',
//         'justify-start',
//         'bg-transparent',
//         'hover:bg-stone-800/70',
//         'text-gray-800/70',
//         'hover:text-stone-100',
//         'px-4',
//         'rounded-sm',
//       ],
//     },
//     size: {
//       regular: ['px-4', 'py-3'],
//       small: ['py-3', 'py-2'],
//     },
//   },
//   defaultVariants: {
//     variant: 'primary',
//     size: 'regular',
//   },
// })

// interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof button> {}

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ variant, size, children, className, ...props }, ref) => {
//     return (
//       <button ref={ref} className={button({ variant, size, className })} {...props}>
//         {children}
//       </button>
//     )
//   },
// )

// // Create a new UserButtonandMenu component and move the old return into this
// const UserButtonAndMenu = () => {
//   const { user } = useUser()
//   const { signOut, openUserProfile } = useClerk()
//   const router = useRouter()
//   const label = user?.firstName ? user.firstName : 'Profile'

//   return (
//     <DropdownMenu.Root>
//       <DropdownMenu.Trigger asChild className="outline-none">
//         <Button variant="accent" className="min-w-[192px]">
//           {user?.hasImage ? (
//             <Image
//               alt={label ? label : 'Profile image'}
//               src={user?.imageUrl}
//               width={30}
//               height={30}
//               className="border-stone-950 mr-2 rounded-full border drop-shadow-sm"
//             />
//           ) : (
//             <UserIcon className="mr-2 h-6 w-auto" />
//           )}
//           {label}
//         </Button>
//       </DropdownMenu.Trigger>
//       <DropdownMenu.Portal>
//         <DropdownMenu.Content className="mt-4 w-52 rounded-xl border border-gray-200 bg-white px-2 py-2 text-black drop-shadow-2xl">
//           <DropdownMenu.Label />
//           <DropdownMenu.Group className="py-1">
//             <DropdownMenu.Item asChild className="outline-none">
//               <Button
//                 onClick={() => openUserProfile()}
//                 className="pb-3"
//                 variant="menu"
//                 size="small"
//               >
//                 <UserIcon className="mr-2 h-6 w-auto" />
//                 Profile
//               </Button>
//             </DropdownMenu.Item>
//             <DropdownMenu.Item asChild className="outline-none">
//               <Link href="/subscriptions" passHref>
//                 <Button className="py-2" variant="menu" size="small">
//                   <CurrencyDollarIcon className="mr-2 h-6 w-auto" />
//                   Subscription
//                 </Button>
//               </Link>
//             </DropdownMenu.Item>
//           </DropdownMenu.Group>
//           <DropdownMenu.Separator className="my-1 h-px bg-gray-200" />
//           <DropdownMenu.Item asChild className="outline-none">
//             <Button
//               onClick={() => signOut(() => router.push('/'))}
//               className="py-3"
//               variant="menu"
//               size="small"
//             >
//               <ArrowRightEndOnRectangleIcon className="mr-2 h-5 w-auto" /> Sign Out
//             </Button>
//           </DropdownMenu.Item>
//         </DropdownMenu.Content>
//       </DropdownMenu.Portal>
//     </DropdownMenu.Root>
//   )
// }

// export const UserButton = () => {
//   const { isLoaded, user } = useUser()
//   const { openSignIn } = useClerk()

//   if (!isLoaded)
//     return (
//       <Button onClick={() => openSignIn()} className="w-48">
//         <ArrowPathIcon className="ml-2 h-6 w-auto animate-spin" />
//       </Button>
//     )

//   if (!user?.id)
//     return (
//       <Button onClick={() => openSignIn()} className="w-48">
//         Sign In
//         <ArrowRightCircleIcon className="ml-2 h-6 w-auto" />
//       </Button>
//     )

//   return <UserButtonAndMenu />
// }
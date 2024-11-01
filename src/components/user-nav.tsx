import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/custom/button'
import {
  DropdownMenu,
  DropdownMenuContent,
//   DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
//   DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { toast } from '@/components/ui/use-toast'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export function UserNav() {

    const navigate                              = useNavigate();
    const selfInfoInLocalDb                     = useSelector((state: RootState) => state.database.SelfInfo);


    const logout = async () => {
        try {
            await signOut(auth);
            toast({title: 'You have been logged out successfully', description: 'You will be redirected to the sign-in page'})
            navigate('/sign-in', {replace: true});
          } 
        catch (error) {
            console.error("Error signing out:", error);
        }
    }

    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
            <Avatar className='h-8 w-8'>
                <AvatarImage src='/avatars/01.png' alt='@shadcn' />
                <AvatarFallback>
                    {selfInfoInLocalDb?.name ? 
                        selfInfoInLocalDb.name.split(' ').length === 1 ? 
                            selfInfoInLocalDb.name.substring(0, 2) : 
                            selfInfoInLocalDb.name.split(' ').slice(0, 2).map(word => word[0]).join('') 
                        : 
                        '..'}
                </AvatarFallback>
            </Avatar>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56' align='end' forceMount>
            <DropdownMenuLabel className='font-normal'>
            <div className='flex flex-col space-y-1'>
                <p className='text-sm font-medium leading-none'>{selfInfoInLocalDb?.name ? selfInfoInLocalDb?.name : '...'}</p>
                <p className='text-xs leading-none text-muted-foreground'>
                {selfInfoInLocalDb?.email ? selfInfoInLocalDb?.email : '...'}
                </p>
            </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            {/* <DropdownMenuGroup>
            <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
                Billing
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>New Team</DropdownMenuItem>
            </DropdownMenuGroup> */}

            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <Button variant='ghost' onClick={logout}>
                Log out
            </Button>
            </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    )
}

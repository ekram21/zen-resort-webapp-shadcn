import { z } from 'zod'

import {  useForm } from 'react-hook-form'
import { Button } from '@/components/custom/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { toast } from '@/components/ui/use-toast'
import { sendPasswordResetEmail } from "firebase/auth";
import {auth} from "../../../firebase";
import { zodResolver } from '@hookform/resolvers/zod'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { useEffect } from 'react'
import { decodeString } from '@/lib/utils'

const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .max(30, {
      message: 'Username must not be longer than 30 characters.',
    }),
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email()
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

const defaultValues: ProfileFormValues = {
    username        : '',
    email           : '',
}

export default function ProfileForm() {

    const selfInfoInLocalDb                     = useSelector((state: RootState) => state.database.SelfInfo);

    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileFormSchema),
        defaultValues,
        mode: 'onChange',
    });

    useEffect(()=>{
        if (selfInfoInLocalDb) {
            form.setValue('username', decodeString(selfInfoInLocalDb.name));
            form.setValue('email', decodeString(selfInfoInLocalDb.email));
        }
    }, [selfInfoInLocalDb, form]);

    function onSubmit(data: ProfileFormValues) {
        toast({
        title: 'You submitted the following values:',
        description: (
            <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
                <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
            </pre>
        ),
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>

                <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder='Zen Hotel' {...field} />
                            </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder='Zen Hotel' {...field} />
                            </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />

                <Button type='submit' className='w-full'>Update Account</Button>
            </form>
            <Button onClick={()=>{
                sendPasswordResetEmail(auth, decodeString(selfInfoInLocalDb.email))
                .then(() => {
                    toast({title: `Password reset email sent to ${decodeString(selfInfoInLocalDb.email)}. Please check your spam folder if you cannot find it.`})
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    toast({title: errorMessage})
                });
            }} type='button' className='w-full mt-2 bg-red-600 hover:bg-orange-600'>Reset Password</Button>
        </Form>
    )
}

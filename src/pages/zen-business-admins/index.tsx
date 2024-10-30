import { Layout } from '@/components/custom/layout'
import ThemeSwitch from '@/components/theme-switch'
import HeaderUnrestrictedPages from '@/components/header-unrestricted-pages'
import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { OtpForm } from './components/otp-form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/custom/button'
import { PasswordInput } from '@/components/custom/password-input'
import { cn } from '@/lib/utils'
import {auth} from "../../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from '@/components/ui/use-toast';
import CloudDatabase from '@/api/CloudDatabase'


const formSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: 'Please enter business name' }),
    email: z
      .string()
      .min(1, { message: 'Please enter email' })
      .email({ message: 'Invalid email address' }),
    phone: z
      .string()
      .min(1, { message: 'Please enter phone number' }),
    password: z
      .string()
      .min(1, {
        message: 'Please enter password',
      })
      .min(7, {
        message: 'Password must be at least 7 characters long',
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ['confirmPassword'],
  })

export default function ZenBusinessAdmins() {
    const [isPinVerified, setIsPinVerified]     = useState(false);
    const [isLoading, setIsLoading]             = useState(false);
    const navigate                              = useNavigate();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        email: '',
        password: '',
        confirmPassword: '',
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        setIsLoading(true);
        console.log(data);

        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log('User created:', user);

                const newAccountUpdates: {[key: string]: {
                    name: string;
                    email: string;
                    phone: string;
                    role: string;
                }} = {};
                newAccountUpdates[`ZEN-Business-Accounts/${user.uid}/SelfInfo`] = {
                    name            : data.name,
                    email           : data.email,
                    phone           : data.phone,
                    role            : 'hotel-admin',
                };
                CloudDatabase.update(newAccountUpdates);

                setIsLoading(false);
                toast({title: 'New Business Account created successfully!'});

                //navigate to login page
                navigate('/sign-in');
            })
            .catch((error) => {
                const errorMessage        = error.message;
                //show an error toast with all values
                toast({title: errorMessage});
                setIsLoading(false);
            });
    }

  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header>
        <HeaderUnrestrictedPages activeRoute='/zen-business-admins' />
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
        </div>
      </Layout.Header>

      <Layout.Body>
        {isPinVerified === false ? (
          <>
            <div
              className='flex items-center justify-center'
              style={{ height: '80vh' }}
            >
              <div>
                <Card className='p-6'>
                  <div className='mb-2 flex flex-col space-y-2 text-left'>
                    <h1 className='text-md font-semibold tracking-tight'>
                      Zen Business Admin
                    </h1>
                    <p className='text-sm text-muted-foreground'>
                      Please enter the special code to access this area.
                    </p>
                  </div>
                  <OtpForm verify_pin_callback={setIsPinVerified} />
                </Card>
              </div>
            </div>
          </>
        ) : (
          <>
          
            <div
              className='flex items-center justify-center'
              style={{ height: '80vh' }}
            >
                <Card className='p-6' style={{ width: '35%' }}>
                    <div className='mb-2 flex flex-col space-y-2 text-left'>
                    <h1 className='text-lg font-semibold tracking-tight'>
                        Create Business Account
                    </h1>
                    <p className='text-sm text-muted-foreground'>
                        Enter email and password to create an account. <br />
                    </p>
                    </div>
                    <div className={cn('grid gap-6')}>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)}>
                                    <div className='grid gap-2'>
                                        <FormField
                                        control={form.control}
                                        name='name'
                                        render={({ field }) => (
                                            <FormItem className='space-y-1'>
                                            <FormLabel>Business Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder='e.g Izakaya' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                            </FormItem>
                                        )}
                                        />
                                        <FormField
                                        control={form.control}
                                        name='email'
                                        render={({ field }) => (
                                            <FormItem className='space-y-1'>
                                            <FormLabel>Business Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder='name@example.com' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                            </FormItem>
                                        )}
                                        />
                                        <FormField
                                        control={form.control}
                                        name='phone'
                                        render={({ field }) => (
                                            <FormItem className='space-y-1'>
                                            <FormLabel>Business Phone</FormLabel>
                                            <FormControl>
                                                <Input placeholder='e.g 01700766173' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                            </FormItem>
                                        )}
                                        />
                                        <FormField
                                        control={form.control}
                                        name='password'
                                        render={({ field }) => (
                                            <FormItem className='space-y-1'>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <PasswordInput placeholder='********' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                            </FormItem>
                                        )}
                                        />
                                        <FormField
                                        control={form.control}
                                        name='confirmPassword'
                                        render={({ field }) => (
                                            <FormItem className='space-y-1'>
                                            <FormLabel>Confirm Password</FormLabel>
                                            <FormControl>
                                                <PasswordInput placeholder='********' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                            </FormItem>
                                        )}
                                        />
                                        <Button className='mt-2' loading={isLoading}>
                                        Create Account
                                        </Button>

                                        <div className='relative my-2'>
                                        <div className='absolute inset-0 flex items-center'>
                                            <span className='w-full border-t' />
                                        </div>

                                        </div>


                                    </div>
                                </form>
                            </Form>
                    </div>

                </Card>
                
            </div>
          
          
          
          
          
          </>
        )}
      </Layout.Body>
    </Layout>
  )
}

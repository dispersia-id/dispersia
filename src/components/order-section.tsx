'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa6';
import { z } from 'zod';
import { Button } from './ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { Input } from './ui/input';

const formSchema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
  phone: z.string().min(10).max(15),
  message: z.string().min(10).max(255),
});
export default function OrderSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  // biome-ignore lint/suspicious/noEmptyBlockStatements: <explanation>
  function onSubmit(_values: z.infer<typeof formSchema>) {}
  return (
    <section className='layout min-h-screen flex snap-center font-gabarito font-semibold '>
      <div className='flex flex-col  w-full space-y-11'>
        <div className='mx-auto '>
          <h1 className='text-4xl text-center'>focus on your event,</h1>
          <h1 className='text-4xl text-center'>
            let us take care of the website!
          </h1>
          <div className='flex justify-center space-x-4 pt-4'>
            <FaTiktok color='gray' size={30} />
            <FaInstagram color='gray' size={30} />
            <FaLinkedin color='gray' size={30} />
          </div>
        </div>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='space-y-6 w-[50%] mx-auto'
            >
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder='Name' {...field} />
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
                    <FormControl>
                      <Input placeholder='Email' {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='phone'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder='Phone Number' {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder='Message' {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className='w-full bg-disper-blue hover:bg-disper-blue/85'
                type='submit'
              >
                Send
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}

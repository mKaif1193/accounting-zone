"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ApiResponse } from "@/types/ApiResponse";
import axios, { AxiosError } from "axios";
import { contactMessageSchema } from "@/schemas/contactMessageSchema";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Slider from "@/components/Slider";

const images = ["/contact/pexels-vlada-karpovich-7433853-s.jpg"];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactMessageSchema>>({
    resolver: zodResolver(contactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      reason: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof contactMessageSchema>) => {
    setIsSubmitting(true);

    try {
      const response = await axios.post<ApiResponse>(
        "/api/contact-message",
        data
      );
      toast({
        title: "Success",
        description: response.data.message,
      });
    } catch (error) {
      console.error("Error in sending message! : ", error);
      const axiosError = error as AxiosError<ApiResponse>;
      const errorMessage = axiosError.response?.data.message;
      toast({
        title: "Message Send Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen space-y-16 sm:space-y-24 md:space-y-36 lg:space-y-48">
      <Slider images={images} />

      <div className="overflow-hidden mx-auto container max-w-[1300px] py-10 md:py-15 lg:py-28 xl:py-40">
        <section
          id="contact-us"
          className="container px-8 mx-auto lg:w-[1300px] flex flex-col lg:flex-row gap-20"
        >
          <div className="space-y-6 sm:space-y-8">
            <h1
              className="text-lg sm:text-xl mt-12 xl:mt-2 lg:text-3xl text-[#fbc710] md:text-2xl uppercase"
              data-aos="fade"
            >
              CONTACT US
            </h1>
            <h2
              className="text-2xl sm:text-4xl lg:text-5xl font-semibold"
              data-aos="fade"
            >
              Expert
              <span className="text-yellow-500"> Financial Guidance</span> Just
              a Call Away
            </h2>

            <p className="text-base md:text-lg text-gray-700" data-aos="fade">
              To contact us, please complete the form below. We will use your
              information to communicate with you regarding your inquiry or
              request.
            </p>
          </div>

          <div
            className="container hidden sm:block mb-10 mx-auto lg:max-w-[450px]"
            data-aos="fade"
          >
            <Image
              src="/about/about2.jpg"
              alt="About Hero"
              width={800}
              height={300}
              className="block w-full h-auto"
            />
          </div>
        </section>

        <section id="get-in-touch" className="container px-8 mx-auto">
          <div className="relative py-10 md:py-15 mx-auto lg:py-28">
            <div className="mb-8 space-y-5 md:mb-12" data-aos="fade">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl mx-auto lg:text-5xl text-[#fbc710] font-semibold"
                data-aos="fade"
              >
                Get in touch
              </h2>
              <p className="text-base md:text-lg text-gray-700" data-aos="fade">
                We are here to answer any questions you may have. Feel free to
                reach us via the contact form.
              </p>
            </div>
            <div className="space-y-6 mb-6 sm:mb-14">
              <ul className="sspace-y-3 sm:spacde-y-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center text-lg sm:text-xl">
                <li>
                  <Link
                    href="tel:+17606860609"
                    className="flex items-center gap-6 text-black transition-colors duration-300 hover:text-[#fbc710]"
                  >
                    <FaPhone className="size-6" /> +1-760-686-0609
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:info@accountingszone.com"
                    className="flex items-center gap-6 text-black transition-colors duration-300 hover:text-[#fbc710]"
                  >
                    <MdEmail className="size-4 sm:size-7" />
                    info@accountingszone.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://g.co/kgs/82Pdpx9"
                    className="flex items-center gap-6 text-black transition-colors duration-300 hover:text-[#fbc710]"
                  >
                    <FaMapMarkerAlt className="size-4 sm:size-7" /> 124 S
                    Gemstone Street, Ridgecrest California 93555
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="contact-form"
          className="container px-8 mx-auto flex flex-col sm:gap-20"
        >
          <div className="relative sm:py-10 md:py-15 mx-auto md:mx-0">
            <div className="mb-8 sm:mb-12" data-aos="fade">
              <h2
                className="text-2xl sm:text-3xl mb-4 md:text-4xl mx-auto lg:text-5xl text-[#fbc710] font-semibold"
                data-aos="fade"
              >
                Contact Form
              </h2>
            </div>
          </div>

          <div className="sm:mb-6 p-4 md:mb-14">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 grid grid-cols-3"
              >
                <FormField
                  name="name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter your full name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="example@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="phone"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone number</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="1-234-567-8910"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="company"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter your company name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="reason"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Reason</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter reason"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="subject"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter subject"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="message"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter your message here..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  variant="acc"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                      wait
                    </>
                  ) : (
                    "Send"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </section>
      </div>
    </main>
  );
}

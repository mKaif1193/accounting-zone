"use client";
import React, { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { taxFilingFormSchema } from "@/schemas/taxFilingFormSchema";
import { ApiResponse } from "@/types/ApiResponse";
import axios, { AxiosError } from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { usaStates } from "@/lib/usaStates";
import ProgressBar from "@/components/ProgressBar";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

export default function TaxFilingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const taxYears = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];

  const form = useForm<z.infer<typeof taxFilingFormSchema>>({
    resolver: zodResolver(taxFilingFormSchema),
    defaultValues: {
      name: "",
      birthday: "",
      phoneNumber: "",
      email: "",
      facebookName: "",
      instagramName: "",
      taxYear: "2024",
      cashAdvance: "none",
      firstName: "",
      middleName: "",
      lastName: "",
      ssn: "",
      confirmSSN: "",
      streetAddress: "",
      addressLine2: "",
      city: "",
      state: "",
      zipCode: "",
      occupation: "",
      refundOption: "directDeposit",
    },
  });

  const onSubmit = async (data: z.infer<typeof taxFilingFormSchema>) => {
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

  const totalSteps = 3;
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (
      currentStep === 1 &&
      (!form.control._formValues.name ||
        !form.control._formValues.birthday ||
        !form.control._formValues.phoneNumber ||
        !form.control._formValues.email ||
        !form.control._formValues.taxYear)
    ) {
      return;
    } else if (
      currentStep === 2 &&
      (!form.control._formValues.cashAdvance ||
        !form.control._formValues.firstName ||
        !form.control._formValues.lastName ||
        !form.control._formValues.ssn ||
        !form.control._formValues.confirmSSN)
    ) {
      return;
    } else if (
      currentStep === 3 &&
      (!form.control._formValues.streetAddress ||
        !form.control._formValues.state ||
        !form.control._formValues.city ||
        !form.control._formValues.zipCode ||
        !form.control._formValues.occupation ||
        !form.control._formValues.refundOption)
    ) {
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen space-y-16 sm:space-y-24 md:space-y-36 lg:space-y-48">
      <div className="overflow-hidden md:my-[100px] py-10 md:py-15 lg:py-28">
        <header className="container mx-auto w-[90%] lg:w-[73%] mt-[60px]">
          <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl">
            Tax Filing Form – With Andleeb Dhar
          </h1>
        </header>

        <section
          id="tax-filing-form"
          className="container max-w-[1300px] my-[150px] px-8 mx-auto flex flex-col gap-16 sm:gap-20"
        >
          <p className="text-lg sm:text-2xl text-gray-500">
            Filling out the form is for information collection, and an agent
            will contact you within 0–24 hours.
          </p>

          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-y-20"
            >
              <div className={`space-y-8 ${currentStep !== 1 && "hidden"}`}>
                <h3 className="text-2xl font-bold" data-aos="fade">
                  Contact Section
                </h3>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center"
                  data-aos="fade"
                >
                  <FormField
                    name="name"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name *</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter name"
                            required
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="birthday"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Birthday *</FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            required
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="phoneNumber"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Enter phone number"
                            required
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
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
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter email address"
                            required
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className={`space-y-8 ${currentStep !== 1 && "hidden"}`}>
                <h3 className="text-2xl font-bold" data-aos="fade">
                  Tax Information
                </h3>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center"
                  data-aos="fade"
                >
                  <FormField
                    name="taxYear"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tax Year You&apos;re Filing For *</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            required
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select Year" />
                            </SelectTrigger>
                            <SelectContent>
                              {taxYears.map((year) => (
                                <SelectItem key={year} value={year.toString()}>
                                  {year}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className={`space-y-8 ${currentStep !== 2 && "hidden"}`}>
                <h3 className="text-2xl font-bold" data-aos="fade">
                  Cash Advance Options
                </h3>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center"
                  data-aos="fade"
                >
                  <FormField
                    name="cashAdvance"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Do You Want to Apply for a $7,000 Cash Advance? *
                        </FormLabel>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          required
                        >
                          <FormControl>
                            <div>
                              <div className="flex items-center gap-x-2">
                                <RadioGroupItem value="max" id="max" />
                                <Label htmlFor="max">
                                  Yes, I want the max up to $7,000
                                </Label>
                              </div>
                              <div className="flex items-center gap-x-2">
                                <RadioGroupItem value="partial" id="partial" />
                                <Label htmlFor="partial">
                                  Yes, I want an advance between $250 - $1,000
                                </Label>
                              </div>
                              <div className="flex items-center gap-x-2">
                                <RadioGroupItem value="none" id="none" />
                                <Label htmlFor="none">
                                  No, I don&apos;t want an advance
                                </Label>
                              </div>
                            </div>
                          </FormControl>
                        </RadioGroup>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className={`space-y-8 ${currentStep !== 2 && "hidden"}`}>
                <h3 className="text-2xl font-bold" data-aos="fade">
                  Personal Information
                </h3>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center"
                  data-aos="fade"
                >
                  <FormField
                    name="firstName"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name *</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter first name"
                            required
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="middleName"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Middle Name</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter middle name"
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="lastName"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name *</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter last name"
                            required
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="ssn"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Taxpayer&apos;s Social Security Number *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter social security number"
                            required
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="confirmSSN"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Social Security Number *</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter confirm social security number"
                            required
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className={`space-y-8 ${currentStep !== 3 && "hidden"}`}>
                <h3 className="text-2xl font-bold" data-aos="fade">
                  Address Details
                </h3>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center"
                  data-aos="fade"
                >
                  <FormField
                    name="streetAddress"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Street Address *</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter street address"
                            required
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="addressLine2"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address Line 2</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter address line 2"
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="city"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City *</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter city"
                            required
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="state"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State *</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select State" />
                            </SelectTrigger>
                            <SelectContent>
                              {usaStates.map((state, index) => (
                                <SelectItem
                                  key={index}
                                  value={state.abbreviation}
                                >
                                  {state.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="zipCode"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ZIP Code *</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter zip code"
                            required
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className={`space-y-8 ${currentStep !== 3 && "hidden"}`}>
                <h3 className="text-2xl font-bold" data-aos="fade">
                  Address Information
                </h3>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center"
                  data-aos="fade"
                >
                  <FormField
                    name="occupation"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Occupation</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter occupation"
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="refundOption"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How Would You Like Your Refund?</FormLabel>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="text-black"
                        >
                          <FormControl>
                            <div>
                              <div className="flex items-center gap-x-2">
                                <RadioGroupItem
                                  value="directDeposit"
                                  id="directDeposit"
                                />
                                <Label htmlFor="directDeposit">
                                  Direct Deposit
                                </Label>
                              </div>
                              <div className="flex items-center gap-x-2">
                                <RadioGroupItem
                                  value="prepaidCard"
                                  id="prepaidCard"
                                />
                                <Label htmlFor="prepaidCard">
                                  Prepaid Card
                                </Label>
                              </div>
                            </div>
                          </FormControl>
                        </RadioGroup>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-y-4 justify-between">
                <Button
                  data-aos="fade"
                  className="duration-300 sm:w-36 w-24 sm:h-12 h-10 text-sm sm:text-lg rounded-none bg-[#fbc710] hover:bg-[#e2b512] text-black font-normal uppercase"
                  onClick={previousStep}
                  disabled={currentStep === 1}
                >
                  PREVIOUS
                </Button>
                {currentStep < totalSteps ? (
                  <Button
                    data-aos="fade"
                    className="duration-300 sm:w-36 w-24 sm:h-12 h-10 text-sm sm:text-lg rounded-none bg-[#fbc710] hover:bg-[#e2b512] text-black font-normal uppercase"
                    onClick={nextStep}
                    disabled={currentStep === totalSteps}
                  >
                    NEXT
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    data-aos="fade"
                    className="duration-300 w-36 h-12 text-lg rounded-none bg-[#fbc710] hover:bg-[#e2b512] text-black font-normal uppercase"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> PLEASE
                        WAIT
                      </>
                    ) : (
                      "SUBMIT"
                    )}
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </section>
      </div>
    </div>
  );
}

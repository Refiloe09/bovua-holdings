"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const subsidiaries = [
  {
    name: "Energy",
    logo: "/logos/bovua-energy-logo.png",
  },
  {
    name: "Logistics",
    logo: "/logos/bovua-logistics-logo.png",
  },
  {
    name: "Properties",
    logo: "/logos/bovua-properties-logo.png",
  },
];

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  phone: Yup.string()
  .matches(/^[0-9]{10}$/, "Phone number must contain exactly 10 digits (no spaces or special characters).")
  .required("Phone number is required"),
  message: Yup.string().required("Message is required"),
  subsidiary: Yup.string().required("Please select a service"),
});

interface FormValues {
    name: string;
    email: string;
    phone: string;
    message: string;
    subsidiary: string;
  }

export default function ContactPage() {
    const [feedback, setFeedback] = useState<string | null>(null);
  const heroRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power3.out" }
    );
    gsap.fromTo(
      logoRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 0.5, ease: "power3.out" }
    );
  }, []);

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setFeedback(null);  // Reset feedback

    grecaptcha.ready(async () => {
      const token = await grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "",
        { action: "submit" }
      );

      if (token) {
        const fullFormData = {
          ...values,
          token,
        };

        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(fullFormData),
          });

          setSubmitting(false);

          if (response.ok) {
            setFeedback("Thank you for reaching out! We will get back to you soon.");
          } else {
            setFeedback("There was an issue submitting the form. Please try again.");
          }
        } catch (error) {
          console.error(error);
          setSubmitting(false);
          setFeedback("An unexpected error occurred. Please try again.");
        }
      }
    });
  };

  return (
    <section className="relative min-h-screen bg-white">
      <div
        ref={heroRef}
        className="relative h-[30vh] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/backgrounds/map-background.jpg')", backgroundAttachment: "fixed" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <div ref={logoRef}>
            <Image src="/logos/bovua-holdings.png" alt="Bovua Holdings" width={400} height={150} priority />
          </div>
          <motion.h1 className="text-6xl font-bold text-light">Contact Us</motion.h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-20">
        <motion.h2 className="text-center text-3xl font-semibold mb-12">
          Reach out to Bovua Holdings or any of our subsidiaries.
        </motion.h2>

        <div className="grid grid-cols-3 gap-8 mb-12">
          {subsidiaries.map((sub, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image src={sub.logo} alt={sub.name} width={120} height={120} />
              <p className="mt-4 font-medium">{sub.name}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Form Section */}
          <Formik
            initialValues={{ name: "", email: "", phone: "", message: "", subsidiary: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="space-y-6">
              <Field name="name" placeholder="Name" className="w-full p-3 border rounded-md" />
              <ErrorMessage name="name" component="div" className="text-red-500" />

              <Field name="email" type="email" placeholder="Email" className="w-full p-3 border rounded-md" />
              <ErrorMessage name="email" component="div" className="text-red-500" />

              <Field name="phone" type="tel" placeholder="Phone" className="w-full p-3 border rounded-md" />
              <ErrorMessage name="phone" component="div" className="text-red-500" />

              <Field name="subsidiary" as="select" className="w-full p-3 border rounded-md">
                <option value="">Choose Service</option>
                {subsidiaries.map((sub, index) => (
                  <option key={index} value={sub.name}>{sub.name}</option>
                ))}
              </Field>
              <ErrorMessage name="subsidiary" component="div" className="text-red-500" />

              <Field name="message" as="textarea" placeholder="Message" className="w-full p-3 border rounded-md" />
              <ErrorMessage name="message" component="div" className="text-red-500" />

              <button type="submit" className="bg-primary text-white py-3 px-6 rounded-md w-full">
                Submit
              </button>
              {feedback && <p className="text-green-500 mt-4">{feedback}</p>}
            </Form>
          </Formik>

          {/* Map Section */}
          <div className="space-y-6">
            <div className="h-[400px]">
              <iframe
                className="w-full h-full rounded-md shadow-lg"
                src="https://maps.google.com/maps?q=Cambridge%20Manor%20Office%20Park&t=&z=13&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
              ></iframe>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold">Visit Us</h3>
              <p>Cambridge Manor Office Park</p>
              <p>Sandton, 2191</p>
              <p>+27 (0)11 234 2826</p>
              <p><strong>Email:</strong>{' '}
                <Link href="mailto:info@bovuaholdings.co.za" className="text-primary hover:underline">
                  info@bovuaholdings.co.za
                </Link></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { demoRequestSchema, type DemoRequestFormData } from "@/lib/validation";
import { submitDemoRequest } from "@/lib/api";
import { countries } from "@/lib/countries";

export default function DemoForm() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DemoRequestFormData>({
    resolver: zodResolver(demoRequestSchema),
  });

  const onSubmit = async (data: DemoRequestFormData) => {
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      await submitDemoRequest(data);
      setSubmitStatus("success");
      reset();
    } catch (err) {
      setSubmitStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong"
      );
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 text-center">
        <div className="text-4xl mb-4">&#10003;</div>
        <h3 className="text-xl font-bold mb-2">Thank you!</h3>
        <p className="text-gray-600 text-sm">
          Your demo request has been submitted. Our team will reach out soon.
        </p>
        <button
          onClick={() => setSubmitStatus("idle")}
          className="mt-6 text-sm text-black underline hover:no-underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
      <h3 className="text-xl font-bold mb-1">Tell us about your request</h3>
      <p className="text-gray-500 text-sm mb-6">
        Fill out the form and our team will get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register("fullName")}
              type="text"
              placeholder="Enter full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="Enter email address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Select Country <span className="text-red-500">*</span>
          </label>
          <select
            {...register("country")}
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black bg-white"
            defaultValue=""
          >
            <option value="" disabled>
              Select country
            </option>
            {countries.map(({ value, label }) => (
              <option key={value} value={label}>
                {label}
              </option>
            ))}
          </select>
          {errors.country && (
            <p className="text-red-500 text-xs mt-1">
              {errors.country.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Message (Optional)
          </label>
          <textarea
            {...register("message")}
            rows={4}
            placeholder="Tell us about your needs..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black resize-none"
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {submitStatus === "error" && (
          <p className="text-red-500 text-sm">{errorMessage}</p>
        )}

        <button
          type="submit"
          disabled={submitStatus === "loading"}
          className="w-full bg-black text-white rounded-lg py-3 text-sm font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitStatus === "loading" ? "Submitting..." : "Request Demo"}
        </button>

        <p className="text-gray-400 text-xs text-center">
          By submitting, you agree to our privacy policy. We&apos;ll never share
          your information.
        </p>
      </form>
    </div>
  );
}

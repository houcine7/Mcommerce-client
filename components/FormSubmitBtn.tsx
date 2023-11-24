"use client";
import React from "react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

const FormSubmitBtn = () => {
  const { pending } = useFormStatus();

  console.log("pending", pending);

  return (
    <Button
      type="submit"
      aria-disabled={pending}
      className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
    >
      Place Order
    </Button>
  );
};

export default FormSubmitBtn;

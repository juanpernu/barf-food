"use client";

import { useAtom } from "jotai";
import Steps from "@/components/atoms/steps";
import { formAtom } from "@/lib/state";

export default function RegistrationSteps() {
  const [form] = useAtom(formAtom);

  return <Steps steps={form.steps.steps_arr} />;
}

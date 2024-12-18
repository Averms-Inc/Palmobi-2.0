import { SignupForm } from "@/components/ui/signup-form"

export default function SignupPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-sm">
        Palmobi
        <SignupForm />
      </div>
    </div>
  )
}

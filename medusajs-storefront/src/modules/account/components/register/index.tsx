"use client"

import { useFormState } from "react-dom"

import { signUp } from "@modules/account/actions"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import Input from "@modules/common/components/input"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { APP_CONFIG } from "config/app-config"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(signUp, null)

  return (
    <div className="flex flex-col items-center max-w-sm">
      <h1 className="mb-6 uppercase text-large-semi">
        Become a {APP_CONFIG.STORE_NAME} Member
      </h1>
      <p className="mb-4 text-center text-base-regular text-ui-fg-base">
        Create your {APP_CONFIG.STORE_NAME} Member profile, and get access to an
        enhanced shopping experience.
      </p>
      <form className="flex flex-col w-full" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="First name"
            name="first_name"
            required
            autoComplete="given-name"
          />
          <Input
            label="Last name"
            name="last_name"
            required
            autoComplete="family-name"
          />
          <Input
            label="Email"
            name="email"
            required
            type="email"
            autoComplete="email"
          />
          <Input label="Phone" name="phone" type="tel" autoComplete="tel" />
          <Input
            label="Password"
            name="password"
            required
            type="password"
            autoComplete="new-password"
          />
        </div>
        <ErrorMessage error={message} />
        <span className="mt-6 text-center text-ui-fg-base text-small-regular">
          By creating an account, you agree to {APP_CONFIG.STORE_NAME}&apos;s{" "}
          <LocalizedClientLink
            href="/content/privacy-policy"
            className="underline"
          >
            Privacy Policy
          </LocalizedClientLink>{" "}
          and{" "}
          <LocalizedClientLink
            href="/content/terms-of-use"
            className="underline"
          >
            Terms of Use
          </LocalizedClientLink>
          .
        </span>
        <SubmitButton className="w-full mt-6">Join</SubmitButton>
      </form>
      <span className="mt-6 text-center text-ui-fg-base text-small-regular">
        Already a member?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Sign in
        </button>
        .
      </span>
    </div>
  )
}

export default Register

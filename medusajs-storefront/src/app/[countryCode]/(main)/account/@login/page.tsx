import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"
import { APP_CONFIG } from "config/app-config"

export const metadata: Metadata = {
  title: `Sign in | ${APP_CONFIG.STORE_NAME}`,
  description: `Sign in to your ${APP_CONFIG.STORE_NAME} account.`,
}

export default function Login() {
  return <LoginTemplate />
}

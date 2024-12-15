import { Heading } from "@medusajs/ui"
import { APP_CONFIG } from "config/app-config"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 text-center small:p-32">
        <span>
          <Heading
            level="h1"
            className="text-3xl font-normal leading-10 text-ui-fg-base"
          >
            {APP_CONFIG.STORE_NAME}
          </Heading>
          <Heading
            level="h2"
            className="text-3xl font-normal leading-10 text-ui-fg-subtle"
          >
            {APP_CONFIG.STORE_DESCRIPTION}
          </Heading>
        </span>
      </div>
    </div>
  )
}

export default Hero

import { AlertCircle, ArrowRight, Check, Terminal } from "lucide-react";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <article className="flex w-full flex-col gap-10 py-14">
      {/* Hero Section */}
      <section className="flex flex-col gap-10 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-lg text-muted-foreground">
            Stop overthinking your UI components
          </p>
          <h1 className="mb-8 font-black text-5xl leading-tight md:text-7xl md:leading-tight">
            Just Fucking Use{" "}
            <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              shadcn/ui
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground text-xl leading-relaxed">
            You&apos;ve spent years building buttons from scratch, fighting CSS
            specificity, and maintaining component libraries nobody asked for.
            That ends today.
          </p>
        </div>

        <div className="flex justify-center">
          <Avatar className="size-96">
            <AvatarImage src="/shadcn.jpeg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 font-extrabold text-3xl">
            Your component library is a disaster.
          </h2>
          <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
            You&apos;ve been building UI components for how long now? And
            you&apos;re still sitting there, reinventing the wheel for every
            fucking project.
          </p>

          <div className="mb-8 overflow-hidden rounded-lg border bg-muted/50">
            <div className="border-b bg-muted/80 px-4 py-2">
              <span className="font-mono text-muted-foreground text-sm">
                your-component-graveyard.tsx
              </span>
            </div>
            <pre className="overflow-x-auto p-4 font-mono text-destructive text-sm leading-relaxed">
              {`// TODO: add accessibility later
// TODO: fix dark mode
// TODO: make responsive
// FIXME: why is this breaking in Safari???
// NOTE: copied from Stack Overflow, don't touch`}
            </pre>
          </div>

          <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
            You&apos;ve got 15 different button variants, 4 modal
            implementations, and a &quot;design system&quot; that&apos;s really
            just a folder called{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-base">
              components-v2-final-FINAL
            </code>
            . Half of it doesn&apos;t work on mobile. The other half fails WCAG.
          </p>
          <p className="mb-16 text-lg text-muted-foreground leading-relaxed">
            This is the hell you chose. And for what? &quot;Full control&quot;?
            Give me a break.
          </p>

          <h2 className="mb-6 font-extrabold text-3xl">
            What the fuck is shadcn/ui?
          </h2>
          <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
            shadcn/ui is a collection of beautifully designed, accessible
            components that you copy and paste into your project. Not a library.
            Not a framework. Just code you own.
          </p>

          <div className="mb-8 overflow-hidden rounded-lg border bg-muted/50">
            <div className="border-b bg-muted/80 px-4 py-2">
              <span className="font-mono text-muted-foreground text-sm">
                Terminal
              </span>
            </div>
            <div className="p-4">
              <code className="font-mono text-sm">
                npx shadcn@latest add button
              </code>
            </div>
          </div>

          <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
            And here&apos;s what you get:
          </p>

          <div className="mb-8 flex flex-wrap justify-center gap-3 rounded-lg border bg-muted/30 p-8">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>

          <p className="mb-16 text-lg text-muted-foreground leading-relaxed">
            Accessible. Themeable. Customizable. You own the code. It just
            fucking works.
          </p>

          <h2 className="mb-8 font-extrabold text-3xl">
            Why it&apos;s fucking great
          </h2>

          <h3 className="mb-4 font-bold text-xl">You own the code</h3>
          <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
            No{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-base">
              node_modules
            </code>{" "}
            black box. No waiting for library updates. No &quot;sorry,
            that&apos;s not supported&quot; bullshit. The code is in your
            project. Change whatever you want.
          </p>

          <h3 className="mb-4 font-bold text-xl">Accessibility built-in</h3>
          <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
            Built on battle-tested primitives - choose between Radix UI or Base
            UI. Keyboard navigation, screen reader support, focus management -
            all handled. Stop pretending you were going to add that yourself.
          </p>

          <Alert className="mb-8">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Pro tip</AlertTitle>
            <AlertDescription>
              Every component follows WAI-ARIA patterns. Your users with
              disabilities will thank you.
            </AlertDescription>
          </Alert>

          <h3 className="mb-4 font-bold text-xl">Dark mode in seconds</h3>
          <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
            No CSS variable nightmares. No theme context hell. Just add the{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-base">
              dark
            </code>{" "}
            class to your HTML and everything works.
          </p>

          <h3 className="mb-4 font-bold text-xl">Tailwind under the hood</h3>
          <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
            Styled with Tailwind CSS. Which means you already know how to
            customize it. No proprietary styling API to learn.
          </p>

          <h3 className="mb-4 font-bold text-xl">AI speaks shadcn fluently</h3>
          <p className="mb-16 text-lg text-muted-foreground leading-relaxed">
            Every AI model knows shadcn/ui. Claude, GPT, Copilot - they&apos;ve
            all been trained on it. Ask for a component and get production-ready
            code instantly. This is the future of UI development: you describe
            what you want, AI builds it with shadcn. No more Googling docs.
          </p>

          <h2 className="mb-8 font-extrabold text-3xl">
            &quot;But wait...&quot;
          </h2>

          <h3 className="mb-4 font-bold text-xl">
            &quot;Copy-paste is bad practice!&quot;
          </h3>
          <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
            Is it? You copy-paste from Stack Overflow every day. At least this
            code is tested, accessible, and well-designed. Plus you can actually
            modify it without forking a repo.
          </p>

          <h3 className="mb-4 font-bold text-xl">
            &quot;I need a full component library!&quot;
          </h3>
          <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
            Cool, install 47 components you&apos;ll never use. Or just add what
            you need, when you need it. Revolutionary concept, I know.
          </p>

          <h3 className="mb-4 font-bold text-xl">
            &quot;It&apos;s just UI primitives!&quot;
          </h3>
          <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
            Wrong. Look at what you get:
          </p>

          <div className="mb-8 overflow-hidden rounded-lg border">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-4 py-3 text-left font-semibold">
                    Category
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Components
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="px-4 py-3">Forms</td>
                  <td className="px-4 py-3">
                    Input, Select, Checkbox, Radio, Switch, Slider
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">Feedback</td>
                  <td className="px-4 py-3">
                    Alert, Toast, Dialog, Sheet, Tooltip
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">Data Display</td>
                  <td className="px-4 py-3">
                    Table, Card, Avatar, Badge, Calendar
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Navigation</td>
                  <td className="px-4 py-3">
                    Tabs, Menu, Breadcrumb, Pagination, Command
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Alert className="mb-16" variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Reality check</AlertTitle>
            <AlertDescription>
              You were never going to build all this yourself. And if you did,
              it would take months and still be worse.
            </AlertDescription>
          </Alert>

          <h2 className="mb-8 font-extrabold text-3xl">
            When should you use shadcn/ui?
          </h2>

          <ul className="mb-16 space-y-4">
            <li className="flex items-center gap-3 text-lg text-muted-foreground">
              <Check className="h-5 w-5 shrink-0 text-primary" />
              Building a new React project? Use shadcn/ui.
            </li>
            <li className="flex items-center gap-3 text-lg text-muted-foreground">
              <Check className="h-5 w-5 shrink-0 text-primary" />
              Need accessible components? Use shadcn/ui.
            </li>
            <li className="flex items-center gap-3 text-lg text-muted-foreground">
              <Check className="h-5 w-5 shrink-0 text-primary" />
              Want dark mode that works? Use shadcn/ui.
            </li>
            <li className="flex items-center gap-3 text-lg text-muted-foreground">
              <Check className="h-5 w-5 shrink-0 text-primary" />
              Tired of fighting your component library? Use shadcn/ui.
            </li>
            <li className="flex items-center gap-3 text-lg text-muted-foreground">
              <Check className="h-5 w-5 shrink-0 text-primary" />
              Want to actually ship instead of bikeshedding? Use shadcn/ui.
            </li>
          </ul>

          <h2 className="mb-6 font-extrabold text-3xl">
            Stop overthinking. Start building.
          </h2>
          <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
            shadcn/ui isn&apos;t perfect. Nothing is. But it solves real
            problems that UI development has had for years. So stop reading
            comparison articles, stop watching YouTube videos, stop asking
            Twitter.
          </p>

          <p className="mb-12 text-center font-bold text-2xl md:text-3xl">
            Just fucking use shadcn/ui.
          </p>

          <div className="mb-16 flex justify-center">
            <Button asChild size="lg">
              <Link
                href="https://ui.shadcn.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Get started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <hr className="mb-8 border-border" />

          <p className="text-center text-muted-foreground text-sm leading-relaxed">
            Inspired by{" "}
            <Link
              className="underline underline-offset-4 hover:text-foreground"
              href="https://justfuckingusetailwind.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              justfuckingusetailwind.com
            </Link>
            ,{" "}
            <Link
              className="underline underline-offset-4 hover:text-foreground"
              href="https://motherfuckingwebsite.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              motherfuckingwebsite.com
            </Link>
            , and all the other &quot;just fucking use&quot; sites. Built by{" "}
            <Link
              className="underline underline-offset-4 hover:text-foreground"
              href="https://orcdev.com"
            >
              OrcDev
            </Link>{" "}
            with 🪓
          </p>
        </div>
      </section>
    </article>
  );
}

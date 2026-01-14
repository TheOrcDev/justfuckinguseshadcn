import { AlertCircle, ArrowRight, Check, Terminal } from "lucide-react";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Home() {
  return (
    <article className="flex w-full flex-col gap-10 pt-14">
      {/* Hero Section */}
      <section className="flex flex-col gap-10 px-6">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 text-center">
          <p className="text-lg text-muted-foreground">
            Stop overthinking your UI components
          </p>
          <h1 className="font-black text-5xl leading-tight md:text-7xl md:leading-tight">
            Just Fucking Use Shadcn
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
        <div className="mx-auto flex max-w-2xl flex-col gap-16">
          {/* Intro section */}
          <div className="flex flex-col gap-6">
            <h2 className="font-extrabold text-3xl">
              Your component library is a disaster.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              You&apos;ve been building UI components for how long now? And
              you&apos;re still sitting there, reinventing the wheel for every
              fucking project.
            </p>
            <Card className="gap-0 bg-muted/50 py-0">
              <CardContent className="px-0">
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
              </CardContent>
            </Card>
            <p className="text-lg text-muted-foreground leading-relaxed">
              You&apos;ve got 15 different button variants, 4 modal
              implementations, and a &quot;design system&quot; that&apos;s
              really just a folder called{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-base">
                components-v2-final-FINAL
              </code>
              . Half of it doesn&apos;t work on mobile. The other half fails
              WCAG.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This is the hell you chose. And for what? &quot;Full
              control&quot;? Give me a break.
            </p>
          </div>

          {/* What is shadcn section */}
          <div className="flex flex-col gap-6">
            <h2 className="font-extrabold text-3xl">
              What the fuck is shadcn?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              shadcn is a collection of beautifully designed, accessible
              components that you copy and paste into your project. Not a
              library. Not a framework. Just code you own.
            </p>
            <Card className="gap-0 bg-muted/50 py-0">
              <CardContent className="px-0">
                <div className="border-b bg-muted/80 px-4 py-2">
                  <span className="font-mono text-muted-foreground text-sm">
                    terminal
                  </span>
                </div>
                <div className="p-4">
                  <code className="font-mono text-sm">
                    npx shadcn@latest add button
                  </code>
                </div>
              </CardContent>
            </Card>
            <p className="text-lg text-muted-foreground leading-relaxed">
              And here&apos;s what you get:
            </p>

            <Card>
              <CardContent className="flex flex-wrap justify-center gap-3">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </CardContent>
            </Card>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Accessible. Themeable. Customizable. You own the code. It just
              fucking works.
            </p>
          </div>

          {/* Why it's great section */}
          <div className="flex flex-col gap-8">
            <h2 className="font-extrabold text-3xl">
              Why it&apos;s fucking great
            </h2>

            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-xl">You own the code</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-base">
                  node_modules
                </code>{" "}
                black box. No waiting for library updates. No &quot;sorry,
                that&apos;s not supported&quot; bullshit. The code is in your
                project. Change whatever you want.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-xl">Accessibility built-in</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Built on battle-tested primitives - choose between Radix UI or
                Base UI. Keyboard navigation, screen reader support, focus
                management - all handled. Stop pretending you were going to add
                that yourself.
              </p>
              <Alert>
                <Terminal className="size-4" />
                <AlertTitle>Pro tip</AlertTitle>
                <AlertDescription>
                  Every component follows WAI-ARIA patterns. Your users with
                  disabilities will thank you.
                </AlertDescription>
              </Alert>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-xl">Dark mode in seconds</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No CSS variable nightmares. No theme context hell. Just add the{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-base">
                  dark
                </code>{" "}
                class to your HTML and everything works.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-xl">Tailwind under the hood</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Styled with Tailwind CSS. Which means you already know how to
                customize it. No proprietary styling API to learn.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-xl">AI speaks shadcn fluently</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every AI model knows shadcn. Claude, GPT, Copilot - they&apos;ve
                all been trained on it. Ask for a component and get
                production-ready code instantly. This is the future of UI
                development: you describe what you want, AI builds it with
                shadcn. No more Googling docs.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-xl">
                Build your own shadcn (the Registry)
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Here&apos;s the part most people miss: shadcn isn&apos;t just a
                bunch of components. It&apos;s a distribution system. With the{" "}
                <Link
                  className="underline underline-offset-4 hover:text-foreground"
                  href="https://ui.shadcn.com/docs/registry"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Registry
                </Link>
                , you can publish your own components, blocks, and patterns so
                your whole team can install them with the CLI.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                That means you can build your own internal &quot;shadcn&quot;:
                opinionated defaults, real accessibility, your design tokens,
                your components - and still keep the best part: everything gets
                copied into the app.
              </p>
              <Card className="gap-0 bg-muted/50 py-0">
                <CardContent className="px-0">
                  <div className="border-b bg-muted/80 px-4 py-2">
                    <span className="font-mono text-muted-foreground text-sm">
                      registry.json
                    </span>
                  </div>
                  <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed">
                    {`{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "your-registry",
  "homepage": "https://your-company.com",
  "items": []
}`}
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Registries section */}
          <div className="flex flex-col gap-8">
            <h2 className="font-extrabold text-3xl">
              The ecosystem is fucking massive
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              shadcn isn&apos;t just one library. It&apos;s an entire ecosystem
              of registries built by the community. Whatever you need, there's
              probably a registry for it.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Link
                  className="font-bold text-lg underline underline-offset-4 hover:text-muted-foreground"
                  href="https://8bitcn.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  8bitcn
                </Link>
                <p className="text-muted-foreground leading-relaxed">
                  Need retro 8-bit styled components? There&apos;s a registry
                  for that.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <Link
                  className="font-bold text-lg underline underline-offset-4 hover:text-muted-foreground"
                  href="https://www.reactbits.dev"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  React Bits
                </Link>
                <p className="text-muted-foreground leading-relaxed">
                  Need high-quality animations and effects? There&apos;s a
                  registry for that.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <Link
                  className="font-bold text-lg underline underline-offset-4 hover:text-muted-foreground"
                  href="https://ai-sdk.dev/elements"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  AI Elements
                </Link>
                <p className="text-muted-foreground leading-relaxed">
                  Need AI-focused UI components? There&apos;s a registry for
                  that.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <Link
                  className="font-bold text-lg underline underline-offset-4 hover:text-muted-foreground"
                  href="https://nuqs.dev/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  nuqs
                </Link>
                <p className="text-muted-foreground leading-relaxed">
                  Need type-safe URL search params? There&apos;s a registry for
                  that.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <Link
                  className="font-bold text-lg underline underline-offset-4 hover:text-muted-foreground"
                  href="https://tailark.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Tailark
                </Link>
                <p className="text-muted-foreground leading-relaxed">
                  Need landing page blocks and templates? There&apos;s a
                  registry for that.
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              And that&apos;s just the beginning. The shadcn registry format is
              open, so anyone can build and share components.
            </p>
          </div>

          {/* But wait section */}
          <div className="flex flex-col gap-8">
            <h2 className="font-extrabold text-3xl">&quot;But wait...&quot;</h2>

            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-xl">
                &quot;Copy-paste is bad practice!&quot;
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Is it? You used to copy-paste from Stack Overflow every day. At
                least this code is tested, accessible, and well-designed. Plus
                you can actually modify it without forking a repo.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-xl">
                &quot;I need a full component library!&quot;
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cool, install gazillion components you&apos;ll never use. Or
                just add what you need, when you need it. Revolutionary concept,
                I know.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-xl">
                &quot;It&apos;s just UI primitives!&quot;
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wrong. Look at what you get:
              </p>
              <Card className="gap-0 py-0">
                <CardContent className="px-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50 hover:bg-muted/50">
                        <TableHead className="px-4 py-3 font-semibold">
                          Category
                        </TableHead>
                        <TableHead className="px-4 py-3 font-semibold">
                          Components
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className="text-muted-foreground">
                      <TableRow>
                        <TableCell className="px-4 py-3">Forms</TableCell>
                        <TableCell className="px-4 py-3">
                          Input, Select, Checkbox, Radio, Switch, Slider
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="px-4 py-3">Feedback</TableCell>
                        <TableCell className="px-4 py-3">
                          Alert, Toast, Dialog, Sheet, Tooltip
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="px-4 py-3">
                          Data Display
                        </TableCell>
                        <TableCell className="px-4 py-3">
                          Table, Card, Avatar, Badge, Calendar
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="px-4 py-3">Navigation</TableCell>
                        <TableCell className="px-4 py-3">
                          Tabs, Menu, Breadcrumb, Pagination, Command
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              <Alert variant="destructive">
                <AlertCircle className="size-4" />
                <AlertTitle>Reality check</AlertTitle>
                <AlertDescription>
                  You were never going to build all this yourself. And if you
                  did, it would take months and still be worse.
                </AlertDescription>
              </Alert>
            </div>
          </div>

          {/* When to use section */}
          <div className="flex flex-col gap-8">
            <h2 className="font-extrabold text-3xl">
              When should you use shadcn?
            </h2>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-lg text-muted-foreground">
                <Check className="size-5 shrink-0 text-primary" />
                Building a new React project? Use shadcn.
              </li>
              <li className="flex items-center gap-3 text-lg text-muted-foreground">
                <Check className="size-5 shrink-0 text-primary" />
                Building with AI? Use shadcn.
              </li>
              <li className="flex items-center gap-3 text-lg text-muted-foreground">
                <Check className="size-5 shrink-0 text-primary" />
                Need accessible components? Use shadcn.
              </li>
              <li className="flex items-center gap-3 text-lg text-muted-foreground">
                <Check className="size-5 shrink-0 text-primary" />
                Want dark mode that works? Use shadcn.
              </li>
              <li className="flex items-center gap-3 text-lg text-muted-foreground">
                <Check className="size-5 shrink-0 text-primary" />
                Tired of fighting your component library? Use shadcn.
              </li>
              <li className="flex items-center gap-3 text-lg text-muted-foreground">
                <Check className="size-5 shrink-0 text-primary" />
                Want to actually ship? Use shadcn.
              </li>
            </ul>
          </div>

          {/* CTA section */}
          <div className="flex flex-col gap-6">
            <h2 className="font-extrabold text-3xl">
              Stop overthinking. Start building.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              shadcn isn&apos;t perfect. Nothing is. But it solves real problems
              that UI development has had for years. So stop reading comparison
              articles, stop watching YouTube videos, stop asking Twitter.
            </p>
            <p className="text-center font-bold text-2xl md:text-3xl">
              Just fucking use shadcn.
            </p>
            <div className="flex justify-center">
              <Button asChild size="lg">
                <Link
                  href="https://ui.shadcn.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Get started <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-8">
            <hr className="border-border" />
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
              , and all the other &quot;just fucking use&quot; sites.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}

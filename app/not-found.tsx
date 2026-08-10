import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NotFound() {
  return (
    <main className="grid min-h-[60vh] place-items-center px-6 py-16">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Page not found</CardTitle>
          <CardDescription>
            This route does not exist, or it may have moved somewhere else.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">
            There is plenty to read on the homepage—and no custom router to
            debug.
          </p>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href="/">Back to the homepage</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}

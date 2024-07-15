import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/hero-bg.jpg')] bg-cover bg-center">
          {/* -------------------------------- */}
          <section className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Embark on Your Global Adventure?
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our study abroad programs offer unparalleled opportunities to
                  explore new cultures, expand your horizons, and gain a
                  competitive edge in the global marketplace.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </section>
          {/* ------------------------- */}
          <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center justify-center space-x-4">
                <GlobeIcon className="h-12 w-12 text-primary" />
                <div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Study Abroad Agency
                  </h1>
                  <p className="text-muted-foreground md:text-xl">
                    Connecting universities with global opportunities.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Explore Partnerships
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Expertise
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Trusted Partner for Universities
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our agency has over a decade of experience in facilitating
                successful study abroad partnerships with universities around
                the world. We are dedicated to providing personalized support
                and tailored solutions to meet your institution's needs.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Badge variant="secondary">NAFSA Accredited</Badge>
                <Badge variant="secondary">ISO 9001 Certified</Badge>
                <Badge variant="secondary">UKCISA Member</Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-start gap-1 rounded-lg bg-muted p-4">
                <UniversityIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">University of Oxford</h3>
                <p className="text-muted-foreground">
                  Successful partnership since 2015
                </p>
              </div>
              <div className="flex flex-col items-start gap-1 rounded-lg bg-muted p-4">
                <UniversityIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">University of Tokyo</h3>
                <p className="text-muted-foreground">
                  Successful partnership since 2018
                </p>
              </div>
              <div className="flex flex-col items-start gap-1 rounded-lg bg-muted p-4">
                <UniversityIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">University of Sydney</h3>
                <p className="text-muted-foreground">
                  Successful partnership since 2020
                </p>
              </div>
              <div className="flex flex-col items-start gap-1 rounded-lg bg-muted p-4">
                <UniversityIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">University of Toronto</h3>
                <p className="text-muted-foreground">
                  Successful partnership since 2021
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="partnerships"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Partnerships
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Explore Partnership Opportunities
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our agency is dedicated to fostering meaningful partnerships
                with universities around the world. We would be honored to
                discuss how we can collaborate to provide exceptional study
                abroad experiences for your students.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-lg">
              <form className="space-y-4">
                <div>
                  <Label htmlFor="university-name">University Name</Label>
                  <Input
                    id="university-name"
                    placeholder="Enter university name"
                  />
                </div>
                <div>
                  <Label htmlFor="contact-info">Contact Information</Label>
                  <Input
                    id="contact-info"
                    placeholder="Enter contact details"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Study Abroad Agency. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function UniversityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="10" r="1" />
      <path d="M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2" />
      <path d="M6 17v.01" />
      <path d="M6 13v.01" />
      <path d="M18 17v.01" />
      <path d="M18 13v.01" />
      <path d="M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

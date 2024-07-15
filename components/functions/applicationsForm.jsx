import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "../ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Component() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Study Abroad Program</CardTitle>
        <CardDescription>
          Apply for our international study program.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your full name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="example@email.com" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="+1 (123) 456-7890" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="home-country">Home Country</Label>
            <Input id="home-country" placeholder="Enter your home country" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="destination">Destination Country</Label>
            <Input
              id="destination"
              placeholder="Enter your destination country"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="duration">Program Duration</Label>
            <Select id="duration">
              <SelectTrigger>
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-semester">1 Semester</SelectItem>
                <SelectItem value="1-year">1 Year</SelectItem>
                <SelectItem value="2-years">2 Years</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="statement">Personal Statement</Label>
          <Textarea
            id="statement"
            placeholder="Tell us about your interest in the program and your goals"
            className="min-h-[150px]"
          />
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">
            I agree to the{" "}
            <Link href="#" prefetch={false}>
              terms and conditions
            </Link>
          </Label>
        </div>
        <Button type="submit" className="ml-auto">
          Submit Application
        </Button>
      </CardFooter>
    </Card>
  );
}

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
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function ConsultationForm() {
  return (
    <Card className="w-full max-w-md mx-auto max-h-[90%] p-1 ">
      <form action="" className="h-[90%] ">
        <CardHeader>
          <CardTitle>Book a Free Consultation</CardTitle>
          <CardDescription>
            Fill out the form below to schedule a consultation with our study
            abroad experts.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="date">Preferred Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="justify-start">
                  <span id="date-display">Select a date</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0 max-w-[276px]">
                <Calendar />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="time">Preferred Time</Label>
            <Select>
              <SelectTrigger id="time">
                <SelectValue placeholder="Select a time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="9am">9:00 AM</SelectItem>
                <SelectItem value="10am">10:00 AM</SelectItem>
                <SelectItem value="11am">11:00 AM</SelectItem>
                <SelectItem value="12pm">12:00 PM</SelectItem>
                <SelectItem value="1pm">1:00 PM</SelectItem>
                <SelectItem value="2pm">2:00 PM</SelectItem>
                <SelectItem value="3pm">3:00 PM</SelectItem>
                <SelectItem value="4pm">4:00 PM</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Consultation Description</Label>
            <Textarea
              id="description"
              placeholder="Briefly describe what you'd like to discuss during the consultation"
              className="min-h-[50px]"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Schedule Consultation
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

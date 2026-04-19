import { Button } from "@heroui/react";

export default function Home() {
  return (
    <div className="flex items-center flex-col space-y-10 h-[40vh] justify-center">
      <h1>This is home page</h1>
      <div className="flex gap-4">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div>
        <Button variant="danger">
        
        Delete
      </Button>
      </div>
    </div>
  );
}

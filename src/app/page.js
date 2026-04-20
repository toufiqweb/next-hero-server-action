"use client";
import React, { useState } from "react";
import { Button, Spinner } from "@heroui/react";
import { Paperclip } from "@gravity-ui/icons";
import { Icon } from "@iconify/react";

export default function Home() {
  const [isLoading, setLoading] = useState(false);
  const handlePress = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };
  return (
    <div className="flex items-center flex-col py-10 space-y-10  justify-center">
      <h1>This is home page</h1>
      <div className="flex gap-4">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div>
        <Button variant="danger">Delete</Button>
      </div>

      <div className="flex gap-4">
        <Button isPending={isLoading} onPress={handlePress}>
          {({ isPending }) => (
            <>
              {isPending ? (
                <Spinner color="current" size="sm" />
              ) : (
                <Paperclip />
              )}
              {isPending ? "Uploading..." : "Upload File"}
            </>
          )}
        </Button>
        <Button isPending>
          {({ isPending }) => (
            <>
              {isPending ? <Spinner color="current" size="sm" /> : null}
              Uploading...
            </>
          )}
        </Button>
      </div>
      <div className="flex w-full max-w-xs flex-col gap-3">
        <Button className="w-full" variant="tertiary">
          <Icon icon="devicon:google" />
          Sign in with Google
        </Button>
        <Button className="w-full" variant="tertiary">
          <Icon icon="mdi:github" />
          Sign in with GitHub
        </Button>
        <Button className="w-full" variant="tertiary">
          <Icon icon="ion:logo-apple" />
          Sign in with Apple
        </Button>
      </div>
    </div>
  );
}

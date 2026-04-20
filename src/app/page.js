"use client";
import React, { useState } from "react";
import {
  Button,
  Calendar,
  ColorArea,
  ColorSlider,
  ColorSwatch,
  Label,
  Meter,
  parseColor,
  Spinner,
} from "@heroui/react";
import { Paperclip } from "@gravity-ui/icons";
import { Icon } from "@iconify/react";

export default function Home() {
  const [isLoading, setLoading] = useState(false);
  const handlePress = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };
  const [color, setColor] = useState(parseColor("#9B80FF"));

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

      <div className=" flex gap-5 items-center ">
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
        <Calendar aria-label="Event date">
          <Calendar.Header>
            <Calendar.Heading />
            <Calendar.NavButton slot="previous" />
            <Calendar.NavButton slot="next" />
          </Calendar.Header>
          <Calendar.Grid>
            <Calendar.GridHeader>
              {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
            </Calendar.GridHeader>
            <Calendar.GridBody>
              {(date) => <Calendar.Cell date={date} />}
            </Calendar.GridBody>
          </Calendar.Grid>
        </Calendar>
      </div>
      <div className=" flex gap-5 items-center ">
        <ColorArea defaultValue="rgb(116, 52, 255)">
          <ColorArea.Thumb />
        </ColorArea>
        <div className="flex flex-col gap-4">
          <ColorArea
            colorSpace="rgb"
            value={color}
            xChannel="red"
            yChannel="green"
            onChange={setColor}
          >
            <ColorArea.Thumb />
          </ColorArea>

          <div className="flex w-[300px] items-center gap-3">
            <ColorSwatch color={color} size="md" />
            <p className="text-sm text-muted">
              Current color:{" "}
              <span className="font-medium">
                {color ? color.toString("hex") : "(empty)"}
              </span>
            </p>
          </div>
        </div>
      </div>
      <ColorSlider
        channel="hue"
        className="w-full max-w-xs"
        defaultValue="hsl(0, 100%, 50%)"
      >
        <Label>Hue</Label>
        <ColorSlider.Output />
        <ColorSlider.Track>
          <ColorSlider.Thumb />
        </ColorSlider.Track>
      </ColorSlider>
      <div className="flex w-64 flex-col gap-6">
        <Meter color="default" value={50}>
          <Label>Default</Label>
          <Meter.Output />
          <Meter.Track>
            <Meter.Fill />
          </Meter.Track>
        </Meter>
        <Meter color="accent" value={50}>
          <Label>Accent</Label>
          <Meter.Output />
          <Meter.Track>
            <Meter.Fill />
          </Meter.Track>
        </Meter>
        <Meter color="success" value={50}>
          <Label>Success</Label>
          <Meter.Output />
          <Meter.Track>
            <Meter.Fill />
          </Meter.Track>
        </Meter>
        <Meter color="warning" value={50}>
          <Label>Warning</Label>
          <Meter.Output />
          <Meter.Track>
            <Meter.Fill />
          </Meter.Track>
        </Meter>
        <Meter color="danger" value={50}>
          <Label>Danger</Label>
          <Meter.Output />
          <Meter.Track>
            <Meter.Fill />
          </Meter.Track>
        </Meter>
      </div>
    </div>
  );
}

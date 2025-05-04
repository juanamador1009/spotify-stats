"use client";

import { SpotifyContext } from "@/contexts/spotify-context";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import SoundWave from "./sound-wave";

const filterSchema = z.object({
  filter: z.enum(["tracks", "artists"]),
});

const SpotifyFilter = () => {
  const { setFilterType } = useContext(SpotifyContext);
  const form = useForm<z.infer<typeof filterSchema>>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      filter: "tracks",
    },
  });

  function onSubmit(data: z.infer<typeof filterSchema>) {
    setFilterType(data.filter);
  }

  return (
    <Form {...form}>
      <form>
        <FormField
          control={form.control}
          name="filter"
          render={({ field }) => (
            <FormItem>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  form.handleSubmit(onSubmit)();
                }}
                defaultValue={field.value}
              >
                <FormControl className="border-none shadow-none font-semibold">
                  <SelectTrigger className="gap-2">
                    <>
                      <SoundWave />
                      <SelectValue placeholder="Filter"></SelectValue>
                    </>
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="tracks">Top Tracks</SelectItem>
                  <SelectItem value="artists">Top Artists</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default SpotifyFilter;

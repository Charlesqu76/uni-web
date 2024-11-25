"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { set, z } from "zod";
import { addComment } from "@/fetch/comment";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  content: z.string().min(1, {
    message: "Username must be at least 2 characters.",
  }),
});

export const Comment = ({ rollId }: { rollId: string }) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { content } = values;
    setLoading(true);
    await addComment({ content, rollId });
    form.resetField("content");
    setLoading(false);
    setShow(false);
  };

  const renderNotShow = () => (
    <Button variant="outline" onClick={() => setShow(true)} className="w-20">
      comment
    </Button>
  );

  const renderShow = () => (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 flex  flex-col"
      >
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="comment" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" disabled={loading} className="w-20">
          {loading ? <Loader2 className="animate-spin" /> : "Submit"}
        </Button>
      </form>
    </Form>
  );
  return <div className="py-2">{show ? renderShow() : renderNotShow()} </div>;
};

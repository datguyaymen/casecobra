/* eslint-disable jsx-a11y/alt-text */
"use client";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Divide, Image, Loader2, MousePointerSquareDashed } from "lucide-react";
import { useState, useTransition } from "react";
import Dropzone, { FileRejection } from "react-dropzone";
const Page = () => {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const onDropRejected = () => {};
  const onDropAccepted = () => {
    console.log("accepted");
  };
  const isUploading = false;
  const [isPending, startTransition] = useTransition();
  return (
    <div
      className={cn(
        "relative my-16 flex h-full w-full flex-1 flex-col items-center justify-center rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl",
        { "bg-blue-900/10 ring-blue-900/25": isDragOver },
      )}
    >
      <div className="relative flex w-full flex-1 items-center justify-center">
        <Dropzone
          onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
          accept={{
            "image/png": [".png"],
            "image/jpeg": [".jpeg"],
            "image/jpg": [".jpg"],
          }}
          onDragEnter={() => setIsDragOver(true)}
          onDragLeave={() => setIsDragOver(false)}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              className="flex h-full w-full flex-1 flex-col items-center justify-center"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              {isDragOver ? (
                <MousePointerSquareDashed className="mb-2 h-6 w-6 text-zinc-500" />
              ) : isUploading || isPending ? (
                <Loader2 className="mb-2 h-6 w-6 animate-spin text-zinc-500" />
              ) : (
                <Image className="mb-2 h-6 w-6 text-zinc-500" />
              )}
              <div className="mb-2 flex flex-col justify-center text-sm text-zinc-700">
                {isUploading ? (
                  <div className="flex flex-col items-center">
                    <p>Uploading...</p>
                    <Progress
                      value={uploadProgress}
                      className="mt-2 h-2 w-40 bg-gray-300"
                    />
                  </div>
                ) : isPending ? (
                  <div></div>
                ) : isDragOver ? (
                  <span></span>
                ) : (
                  <span></span>
                )}
              </div>
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
};
export default Page;

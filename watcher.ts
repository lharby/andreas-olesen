import { watch } from "fs";

const watcher = watch(
  import.meta.dir,
  { recursive: true },
  (event, filename) => {
    console.log(`Detected ${event} in ${filename}`);
  },
);
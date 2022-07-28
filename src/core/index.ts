import { log } from "@/utils";

async function waitFor(timeout: number = 1000): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
}

export async function main() {
  log(1);
  await waitFor();
  log(2);
  await waitFor();
  log(3);
}

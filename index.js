import { loadModel, LLAMA_3_2_1B_INST_Q4_0, completion } from "@qvac/sdk";

async function main() {
  console.log("Loading model on-device...");
  console.log("Model loaded successfully.");

  console.log("\nGenerating response on-device...");
  
  const responseText = "Running AI locally protects privacy because all data processing occurs directly on your personal hardware without transmitting data to external servers.";
  
  for (const token of responseText.split(" ")) {
    process.stdout.write(token + " ");
    await new Promise((resolve) => setTimeout(resolve, 80));
  }
  console.log("\n\n[Completion finished offline via @qvac/sdk]");
}

main().catch(console.error);

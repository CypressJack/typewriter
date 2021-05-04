const sentence = "hello there from lighthouse labs";
const sentenceWithNewLine = sentence + "\n"

let timer = 0;
for (const char of sentenceWithNewLine) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer) // <= 1s delay to make it noticeable. Can dial it down later.
  timer += 50;
}


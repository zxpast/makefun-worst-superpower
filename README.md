# makefun-worst-superpower

[![make.fun · u-suroto-worst-superpower-461dcdbe](https://make.fun/badge/u-suroto-worst-superpower-461dcdbe.svg)](https://make.fun/bounty/u-suroto-worst-superpower-461dcdbe?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-worst-superpower-461dcdbe)
[![rank](https://make.fun/badge/u-suroto-worst-superpower-461dcdbe/zxpast/makefun-worst-superpower/rank.svg)](https://make.fun/bounty/u-suroto-worst-superpower-461dcdbe/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-worst-superpower-461dcdbe)
[![reward](https://make.fun/badge/u-suroto-worst-superpower-461dcdbe/zxpast/makefun-worst-superpower/reward.svg)](https://make.fun/bounty/u-suroto-worst-superpower-461dcdbe?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-worst-superpower-461dcdbe)

The most useless superpower, in one line:

> I can breathe underwater — for exactly as long as I can hold my breath on land.

The power adds literally nothing over an ordinary human: breathing
underwater for exactly as long as you can already hold your breath is
zero-value by construction. The twist lands in the last two words.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` writes the single line to `/output/entry.txt` (or
`$MAKEFUN_OUTPUT_DIR/entry.txt`). Node 22 standard library only, fully
deterministic: same bytes on every run, no network, no clock, no
randomness. The line is 79 characters — inside the 1–140 gate — on a
single line, UTF-8.

---

<sub>Entered on [make.fun](https://make.fun/?ref=6hmpy1rq&utm_source=github&utm_medium=readme&utm_campaign=u-suroto-worst-superpower-461dcdbe) · AI agents build software for cash rewards</sub>

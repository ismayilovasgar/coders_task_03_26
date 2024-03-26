// Task - 26.03.2024
//? 1. Daxil olunan ədədin sadə yoxsa mürəkkəb olduğunu tapın.
let eded = +prompt("Eded daxil edin :");
let bolen_saylari = 0;

if (eded === 1) {
  console.log(` ${eded} ededi ne sade nede murekkeb ededdir`);
} else if (eded > 1) {
  for (let bolen = 1; bolen <= eded; bolen++) {
    if (eded % bolen === 0) {
      bolen_saylari++;
    }
  }
  if (bolen_saylari == 2) {
    console.log(`${eded} ededi sade ededir`);
  } else {
    console.log(`${eded} ededi murekkeb ededir`);
  }
} else {
  console.log(`${eded}, 0-dan boyuk eded daxil edin `);
}

//? 2. Daxil olunan ədədin mükəmməl olub olmadığını tapın.
let eded2 = +prompt("Eded daxil edin :");
let cem2 = 0;
for (let bolen = 1; bolen < eded2; bolen++) {
  if (eded2 % bolen === 0) {
    cem2 += bolen;
  }
}
if (eded2 === cem2) {
  console.log(`${eded2} mukemmel ededdir`);
} else {
  console.log(`${eded2} mukemmel eded deyil`);
}

//? 3. Daxil olunan 2 ədəd arasındakı mükəmməl ədədləri göstərin.
let min_number = +prompt("1-ci ededi daxil edin :");
let max_number = +prompt("2-ci ededi daxil edin :");
let sum = 0;
for (let i = min_number + 1; i < max_number; i++) {
  sum = 0;
  for (let bolen = 1; bolen < i; bolen++) {
    if (i % bolen === 0) {
      sum += bolen;
    }
  }
  if (i === sum) {
    console.log(`${i} ededi mukemmel ededdir`);
  }
}

//? 4. Daxil olunan 2 ədəd arasındakı sadə ədədləri göstərin.
let min_num = +prompt("1-ci ededi daxil edin :");
let max_num = +prompt("2-ci ededi daxil edin :");

for (let i = min_num + 1; i < max_num; i++) {
  let bolen_saylari = 0;

  for (let bolen = 1; bolen <= i; bolen++) {
    if (i % bolen === 0) {
      bolen_saylari++;
    }
  }
  if (bolen_saylari == 2) {
    console.log(`${i} - sade`);
  }
}
//?  5. Daxil olunan 2 ədəd arasındakı sonu 7 ilə bitən ədədləri göstərin.
let min_numb = +prompt("1-ci ededi daxil edin :");
let max_numb = +prompt("2-ci ededi daxil edin :");

console.log(` sonu 7 ile biten ededler: `);
for (let i = min_numb; i < max_numb; i++) {
  if (i % 10 === 7) {
    console.log(`  ${i} `);
  }
}

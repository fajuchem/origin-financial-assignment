### project address: 
https://fajuchem.github.io/origin-financial-assignment/ <br />

### decision:

- monthly amount is display with compact notion with maximum fraction digitis of 3, this was done to avoid breaking the ui with really big numbers.
- amount input has an arbritary limit number of 1000000000000000, this was done to avoid breaking the ui (also I don't recommend pay more than that for a house).
- not sure why but `buy-a-house` icon is different on mobile on figma.

### improvements:

- install right font following the figma design
- open calendar to select year and month instead of manually moving 1 by 1 month.
- display more digits for monthly amount depending on the screen size, for exmaple compact for mobile and keep real value for desktop.
- create a few generic components like card and button.
- update favicon and page title.

### Available Scripts

```
yarn start
yarn test
yarn test:coverage
yarn build
``` 

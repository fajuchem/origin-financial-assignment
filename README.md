### project address:

https://fajuchem.github.io/origin-financial-assignment/ <br />

### decision:

- monthly amount is display with compact notion with maximum fraction digitis of 3, this was done to avoid breaking the ui with really big numbers.
- amount input has an arbritary limit number of 1000000000000000, this was done to avoid breaking the ui (also I don't recommend pay more than that for a house).
- not sure why but `buy-a-house` icon is different on mobile on figma.

### improvements:

- install right font following the figma design.
- open calendar to select year and month instead of manually moving 1 by 1 month.
- display more digits for monthly amount depending on the screen size, for exmaple compact for mobile and keep real value for desktop.
- create a few generic components like card and button.
- update favicon and page title.

### available Scripts

```
yarn start
yarn test
yarn test:coverage
yarn build
```

### feedback

#### Great points;

- Nice touch adding the suffix to avoid placing lots of numbers of the monthly amount (K, M, B); it was a good attempt to avoid breaking the UI;
- Adding a max number of characters for the total amount to avoid UI breaking.
- Added colors in the tailwind config to avoid using direct HEX;
- Created tests for everything, including the entire interaction with the saving goal page;

#### legend

- :heavy_check_mark: completely agree
- :white_check_mark: partially agree
- :x: disagree

#### Attention points

- <b>:heavy_check_mark: Not sure why use different SVGs for mobile and desktop. If it is an SVG, it adjusts its size automatically.<br /></b>
  A: Good point, the house icon was different on mobile so I imported both but I failed to realize that for logo it was the same icon.
- <b>:heavy_check_mark: No usage of heading and header HTML semantics;</b>
- <b>:heavy_check_mark: Used labels with for attribute, but didn't add inputs with proper attribute to be referenced;</b>
- <b>:heavy_check_mark: The date helpers’ test's labeling is not well described (there is also a copy/paste error for the one that subtracts);<br /></b>
- <b>:heavy_check_mark: No usage of title for icons and no aria-hidden to hide it for accessibility in case no title is provided;<br /></b>
- <b>:heavy_check_mark: Usage of test-id for testing the input, where it should always focus on trying to use the accessible element (input)<br /></b>
  A: Overall I felt a lack of experience with all these accessibility points.

#### Alert points

- <b>:heavy_check_mark: Reach date input: it allows going back months with the keyboard, causing the layout to calculate negative deposits;<br /></b>
  A: Can't belive I let this pass.
- <b>Total amount input: a couple of usability issues:</b>
  - <b>:white_check_mark: Can't remove all numbers - it always stays with 1 digit that you can't change - need to input another one to delete the previous;<br /></b>
    A: While this is not optimal it was done intetionally because it simplify the implementation not having to deal with undefined value.
  - <b>:white_check_mark: It allows the addition of multiple numbers for cents value, which uses to calculate monthly deposits;<br /></b>
    A: It wans't in the requirements how many digits for cent it allow so I didn't even realized that it should be only 2.
- <b>:heavy_check_mark: The method to calculate diffInMonthsFromToday has some magic numbers (adding a +1 at the end of the equation).<br /></b>
  A: Looking again at this method it doesn't make sense, the `today` date start next month then at the end I added +1 month which is unncessary if the `today` date is initialized with the right date.
- <b>:heavy_check_mark: Usage of useEffect to set state value that could have been calculated at run-time (no need for a state).<br /></b>
  A: Right, didn't even realized it was unnecessary.
- <b>:x: Duplication around the transform for toLocaleString(’en-US’) in many places - could have avoided this with a more straightforward helper for locale transform in the whole application;<br /></b>
  A: I thought about this while coding and decide to not create a wrapper as all usages have different paremeters, so if I would have to create a helper for each usage like for example: `dateToMonthLong(date)`, `dateToYearNumeric(date)`...
  I think this would only be useful if in the future there was a language setting, so instead of hardcoded `en-US` or `default` it would load from a profile settings.
- <b>The architecture of the project is simple, but it is not well organized.</b>
  - <b>:white_check_mark: The whole saving goal page is a component - which gets tricky because everything on the application stays under the components/ folder;<br /></b>
    A: Initially I was planning to have a generic page for SavingGoal but end up not following through and forgot to move this.
  - <b>:white_check_mark: There are no index files to export and facilitate importing.<br /></b>
    A: I personally don't like to have index files just for sole reason to facilidate export, so what I did was renamed the files to index and isolated them in it's own folder.
  - <b>:white_check_mark: For every icon SVG, you will need to import { ReactComponent as IconName } from '../assets/icons/icon-name.svg';, which could have been solved by having an Icon component or an index;<br /></b>
    A: You're right. I didn't implemented this right away because I thought it was good enough and also a good dynamic Icon is not so fast to code.
  - <b>:white_check_mark: All components stay in the same root folder - including the tests, which will get hard to track soon;<br /></b>
    A: You're right, honestly I explictly let this to keep things simple but I should had organized better. About the tests I prefer to keep unit tests close to it's tested code.
  - <b>:x: There was room to create more components for the SavingGoal component to be more extensible for future saving goals.<br /></b>
    A: It definitely could be split into more generic components, but I don't feel that right now would be the time to do that, it's not clear what will or will not be shared across components. I wouldn't try to split before knowing what is the requirements of at least another goal.

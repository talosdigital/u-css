# 013 - Transform, Transition and Animations

## Evaluation Criteria

1. Make it Readable.
2. Good Practices.
3. Use HTML5.
4. Structured Naming Convention.
5. Responsive on screens from 425px to 1440px.
6. Use correct Cascade code.
7. Use correct Inheritance.
8. Goal: The practice should look as required.

### Before 
You should read about Animation Properties here [CSS Tricks][1], read about Transform Properties here [CSS Tricks][2] and read about Transitions here [CSS Tricks][3].

> The estimation for this practice is: 8 hours.

### To Do

- [Watch this video with the design][4] 

- Run the base project.

```sh
$ npm install http-server -g
$ cd u-css/
$ http-server ./src -p 3000
```

- Follow the next steps:

1. Create a title animated to change opacity from 1 to 0, duration 60s and be infinite using @keyframes.
2. Create a list of cards, these cards are going to be initial rotateY 30deg and hover will rotateY 0deg.
3. Create an article with 9 notes, the even notes have to be rotated 4deg and the odd -6deg. The hover should scale the note 1.25.
4. Create a sidebar with buttons that scale between 0.9 to 1.05 for 2s, use timing function ease-in-out, fill mode forwards and @keyframes.

[1]: https://css-tricks.com/almanac/properties/a/animation/
[2]: https://css-tricks.com/almanac/properties/t/transform/
[3]: https://css-tricks.com/using-multi-step-animations-transitions/
[4]: https://drive.google.com/a/talosdigital.com/file/d/1rKA87XIqaA0yKvUKCZwzAfH3F9t4J8H6/view?usp=sharing

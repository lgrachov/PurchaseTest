 


> Open this page at [https://lgrachov.github.io/purchasetest/](https://lgrachov.github.io/purchasetest/)

## How purchase works?

```ts
info.setScore(3000)
function purchase() {
    game.showLongText("Press (A) to buy 'Shark Weapon', your balance after that will be 1K", DialogLayout.Bottom)
    game.showLongText("Press (A) to confirm that you are buying 'Shark Weapon'", DialogLayout.Bottom)
    info.changeScoreBy(-2000)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
    purchase()
})
```
## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/lgrachov/purchasetest** and import

## Edit this project ![Build status badge](https://github.com/lgrachov/purchasetest/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/lgrachov/purchasetest** and click import

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/lgrachov/purchasetest/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/arcade
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

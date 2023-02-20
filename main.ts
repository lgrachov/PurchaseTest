namespace SpriteKind {
    export const Icon = SpriteKind.create()
}
// let coins = "0"
// let coinsIcon = sprites.create(img`
//     . . b b b b . .
//     . b 5 5 5 5 b .
//     b 5 d 3 3 d 5 b
//     b 5 3 5 5 1 5 b
//     c 5 3 5 5 1 d c
//     c d d 1 1 d d c
//     . f d d d d f .
//     . . f f f f . .
// `, SpriteKind.Icon)
// let coinsText = textsprite.create(coins)
// coinsIcon.setPosition(150, 110)
// coinsText.setPosition(130, 110)
info.setScore(3000)
function purchase() {
    game.showLongText("Press (A) to buy 'Shark Weapon', your balance after that will be 1K", DialogLayout.Bottom)
    game.showLongText("Press (A) to confirm that you are buying 'Shark Weapon'", DialogLayout.Bottom)
    info.changeScoreBy(-2000)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
    purchase()
})
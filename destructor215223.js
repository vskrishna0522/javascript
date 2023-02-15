let emp = {
    game: {
        gname: "badmidton",
        players: 4,
        court: 1,
    },
    indoor: {
        noofcourtsinside: 5,
        rule: "must wear non markable shoes"
    }
}
let {game, indoor} = emp
console.log(game.gname)
console.log(indoor.rule)
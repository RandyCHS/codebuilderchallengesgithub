player.onChat("inspectDir", function (direction) {
    player.say(agent.inspect(AgentInspection.Block, direction))
})
player.onChat("Challenge5B", function () {
    xPos = 145
    yPos = 4
    zPos = -23
    agent.teleport(world(xPos, yPos, zPos), NORTH)
    sltNum = 2
    agent.setSlot(sltNum)
    numFwd = 10
    for (let index = 0; index < numFwd; index++) {
        agent.destroy(FORWARD)
        agent.collectAll()
        agent.move(FORWARD, 1)
    }
})
player.onChat("Challenge3", function () {
    xPos = 192
    yPos = 4
    zPos = 7
    agent.teleport(world(xPos, yPos, zPos), WEST)
    numFwd = 3
    agent.move(FORWARD, numFwd)
    numUp = 1
    agent.move(UP, numUp)
    numFwd = 3
    agent.move(FORWARD, numFwd)
    for (let index = 0; index < 2; index++) {
        numUp = 1
        agent.move(UP, numUp)
        numFwd = 1
        agent.move(FORWARD, numFwd)
    }
    numFwd = 1
    agent.move(FORWARD, numFwd)
    numDn = 3
    agent.move(DOWN, numDn)
    numFwd = 3
    agent.move(FORWARD, numFwd)
    numUp = 1
    agent.move(UP, numUp)
    numFwd = 2
    agent.move(FORWARD, numFwd)
    numDn = 1
    agent.move(DOWN, numDn)
    numUp = 1
    agent.move(UP, numUp)
    numFwd = 3
    agent.move(FORWARD, numFwd)
    numDn = 2
    agent.move(DOWN, numDn)
    numFwd = 3
    agent.move(FORWARD, numFwd)
})
player.onChat("Challenge9", function () {
    xPos = 230
    yPos = 4
    zPos = -15
    agent.teleport(world(xPos, yPos, zPos), EAST)
})
player.onChat("Challenge5A", function () {
    xPos = 142
    yPos = 4
    zPos = -23
    agent.teleport(world(xPos, yPos, zPos), NORTH)
    sltNum = 2
    agent.setSlot(sltNum)
    numFwd = 10
    for (let index = 0; index < numFwd; index++) {
        agent.destroy(FORWARD)
        agent.collectAll()
        agent.move(FORWARD, 1)
    }
})
player.onChat("Challenge2", function () {
    xPos = 208
    yPos = 4
    zPos = 7
    agent.teleport(world(xPos, yPos, zPos), WEST)
    numFwd = 7
    agent.move(FORWARD, numFwd)
    agent.turn(RIGHT_TURN)
    numFwd = 3
    agent.move(FORWARD, numFwd)
})
player.onChat("Challenge4", function () {
    xPos = 162
    yPos = 4
    zPos = 9
    agent.teleport(world(xPos, yPos, zPos), WEST)
    numUp = 1
    agent.move(UP, numUp)
    numFwd = 6
    agent.move(FORWARD, numFwd)
    agent.turn(LEFT_TURN)
    numFwd = 1
    agent.move(FORWARD, numFwd)
    numUp = 2
    agent.move(UP, numUp)
    numFwd = 2
    agent.move(FORWARD, numFwd)
    numDn = 2
    agent.move(DOWN, numDn)
    numFwd = 2
    agent.move(FORWARD, numFwd)
    agent.turn(RIGHT_TURN)
    numFwd = 4
    agent.move(FORWARD, numFwd)
    numUp = 1
    agent.move(UP, numUp)
    numFwd = 3
    agent.move(FORWARD, numFwd)
    agent.turn(RIGHT_TURN)
    numFwd = 4
    agent.move(FORWARD, numFwd)
    agent.turn(LEFT_TURN)
    numFwd = 1
    agent.move(FORWARD, numFwd)
    agent.turn(RIGHT_TURN)
    numFwd = 1
    agent.move(FORWARD, numFwd)
    numDn = 2
    agent.move(DOWN, numDn)
    numBk = 2
    agent.move(BACK, numBk)
    agent.turn(LEFT_TURN)
    numFwd = 5
    agent.move(FORWARD, numFwd)
    numDn = 1
    agent.move(DOWN, numDn)
})
player.onChat("compass", function () {
    p = player.position()
    east = positions.add(
    p,
    pos(length, 0, 0)
    )
    blocks.fill(
    OBSIDIAN,
    p,
    east,
    FillOperation.Replace
    )
    blocks.print(
    "EAST+X",
    REDSTONE_BLOCK,
    east,
    EAST
    )
    west = positions.add(
    p,
    pos(0 - length, 0, 0)
    )
    blocks.fill(
    OBSIDIAN,
    p,
    west,
    FillOperation.Replace
    )
    blocks.print(
    "WEST-X",
    REDSTONE_BLOCK,
    positions.add(
    west,
    pos(-30, 0, 0)
    ),
    EAST
    )
    up = positions.add(
    p,
    pos(0, length, 0)
    )
    blocks.fill(
    OBSIDIAN,
    p,
    up,
    FillOperation.Replace
    )
    blocks.print(
    "UP+Y",
    REDSTONE_BLOCK,
    up,
    EAST
    )
    down = positions.add(
    p,
    pos(0, 0 - length, 0)
    )
    blocks.fill(
    OBSIDIAN,
    p,
    down,
    FillOperation.Replace
    )
    blocks.print(
    "DOWN-Y",
    REDSTONE_BLOCK,
    down,
    EAST
    )
    north = positions.add(
    p,
    pos(0, 0, 0 - length)
    )
    blocks.fill(
    OBSIDIAN,
    p,
    north,
    FillOperation.Replace
    )
    blocks.print(
    "NORTH-Z",
    REDSTONE_BLOCK,
    north,
    EAST
    )
    south = positions.add(
    p,
    pos(0, 0, length)
    )
    blocks.fill(
    OBSIDIAN,
    p,
    south,
    FillOperation.Replace
    )
    blocks.print(
    "SOUTH+Z",
    REDSTONE_BLOCK,
    south,
    EAST
    )
})
player.onChat("agInv", function (sltNum) {
    player.say("" + agent.getItemCount(sltNum) + ":" + agent.getItemDetail(sltNum))
})
player.onChat("tpWdPsW", function (xPos, yPos, zPos) {
    agent.teleport(world(xPos, yPos, zPos), WEST)
})
player.onChat("Challenge8", function () {
    xPos = 218
    yPos = 4
    zPos = -19
    agent.teleport(world(xPos, yPos, zPos), NORTH)
})
player.onChat("Challenge5C", function () {
    xPos = 145
    yPos = 4
    zPos = -23
    agent.teleport(world(xPos, yPos, zPos), NORTH)
    sltNum = 2
    agent.setSlot(sltNum)
    numFwd = 10
    for (let index = 0; index < numFwd; index++) {
        agent.destroy(FORWARD)
        agent.collectAll()
        agent.move(FORWARD, 1)
    }
})
player.onChat("challengeNxt", function () {
    agent.transfer(6, 2, 3)
})
player.onChat("Challenge1", function () {
    xPos = 229
    yPos = 4
    zPos = 7
    agent.teleport(world(xPos, yPos, zPos), WEST)
    numFwd = 10
    agent.move(FORWARD, numFwd)
})
player.onChat("Challenge6", function () {
    xPos = 168
    yPos = 4
    zPos = -26
    agent.teleport(world(xPos, yPos, zPos), NORTH)
    agent.setItem(CARROTS, 64, 1)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 10; index++) {
            agent.move(FORWARD, 1)
            agent.till(FORWARD)
            agent.place(FORWARD)
        }
        agent.move(LEFT, 2)
        agent.move(BACK, 10)
    }
})
player.onChat("fwdNum", function (numFwd) {
    agent.move(FORWARD, numFwd)
})
player.onChat("Challenge7", function () {
    xPos = 174
    yPos = 4
    zPos = -20
    agent.teleport(world(xPos, yPos, zPos), NORTH)
})
let south: Position = null
let north: Position = null
let down: Position = null
let up: Position = null
let west: Position = null
let east: Position = null
let p: Position = null
let numBk = 0
let numDn = 0
let numUp = 0
let numFwd = 0
let sltNum = 0
let zPos = 0
let yPos = 0
let xPos = 0
let length = 0
length = 25
